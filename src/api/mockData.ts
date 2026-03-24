import type { Artist, ArtistShort } from "../interfaces/Artist";
import type { Playlist, PlaylistShort } from "../interfaces/Playlist";
import type { Release, ReleaseShort } from "../interfaces/Release";
import type { Song, SongShort } from "../interfaces/Song";

const at: Record<string, ArtistShort> = {
    nova: { id: 1, name: "Nova", cover: "/" },
    pulse: { id: 2, name: "Pulse", cover: "/" },
    aurora: { id: 3, name: "Aurora", cover: "/" },
    vesper: { id: 4, name: "Vesper", cover: "/" },
    lumina: { id: 5, name: "Lumina", cover: "/" },
    cortex: { id: 6, name: "Cortex", cover: "/" },
    solaris: { id: 7, name: "Solaris", cover: "/" }
};

/* SONGS */

export const songs: Song[] = [
    { id: 1, name: "Neon Night", cover: "/", path: "/", artists_ids: [1], artists: ["Nova"], listenings: "12431", isLiked: 1 },
    { id: 2, name: "City Lights", cover: "/", path: "/", artists_ids: [1, 2], artists: ["Nova", "Pulse"], listenings: "9820", isLiked: -1 },
    { id: 3, name: "Afterglow", cover: "/", path: "/", artists_ids: [2], artists: ["Pulse"], listenings: "6551", isLiked: 0 },
    { id: 4, name: "Morning Drive", cover: "/", path: "/", artists_ids: [3], artists: ["Aurora"], listenings: "3112", isLiked: -1 },
    { id: 5, name: "Ocean Echo", cover: "/", path: "/", artists_ids: [3], artists: ["Aurora"], listenings: "7904", isLiked: 1 },
    { id: 6, name: "The Deep", cover: "/", path: "/", artists_ids: [4], artists: ["Vesper"], listenings: "15200", isLiked: 1 },
    { id: 7, name: "Glass Heart", cover: "/", path: "/", artists_ids: [5], artists: ["Lumina"], listenings: "4200", isLiked: 0 },
    { id: 8, name: "Floating", cover: "/", path: "/", artists_ids: [5], artists: ["Lumina"], listenings: "890", isLiked: 0 },
    { id: 9, name: "Circuit Breach", cover: "/", path: "/", artists_ids: [6, 1], artists: ["Cortex", "Nova"], listenings: "21040", isLiked: 1 },
    { id: 10, name: "Neon Pulse", cover: "/", path: "/", artists_ids: [6], artists: ["Cortex"], listenings: "11230", isLiked: 0 },
    { id: 11, name: "Warm Rain", cover: "/", path: "/", artists_ids: [7], artists: ["Solaris"], listenings: "54300", isLiked: 1 },
    { id: 12, name: "Lo-fi Morning", cover: "/", path: "/", artists_ids: [7], artists: ["Solaris"], listenings: "32100", isLiked: 0 },

    { id: 13, name: "Midnight Signal", cover: "/", path: "/", artists_ids: [1], artists: ["Nova"], listenings: "8800", isLiked: 0 },
    { id: 14, name: "Retro Drive", cover: "/", path: "/", artists_ids: [2], artists: ["Pulse"], listenings: "7200", isLiked: 1 },
    { id: 15, name: "Northern Lights", cover: "/", path: "/", artists_ids: [3], artists: ["Aurora"], listenings: "4100", isLiked: 0 },
    { id: 16, name: "Shadow System", cover: "/", path: "/", artists_ids: [4], artists: ["Vesper"], listenings: "6100", isLiked: 0 },
    { id: 17, name: "Dream Fragments", cover: "/", path: "/", artists_ids: [5], artists: ["Lumina"], listenings: "3300", isLiked: 0 },
    { id: 18, name: "Neural Storm", cover: "/", path: "/", artists_ids: [6], artists: ["Cortex"], listenings: "14200", isLiked: 1 },
    { id: 19, name: "Lazy Sunset", cover: "/", path: "/", artists_ids: [7], artists: ["Solaris"], listenings: "28000", isLiked: 1 }
];

