import type { ArtistShort } from './Artist'
import { type SongShort } from './Song'

type SongInRelease = {
    song: SongShort,
    position: number,
    disk: number | null
}

export interface Release {
    id: number,
    name: string,
    cover: string,
    type: "single" | "ep" | "album",
    artists: ArtistShort[],
    songs: SongInRelease[],
    is_liked: boolean
}

export interface ReleaseShort {
    id: number,
    name: string,
    cover: string,
    type: "single" | "ep" | "album",
    artists: string[]
}
