import api from "./api";
import type { Song, SongShort } from "../interfaces/Song";
import { songLines, songs } from "./mockData";


export async function getSong(id: number): Promise<Song> {
    const song = songs.find(s => s.id === id);
    if (song) {
        return song;
    } else {
        throw new Error("oao");
    }
    try {
        const response = await api.get<Song>(`/api/songs/${id}`);
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function getAllSongs(): Promise<SongShort[]> {
    return songLines;
    try {
        const response = await api.get<SongShort[]>(`/api/songs`);
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function likeSong(id: number, like: 1 | 0 | -1) {
    try {
        const response = await api.post(`/api/songs/${id}/like`, {
            like: like
        });
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function getRecommendation(songs: SongShort[] | null) {
    try {
        let info = "";

        if (songs != null) {
            info = songs.map(song => song.id).join(",");
        }

        const response = await api.get<SongShort[]>(`/api/songs/?songs_ids=${info}`);
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}
