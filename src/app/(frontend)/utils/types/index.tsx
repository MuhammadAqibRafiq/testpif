import { StaticImageData } from 'next/image';


export interface VideoItem {
    videoThumbnail?: string | StaticImageData;
    title?: string;
    date?: string;
}
// Interfaces
export interface MediaDocument {
    createdAt: string;
    updatedAt: string;
    title: string;
    date: string;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
    id: string;
    url: string;
    thumbnailURL: string | null;
}

export interface PayloadResponse {
    docs: MediaDocument[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}
