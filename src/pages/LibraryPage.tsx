import { ChevronRight, CirclePlus, Heart, User } from "lucide-react";
import SongLine from "../components/SongLine";
import PlaylistFrame from "../components/PlaylistFrame";
import { useNavigate } from "react-router-dom";
import MainPlaylistFrame from "../components/MainPlaylistFrame";
import type { SongShort } from "../interfaces/Song";
import type { PlaylistShort } from "../interfaces/Playlist";

function LibraryPage() {
    const navigate = useNavigate();

    const lastTracks: SongShort[] = [
        {
            id: 1, 
            name: "omg", 
            cover: "/", 
            artists: ["abc", "abcd", "abcdewwwwwwwwwwwwwwwwwwww"],
            is_liked: true
        },
        {
            id: 1, 
            name: "omg", 
            cover: "/", 
            artists: ["abc", "abcd", "abcdewwwwwwwwwwwwwwwwwwww"],
            is_liked: true
        },
        {
            id: 1, 
            name: "omg", 
            cover: "/", 
            artists: ["abc", "abcd", "abcdewwwwwwwwwwwwwwwwwwww"],
            is_liked: true
        },
        {
            id: 1, 
            name: "omg", 
            cover: "/", 
            artists: ["abc", "abcd", "abcdewwwwwwwwwwwwwwwwwwww"],
            is_liked: true
        },
        {
            id: 1, 
            name: "omg", 
            cover: "/", 
            artists: ["abc", "abcd", "abcde"],
            is_liked: true
        },
    ]

    const myPlaylists: PlaylistShort[] = [
        {id: 1, name: "abc", cover: "/", count: 5},
        {id: 2, name: "abc", cover: "/", count: 5},
        {id: 3, name: "abc", cover: "/", count: 5},
        {id: 4, name: "abc", cover: "/", count: 5},
        {id: 5, name: "abc", cover: "/", count: 5}
    ]

    return (
        <div className="flex flex-col gap-10">
            <h1 className="text-[var(--color-text)] font-bold text-2xl">Медиатека</h1>

            <div className="bg-[var(--color-bg-black)] rounded rounded-2xl shadow-[0_0_20px_var(--color-primary)]">
                <div className="cursor-pointer p-5 py-8 flex items-center justify-between text-[var(--color-primary)] ">
                    <div className="flex gap-5 items-center">
                        <Heart className="h-full w-full fill-[var(--color-primary)]" size={30} />
                        <h1 className="font-bold text-3xl">Любимое</h1>
                    </div>
                    <ChevronRight />
                </div>

                <div className="flex flex-col gap-1 m-2">
                    {lastTracks.map((element) => (
                        <SongLine id={element.id} name={element.name} artists={element.artists} cover={element.cover} is_liked={element.is_liked} />
                    ))}
                </div>
            </div>

            <div className="flex flex-col text-[var(--color-text)] gap-5">
                <h1 className="font-bold text-xl ">Мои плейлисты</h1>
                <div className="bg-[var(--color-bg-black)] flex items-center justify-center gap-5 font-bold border border-[var(--color-primary)] cursor-pointer transition-transform transition-colors hover:scale-102 hover:bg-[var(--color-primary-darker)] rounded rounded-2xl p-5">
                    <CirclePlus />
                    <h2>Создать плейлист</h2>
                </div>

                <div className="scroll-hide flex gap-3 overflow-x-auto pb-3">
                    {myPlaylists.map((element) => (
                        <PlaylistFrame id={element.id} name={element.name} cover={element.cover} count={element.count} />
                    ))}
                </div>
            </div>

            <div className="flex gap-4">
                <div onClick={() => navigate(`/artists/favorite`)} className="text-xl w-1/2 p-5 rounded rounded-xl bg-[var(--color-bg)] border border-[var(--color-primary)] flex flex-col gap-2 items-center justify-center text-[var(--color-primary)] font-bold cursor-pointer transition-transform transition-colors hover:bg-[var(--color-primary-darker)] scale-98 hover:scale-100">
                    <User size={40}/>
                    <h2>Любимые исполнители</h2>
                </div>

                <MainPlaylistFrame id={1} name="Нелюбимые треки" icon_name="dislike" />
            </div>
        </div>
    )
}


export default LibraryPage;