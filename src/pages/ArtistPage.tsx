import { useEffect, useState } from "react";
import { getArtist, likeArtist } from "../api/artists";
import type { Artist } from "../interfaces/Artist";
import { useParams } from "react-router-dom";
import SongLine from "../components/SongLine";
import ReleaseFrame from "../components/ReleaseFrame";
import StartButtons from "../components/StartButtons";

function ArtistPage() {
    const { id } = useParams<{ id: string }>();
    const artistId = Number(id);
    const [artist, setArtist] = useState<Artist>();

    useEffect(() => {
        const loadArtist = async () => {
            const newArtist = await getArtist(artistId);
            setArtist(newArtist);
        }

        loadArtist();
    }, [])

    if (!artist) {
        return (
            <div>
                <h1 className="text-[var(--color-text)]">Loading...</h1>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="p-4 items-center rounded rounded-xl shadow-[0_0_20px_var(--color-primary)] flex gap-5 flex-col md:flex-row">
                <div className="rounded-full w-50 aspect-square bg-[var(--color-bg-image)] flex-shrink-0 overflow-hidden">
                    <img src={artist.covers[0]} alt="" className="w-full h-full object-cover rounded-xl" />
                </div>
                <div className="flex flex-col gap-2 min-w-0 justify-center items-center md:items-start">
                    <h1 className="text-4xl font-bold text-[var(--color-text)] truncate">{artist.name}</h1>
                    <span className="text-[var(--color-text)] text-lg">{artist.listeners} слушателей</span>
                </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 text-[var(--color-text)] w-full">
                <StartButtons id={artist.id} is_liked={artist.is_liked} songs={artist.songs} like={likeArtist}/>
            </div>

            <div className="my-4 flex flex-col gap-2">
                <div className="flex flex-col gap-3 overflow-x-auto pb-3">
                    <h1 className="text-xl text-[var(--color-text)] font-bold">Популярные треки</h1>
                    {artist.songs?.map((song) => (
                        <SongLine key={song.id} id={song.id} name={song.name} cover={song.cover} artists={song.artists} is_liked={song.is_liked} />
                    ))}
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-xl text-[var(--color-text)] font-bold">Синглы / EP</h1>
                    <div className="flex gap-2 overflow-x-auto pb-3">
                        {artist.releases?.map((release) => {
                            if (release.type !== "album") {
                                return (
                                    <ReleaseFrame id={release.id} name={release.name} cover={release.cover} type={release.type} artists={release.artists} />
                                )
                            }
                        })}
                    </div>
                </div>

                <div className="flex flex-col gap-3">
                    <h1 className="text-xl text-[var(--color-text)] font-bold">Альбомы</h1>
                    <div className="flex gap-2 overflow-x-auto pb-3">
                        {artist.releases?.map((release) => {
                            if (release.type == "album") {
                                return (
                                    <ReleaseFrame id={release.id} name={release.name} cover={release.cover} type={release.type} artists={release.artists} />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ArtistPage;