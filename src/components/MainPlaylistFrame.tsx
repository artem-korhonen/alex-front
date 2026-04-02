import { Heart, HeartOff, History } from "lucide-react";
import type { MainPlaylistProps } from "../interfaces/Playlist";
import { useNavigate } from "react-router-dom";

function MainPlaylistFrame({ id, name, icon_name }: MainPlaylistProps) {
    const navigate = useNavigate();

    const icons = {
        "like": Heart,
        "dislike": HeartOff,
        "history": History
    }
    const IconContainer = icons[icon_name];

    return (
        <div onClick={() => navigate(`/playlist/${id}`)} className="text-xl w-1/2 p-5 rounded rounded-xl bg-[var(--color-bg)] border border-[var(--color-primary)] flex flex-col gap-2 items-center justify-center text-[var(--color-primary)] font-bold cursor-pointer transition-transform transition-colors hover:bg-[var(--color-primary-darker)] scale-98 hover:scale-100">
            <IconContainer size={40}/>
            <h2>{name}</h2>
        </div>
    )
}


export default MainPlaylistFrame;