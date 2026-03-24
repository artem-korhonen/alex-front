import api from "./api";
import type { Release, ReleaseShort } from "../interfaces/Release";
import { releaseFrames, releases } from "./mockData";


export async function getRelease(id: number): Promise<Release> {
    const release = releases.find(r => r.id === id);
    if (release) {
        return release;
    } else {
        throw new Error("oao");
    }

    try {
        const response = await api.get<Release>(`/api/releases/${id}`);
        if (!response.data || !response.data.songs) throw new Error("Invalid data");
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}


export async function getAllReleases(): Promise<ReleaseShort[]> {
    return releaseFrames;
    try {
        const response = await api.get<ReleaseShort[]>(`/api/releases`);
        if (!response.data || !response.data) throw new Error("Invalid data");
        return response.data;
    } catch (error: any) {
        if (!error.response) {
            return releaseFrames;
        }
        throw error;
    }
}


export async function getMyReleases(): Promise<ReleaseShort[]> {
    return releaseFrames;
    try {
        const response = await api.get<ReleaseShort[]>(`/api/me/releases`);
        if (!response.data) throw new Error("Invalid data");
        return response.data;
    } catch (error: any) {
        if (!error.response) {
            
        }
        throw error;
    }
}

export async function likeRelease(id: number, like: boolean) {
    try {
        const response = await api.post(`/api/releases/${id}/like`, {like});
        return response.data;
    } catch (error: any) {
        if (!error.response) {

        }
        throw error;
    }
}