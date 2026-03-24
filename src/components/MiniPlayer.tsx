import { Play } from "lucide-react";
import type { SongLineProps } from "../interfaces/Song";

function MiniPlayer({ name, cover, artists, className }: SongLineProps) {
    const artistsString = artists.join(", ")
    return (
        <div className={`${className} mx-8 h-20 px-4 bg-[var(--color-bg)] flex justify-between items-center rounded rounded-xl border border-[var(--color-primary)] shadow-[0_0_10px_var(--color-primary)] scale-100 cursor-pointer`}>
            <div className="min-w-0 flex items-center justify-between">
                <div className="group min-h-12 rounded-xl flex items-center justify-center aspect-square bg-[var(--color-bg-light)]">
                    <img src={cover} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="p-2 flex flex-col min-w-0">
                    <h3 className="text-xl text-[var(--color-text)] truncate">{name}</h3>
                    <span className="text-[var(--color-primary)] text-sm truncate">{artistsString}</span>
                </div>
            </div>
            <div className="cursor-pointer p-3 rounded-full bg-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary-dark)] transition-colors group">
                <Play className="text-[var(--color-text)] transition-colors group-hover:fill-[var(--color-text)]" />
            </div>
        </div>
    )
}


export default MiniPlayer;