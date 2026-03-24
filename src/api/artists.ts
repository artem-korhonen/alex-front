import api from "./api";
import type { Artist, ArtistShort } from "../interfaces/Artist";
import { artists } from "./mockData";


export async function getArtist(id: number) {
    const artist = artists.find(a => a.id === id);
    if (artist) {
        return artist;
    } else {
        throw new Error("oao");
    }
    try {
        const response = await api.get<Artist>(`/api/artists/${id}`);
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }

        throw error;
    }
}


export async function getMyArtists() {
    const myArtists = artists.filter(a => a.isLiked == true);
    return myArtists;
    try {
        const response = await api.get<ArtistShort[]>('/api/me/artists');
        return response.data;
    } catch (error: any) {
        if (!error.response) {
            
        }

        throw error;
    }
}


export async function likeArtist(id: number, like: boolean) {
    try {
        const response = await api.post(`/api/artists/${id}/like`, {like});
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}
