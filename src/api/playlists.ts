import api from "./api";
import type { Playlist, PlaylistShort } from "../interfaces/Playlist";
import { playlistFrames, playlists } from "./mockData";


export async function getPlaylist(id: number): Promise<Playlist> {
    const playlist = playlists.find(p => p.id === id);
    if (playlist) {
        return playlist;
    } else {
        throw new Error("oao");
    }
    try {
        const response = await api.get<Playlist>(`/api/playlists/${id}`);
        if (!response.data || !response.data.songs) throw new Error("Invalid data");
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function getAllPlaylists(): Promise<PlaylistShort[]> {
    return playlistFrames;
    try {
        const response = await api.get<PlaylistShort[]>(`/api/playlists`);
        if (!response.data) throw new Error("Invalid data");
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function getMyPlaylists(): Promise<PlaylistShort[]> {
    return playlistFrames;
    try {
        const response = await api.get<PlaylistShort[]>(`/api/me/playlists`);
        if (!response.data) throw new Error("Invalid data");
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function likePlaylists(id: number, like: boolean) {
    try {
        const response = await api.post(`/api/playlists/${id}/like`, {like});
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}