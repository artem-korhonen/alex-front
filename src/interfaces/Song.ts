export interface Song {
    id: number,
    name: string,
    cover: string,
    path: string,
    artists_ids: number[],
    artists: string[],
    listenings: string
    is_liked: 1 | 0 | -1
}

export interface SongShort {
    id: number,
    name: string,
    cover: string,
    artists: string[],
    className?: string,
    is_liked: boolean
}
