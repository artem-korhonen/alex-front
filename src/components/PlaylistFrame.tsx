import { useNavigate } from "react-router-dom";
import { type PlaylistShort } from "../interfaces/Playlist";


function PlaylistFrame({ id, name, cover, count }: PlaylistShort) {
    const navigate = useNavigate();
    
    return (
        <div className="flex-shrink-0 p-3 w-50 h-auto border border-[var(--color-border)] cursor-pointer rounded-xl bg-[var(--color-bg)] scale-98 transition-transform transition-colors hover:scale-100 hover:border-[var(--color-primary)]" onClick={() => navigate(`/playlist/${id}`)}>
            <div className="rounded-xl aspect-square bg-[var(--color-bg-image)]">
                <img src={cover} alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-2 flex flex-col gap-1">
                <h3 className="text-xl text-[var(--color-text)] truncate">{name}</h3>
                <span className="text-[var(--color-primary)] text-sm truncate">{count} треков</span>
                <span className="text-[var(--color-text-dark)] text-sm truncate">Плейлист</span>
            </div>
        </div>
    )
}


export default PlaylistFrame;