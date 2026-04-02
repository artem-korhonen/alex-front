import { Heart, Play, Shuffle } from "lucide-react";
import type { SongShort } from "../interfaces/Song";
import { getSong } from "../api/songs";

type StartButtonsProps = {
    id: number,
    is_liked: boolean,
    songs: SongShort[],
    like: (id: number, like: boolean) => {}
}

function StartButtons({ id, is_liked, songs, like }: StartButtonsProps) {
    return (
        <div className="flex flex-col md:flex-row gap-5 text-[var(--color-text)] w-full">
            <div className="bg-[var(--color-bg-black)] flex flex-1 items-center justify-center gap-5 font-bold border border-[var(--color-primary)] cursor-pointer transition-transform transition-colors hover:scale-102 hover:bg-[var(--color-primary-darker)] rounded rounded-2xl p-5" onClick={() => {like(id, !is_liked)}}>
                <Heart className={`${is_liked ? "fill-[var(--color-text)]" : ""}`} />
                <h2>Нравится</h2>
            </div>
            <div className="bg-[var(--color-bg-black)] flex flex-1 items-center justify-center gap-5 font-bold border border-[var(--color-primary)] cursor-pointer transition-transform transition-colors hover:scale-102 hover:bg-[var(--color-primary-darker)] rounded rounded-2xl p-5" onClick={() => {getSong(songs[0].id)}}>
                <Play />
                <h2>Слушать</h2>
            </div>
            <div className="bg-[var(--color-bg-black)] flex flex-1 items-center justify-center gap-5 font-bold border border-[var(--color-primary)] cursor-pointer transition-transform transition-colors hover:scale-102 hover:bg-[var(--color-primary-darker)] rounded rounded-2xl p-5" onClick={() => {
                const randomId = songs[Math.floor(Math.random() * songs.length)].id;
                getSong(randomId);
            }}>
                <Shuffle />
                <h2>Перемешать</h2>
            </div>
        </div>
    )
}


export default StartButtons;