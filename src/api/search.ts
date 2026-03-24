import type { ArtistShort } from "../interfaces/Artist";
import type { PlaylistShort } from "../interfaces/Playlist";
import type { ReleaseShort } from "../interfaces/Release";
import type { SongShort } from "../interfaces/Song";
import api from "./api";

type searchResult = {
    artists: ArtistShort[],
    releases: ReleaseShort[],
    songs: SongShort[],
    playlists: PlaylistShort[]
}


export async function search(text: string) {
    try {
        const response = await api.get<searchResult>(`/api/search/${text}`);
        return response;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}