/* SONG LINES */

export const songLines: SongShort[] = songs.map(s => ({
    id: s.id,
    name: s.name,
    cover: s.cover,
    artists: s.artists,
    isLiked: s.isLiked === 1
}));

/* RELEASES */

export const releases: Release[] = [
    {
        id: 1, name: "Neon Night", cover: "/", releaseType: "single", artists: [at.nova], songs: [
            { song: songLines[0], position: 1, disk: null }
        ], isLiked: false
    },
    {
        id: 2, name: "Urban Echo", cover: "/", releaseType: "ep", artists: [at.nova, at.pulse], songs: [
            { song: songLines[1], position: 1, disk: null },
            { song: songLines[2], position: 2, disk: null }
        ], isLiked: true
    },
    {
        id: 3, name: "Skyline Dreams", cover: "/", releaseType: "album", artists: [at.aurora], songs: [
            { song: songLines[3], position: 1, disk: null },
            { song: songLines[4], position: 2, disk: null }
        ], isLiked: false
    },
    {
        id: 4, name: "Void", cover: "/", releaseType: "single", artists: [at.vesper], songs: [
            { song: songLines[5], position: 1, disk: null }
        ], isLiked: true
    },
    {
        id: 5, name: "Crystal Skies", cover: "/", releaseType: "album", artists: [at.lumina], songs: [
            { song: songLines[6], position: 1, disk: null },
            { song: songLines[7], position: 2, disk: null }
        ], isLiked: false
    },
    {
        id: 6, name: "Digital Frontier", cover: "/", releaseType: "ep", artists: [at.cortex, at.nova], songs: [
            { song: songLines[8], position: 1, disk: null },
            { song: songLines[9], position: 2, disk: null }
        ], isLiked: true
    },
    {
        id: 7, name: "Sunsets & Coffee", cover: "/", releaseType: "album", artists: [at.solaris], songs: [
            { song: songLines[10], position: 1, disk: null },
            { song: songLines[11], position: 2, disk: null }
        ], isLiked: true
    },
    {
        id: 8, name: "Midnight Signal", cover: "/", releaseType: "single", artists: [at.nova], songs: [
            { song: songLines[12], position: 1, disk: null }
        ], isLiked: false
    },
    {
        id: 9, name: "Retro Wave", cover: "/", releaseType: "ep", artists: [at.pulse], songs: [
            { song: songLines[2], position: 1, disk: null },
            { song: songLines[13], position: 2, disk: null }
        ], isLiked: false
    },
    {
        id: 10, name: "Aurora Skies", cover: "/", releaseType: "single", artists: [at.aurora], songs: [
            { song: songLines[14], position: 1, disk: null }
        ], isLiked: true
    },
    {
        id: 11, name: "Industrial Dreams", cover: "/", releaseType: "album", artists: [at.vesper], songs: [
            { song: songLines[5], position: 1, disk: null },
            { song: songLines[15], position: 2, disk: null }
        ], isLiked: false
    },
    {
        id: 12, name: "Soft Horizons", cover: "/", releaseType: "ep", artists: [at.lumina], songs: [
            { song: songLines[6], position: 1, disk: null },
            { song: songLines[16], position: 2, disk: null }
        ], isLiked: true
    },
    {
        id: 13, name: "Cyber Systems", cover: "/", releaseType: "single", artists: [at.cortex], songs: [
            { song: songLines[17], position: 1, disk: null }
        ], isLiked: false
    },
    {
        id: 14, name: "Coffee Break Beats", cover: "/", releaseType: "ep", artists: [at.solaris], songs: [
            { song: songLines[10], position: 1, disk: null },
            { song: songLines[18], position: 2, disk: null }
        ], isLiked: true
    }
];

/* RELEASE FRAMES */

