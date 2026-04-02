import type { ReleaseShort } from "./Release";
import type { SongShort } from "./Song";

export interface Artist {
    id: number,
    name: string,
    bio: string,
    covers: string[],
    releases: ReleaseShort[],
    songs: SongShort[],
    listeners: number,
    is_liked: boolean
}

export interface ArtistShort {
    id: number,
    name: string,
    cover: string
}

