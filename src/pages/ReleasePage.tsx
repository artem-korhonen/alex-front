import { useEffect, useState } from "react";
import { getRelease, likeRelease } from "../api/releases";
import type { Release } from "../interfaces/Release";
import SongLine from "../components/SongLine";
import { useNavigate, useParams } from "react-router-dom";
import StartButtons from "../components/StartButtons";

function ReleasePage() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const releaseId = Number(id);
    const [release, setRelease] = useState<Release | null>(null);

    useEffect(() => {
        const loadRelease = async () => {
            const data = await getRelease(releaseId);
            console.log(data);
            setRelease(data);
        }

        loadRelease();
    }, [releaseId])

    if (!release) {
        return (
            <div>
                <h1 className="text-[var(--color-text)]">Loading...</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-5">
            <div className="items-center p-3 w-full rounded rounded-xl shadow-[0_0_20px_var(--color-primary)] flex gap-5 flex-col md:flex-row">
                <div className="rounded-xl w-50 aspect-square bg-[var(--color-bg-image)] flex-shrink-0 overflow-hidden">
                    <img src={release.cover} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="flex flex-col gap-2 min-w-0 items-center md:items-start">
                    <h1 className="text-4xl font-bold text-[var(--color-text)] truncate">{release.name}</h1>

                    <div className="flex gap-2">
                        {release.artists.map((artist, index) => (
                            <span
                                key={artist.id}
                                className="text-xl text-[var(--color-primary)] hover:underline cursor-pointer"
                                onClick={() => { navigate(`/artist/${artist.id}`) }}
                            >
                                {artist.name}{index < release.artists.length - 1 ? ", " : ""}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div>
                <StartButtons id={release.id} isLiked={release.isLiked} songs={release.songs?.map(s => s.song)} like={likeRelease} />
            </div>

            <div className="flex flex-col gap-3">
                {
                    [...(release.songs ?? [])].sort((a, b) => {
                        if (a.disk === null) return 1;
                        if (b.disk === null) return -1;

                        if (a.disk !== b.disk) {
                            return a.disk - b.disk;
                        }

                        return a.position - b.position;
                    }).map((songInRelease) => (
                        <SongLine key={songInRelease.song.id} id={songInRelease.song.id} name={songInRelease.song.name} cover={songInRelease.song.cover} artists={songInRelease.song.artists} isLiked={songInRelease.song.isLiked} />
                    ))
                }
            </div>
        </div>
    )
}


export default ReleasePage;