export const releaseFrames: ReleaseShort[] = releases.map(r => ({
    id: r.id,
    name: r.name,
    cover: r.cover,
    releaseType: r.releaseType,
    artists: r.artists.map(a => a.name)
}));

/* ARTISTS */

export const artists: Artist[] = [
    {
        id: 1,
        name: "Nova",
        bio: "Electronic producer creating atmospheric night-drive music.",
        covers: ["/", "/"],
        releases: [releaseFrames[0], releaseFrames[1], releaseFrames[5], releaseFrames[7]],
        songs: [songLines[0], songLines[1], songLines[8], songLines[12]],
        listeners: 12345678,
        isLiked: true
    },
    {
        id: 2,
        name: "Pulse",
        bio: "Synthwave artist inspired by retro-futuristic sound.",
        covers: ["/"],
        releases: [releaseFrames[1], releaseFrames[8]],
        songs: [songLines[1], songLines[2], songLines[13]],
        listeners: 12345678,
        isLiked: false
    },
    {
        id: 3,
        name: "Aurora",
        bio: "Ambient pop musician mixing vocals with cinematic sound.",
        covers: ["/", "/"],
        releases: [releaseFrames[2], releaseFrames[9]],
        songs: [songLines[3], songLines[4], songLines[14]],
        listeners: 12345678,
        isLiked: false
    },
    {
        id: 4,
        name: "Vesper",
        bio: "Dark techno explorer focusing on deep bass and industrial textures.",
        covers: ["/"],
        releases: [releaseFrames[3], releaseFrames[10]],
        songs: [songLines[5], songLines[15]],
        listeners: 12345678,
        isLiked: true
    },
    {
        id: 5,
        name: "Lumina",
        bio: "Indie-dream pop project with ethereal vocals and soft guitars.",
        covers: ["/"],
        releases: [releaseFrames[4], releaseFrames[11]],
        songs: [songLines[6], songLines[7], songLines[16]],
        listeners: 12345678,
        isLiked: false
    },
    {
        id: 6,
        name: "Cortex",
        bio: "Cyberpunk-inspired producer blending industrial metal with glitch-hop.",
        covers: ["/", "/"],
        releases: [releaseFrames[5], releaseFrames[12]],
        songs: [songLines[8], songLines[9], songLines[17]],
        listeners: 12345678,
        isLiked: true
    },
    {
        id: 7,
        name: "Solaris",
        bio: "Lo-fi beats and chill-hop enthusiast for productive afternoons.",
        covers: ["/"],
        releases: [releaseFrames[6], releaseFrames[13]],
        songs: [songLines[10], songLines[11], songLines[18]],
        listeners: 12345678,
        isLiked: true
    }
];

/* PLAYLISTS */

export const playlists: Playlist[] = [
    {
        id: 1,
        name: "Night Ride",
        cover: "/",
        description: "Perfect tracks for a late night drive through the city.",
        ownerName: "Alex",
        songs: [songLines[0], songLines[1], songLines[2], songLines[8]],
        isLiked: true
    },
    {
        id: 2,
        name: "Chill Morning",
        cover: "/",
        description: "Soft and atmospheric music for calm mornings.",
        ownerName: "Kate",
        songs: [songLines[3], songLines[4], songLines[11]],
        isLiked: false
    },
    {
        id: 3,
        name: "Cyberpunk Vibes",
        cover: "/",
        description: "High tech, low life. Heavy bass and glitchy sounds.",
        ownerName: "Dmitry",
        songs: [songLines[8], songLines[9], songLines[5]],
        isLiked: true
    },
    {
        id: 4,
        name: "Lo-Fi Study",
        cover: "/",
        description: "Relaxing beats to keep you focused.",
        ownerName: "Alice",
        songs: [songLines[10], songLines[11], songLines[6]],
        isLiked: true
    }
];

/* PLAYLIST FRAMES */

export const playlistFrames: PlaylistShort[] = playlists.map(p => ({
    id: p.id,
    name: p.name,
    cover: p.cover,
    count: p.songs.length
}));
