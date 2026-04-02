import { type SongShort } from './Song'


export interface Playlist {
    id: number,
    name: string,
    cover: string,
    description: string,
    owner_name: string,
    songs: SongShort[],
    is_liked: boolean
}


export interface PlaylistShort {
    id: number,
    name: string,
    cover: string,
    count: number
}


export interface MainPlaylistProps {
    id: number,
    name: string,
    icon_name: "like" | "dislike" | "history"
}


export interface PlaylistInfoProps {
    name: string
    cover: string
    description: string
    owner_name: string
}

