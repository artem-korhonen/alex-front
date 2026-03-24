import { MoreVertical, Play } from "lucide-react";
import type { SongShort } from "../interfaces/Song";

function SongLine({ name, cover, artists }: SongShort) {
    const artistsString = artists.join(", ");

    return (
        <div className="h-16 w-full p-2 bg-[var(--color-bg)] flex justify-between items-center rounded rounded-xl border border-[var(--color-border)] transition-colors hover:border-[var(--color-primary)] cursor-pointer">
            <div className="min-w-0 flex items-center justify-between">
                <div className="min-w-12 group rounded-xl flex items-center justify-center aspect-square bg-[var(--color-bg-light)]">
                    <img src={cover} alt="" className="w-full h-full object-cover rounded-xl" />
                    <Play className="absolute opacity-0 transition-opacity group-hover:opacity-100 text-[var(--color-text-dark)] fill-[var(--color-text-dark)]" />
                </div>
                <div className="p-2 flex flex-col min-w-0">
                    <h3 className="text-xl text-[var(--color-text)] truncate">{name}</h3>
                    <span className="text-[var(--color-primary)] text-sm truncate">{artistsString}</span>
                </div>
            </div>
            <div className="cursor-pointer p-2 rounded-full transition-colors hover:bg-[var(--color-bg-light)] transition-colors" onClick={() => {}}>
                <MoreVertical className="text-[var(--color-text)]" />
            </div>
        </div>
    )
}


export default SongLine;