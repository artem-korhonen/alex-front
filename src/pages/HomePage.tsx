import { Play } from "lucide-react";
import MainPlaylistFrame from "../components/MainPlaylistFrame";
import PlaylistFrame from "../components/PlaylistFrame";
import ReleaseFrame from "../components/ReleaseFrame";
import { useEffect, useState } from "react";
import type { ReleaseShort } from "../interfaces/Release";
import type { PlaylistShort } from "../interfaces/Playlist";
import { getAllReleases } from "../api/releases";
import { getAllPlaylists } from "../api/playlists";

function HomePage() {
    const [openColorPicker, setOpenColorPicker] = useState<boolean>(false);
    const [pickerPosition, setPickerPosition] = useState({ x: 0, y: 0 });

    const [releaseFrames, setReleaseFrames] = useState<ReleaseShort[]>([]);
    const [playlistFrames, setPlaylistFrames] = useState<PlaylistShort[]>([]);

    const handleNameClick = (e: React.MouseEvent) => {
        setPickerPosition({
            x: e.clientX,
            y: e.clientY
        });

        setOpenColorPicker(!openColorPicker);
    }

    useEffect(() => {
        const loadHome = async () => {
            const releases = await getAllReleases();
            const playlists = await getAllPlaylists();

            console.log(releases);
            console.log(playlists);

            setReleaseFrames(releases);
            setPlaylistFrames(playlists)
        }

        loadHome()
    }, [])

    if (!playlistFrames || !releaseFrames) {
        return (
            <div>
                <h1 className="text-[var(--color-text)]">Loading...</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-10">
            <div className="flex select-none">
                <h1 className="text-[var(--color-text)] font-bold text-2xl">Добрый вечер, <span className="text-[var(--color-primary)] font-bold text-2xl cursor-pointer" onClick={handleNameClick}>Александр</span>
                </h1>
            </div>

            {openColorPicker && <div className="fixed z-10" style={{ top: pickerPosition.y, left: pickerPosition.x }}>
                <div className="flex flex-col">
                    {["#fff", "#ff0", "#f0f", "#0ff", "#f00", "#0f0", "#00f"].map((c) => (
                        <button
                            key={c}
                            onClick={() => {
                                document.documentElement.style.setProperty("--color-primary", c);
                                setOpenColorPicker(false);
                            }}
                            className="w-10 h-10 rounded-lg cursor-pointer hover:scale-110 transition-transform"
                            style={{ backgroundColor: c }}
                        />
                    ))}
                </div>
            </div>}

            <div className="flex items-center justify-center">
                <div
                    className="
        shine-button w-[85%] rounded-4xl flex flex-col items-center justify-center gap-10 
        h-[60vh] font-black cursor-pointer scale-98 transition-all duration-300 
        hover:scale-100 shadow-[0_0_50px_var(--color-primary)]
        hover:bg-[url('./assets/imeon.gif')] hover:bg-cover hover:bg-center
        "
                >
                    <Play
                        className="text-[var(--color-primary)] fill-[var(--color-primary)] drop-shadow-[0_0_20px_var(--color-primary)]"
                        size={100}
                    />
                    <h1 className="text-[var(--color-text)] text-4xl text-center select-none">
                        ЗАПУСТИТЬ ПЛЕЕР
                    </h1>
                </div>
            </div>

            <div className="flex gap-3 h-30">
                <MainPlaylistFrame id={1} name={"Любимое"} icon_name={"like"} />
                <MainPlaylistFrame id={1} name={"История"} icon_name={"history"} />
            </div>

            <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-xl text-[var(--color-text)]">Релизы</h1>
                    </div>

                    <div className="flex gap-3 overflow-x-auto pb-3">
                        {releaseFrames.map((element) => (
                            <ReleaseFrame id={element.id} name={element.name} cover={element.cover} type={element.type} artists={element.artists} />
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-2">
                    <div className="flex justify-between items-center">
                        <h1 className="font-bold text-xl text-[var(--color-text)]">Плейлисты</h1>
                        <span className="cursor-pointer text-md text-[var(--color-text-dark)]">Показать все...</span>
                    </div>

                    <div className="scroll-hide flex gap-3 overflow-x-auto pb-3">
                        {playlistFrames.map((element) => (
                            <PlaylistFrame id={element.id} name={element.name} cover={element.cover} count={element.count} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}


export default HomePage;