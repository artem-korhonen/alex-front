import { type SongShort } from './Song'

export interface Playlist {
    id: number,
    name: string,
    cover: string,
    description: string,
    ownerName: string,
    songs: SongShort[],
    isLiked: boolean
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
    iconName: "like" | "dislike" | "history"
}


export interface PlaylistInfoProps {
    name: string
    cover: string
    description: string
    ownerName: string
}
