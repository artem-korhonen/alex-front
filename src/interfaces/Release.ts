import type { ArtistShort } from './Artist'
import { type SongShort2 } from './Song'

type SongInRelease = {
    song: SongShort2,
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
