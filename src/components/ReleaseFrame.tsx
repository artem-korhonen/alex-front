import { useNavigate } from "react-router-dom";
import type { ReleaseShort } from "../interfaces/Release";


function PlaylistFrame({ id, name, cover, releaseType, artists }: ReleaseShort) {
    const navigate = useNavigate();
    const artistsString = artists.join(", ")
    const releaseTypes = {
        "single": "Сингл",
        "ep": "EP",
        "album": "Альбом"
    };
    const releaseTypeString = releaseTypes[releaseType];
    
    return (
        <div className="flex-shrink-0 p-3 w-50 h-auto border border-[var(--color-border)] cursor-pointer rounded-xl bg-[var(--color-bg)] transition-transform transition-colors scale-98 hover:scale-100 hover:border-[var(--color-primary)]" onClick={() => navigate(`/release/${id}`)}>
            <div className="rounded-xl aspect-square bg-[var(--color-bg-image)]">
                <img src={cover} alt="" className="w-full h-full object-cover rounded-xl" />
            </div>
            <div className="p-2 flex flex-col gap-1">
                <h3 className="text-xl text-[var(--color-text)] truncate">{name}</h3>
                <span className="text-[var(--color-primary)] text-sm truncate">{artistsString}</span>
                <span className="text-[var(--color-text-dark)] text-sm">{releaseTypeString}</span>
            </div>
        </div>
    )
}


export default PlaylistFrame;