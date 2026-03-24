import { useEffect, useState } from "react";
import { getPlaylist, likePlaylists } from "../api/playlists";
import type { Playlist } from "../interfaces/Playlist";
import SongLine from "../components/SongLine";
import { useParams } from "react-router-dom";
import StartButtons from "../components/StartButtons";

function PlaylistPage() {
    const { id } = useParams<{ id: string }>();
    const playlistId = Number(id);
    const [playlist, setPlaylist] = useState<Playlist | null>(null);

    useEffect(() => {
        const loadPlaylist = async () => {
            const data = await getPlaylist(playlistId);
            console.log(data);
            setPlaylist(data);
        }

        loadPlaylist();
    }, [playlistId])

    if (!playlist) {
        return (
            <div>
                <h1 className="text-[var(--color-text)]">Loading...</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="p-3 w-full rounded rounded-xl shadow-[0_0_20px_var(--color-primary)] flex gap-5">
                <div className="rounded-xl w-50 aspect-square bg-[var(--color-bg-image)] flex-shrink-0 overflow-hidden">
                    <img src={playlist.cover} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="flex flex-col gap-2 min-w-0">
                    <h1 className="text-4xl font-bold text-[var(--color-text)] truncate">{playlist.name}</h1>
                    <span className="text-xl text-[var(--color-text-dark)] truncate">{playlist.ownerName}</span>
                    <span className="my-3 text-xl text-[var(--color-text)] break-all">{playlist.description}</span>
                </div>
            </div>

            <div>
                <StartButtons id={playlist.id} isLiked={playlist.isLiked} songs={playlist.songs} like={likePlaylists}/>
            </div>

            <div className="flex flex-col gap-3">
                {playlist.songs?.map((song) => (
                    <SongLine key={song.id} id={song.id} name={song.name} cover={song.cover} artists={song.artists} isLiked={song.isLiked} />
                ))}
            </div>
        </div>
    )
}


export default PlaylistPage;
