// src/viewModels/useUserViewModel.js
import { useState, useEffect } from 'react';
import VideoThumbnail1 from '@/assets/images/VideoThumbnail1.png'
import VideoThumbnail2 from '@/assets/images/VideoThumbnail2.png'
import VideoThumbnail3 from '@/assets/images/VideoThumbnail3.png'
import moment from 'moment';
import { StaticImageData } from 'next/image';

// Interfaces
interface MediaDocument {
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

interface PayloadResponse {
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

interface VideoItem {
  videoThumbnail: string | StaticImageData;
  title: string;
  date: string;
}

const dummyData: VideoItem[] = [
    {
        videoThumbnail: VideoThumbnail1,
        title: "My Transformative Journey through Trusting in God",
        date: "May 1, 2025"
    },
    {
        videoThumbnail: VideoThumbnail2,
        title: "A Muslim's Guide to the New World Order",
        date: "April 27, 2025"
    },
    {
        videoThumbnail: VideoThumbnail3,
        title: "My Crypto Investing Strategy REVEALED!!",
        date: "May 01, 2025"
    }
]

export const useYoutubeSectionController = () => {
    const [media, setMedia] = useState<VideoItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const manipulateAndSetData = (docs: MediaDocument[]) => {
        const manipulated = docs.map(item => ({
            videoThumbnail: item.thumbnailURL || item.url,
            title: item.title || 'Untitled',
            date: moment(item.date || item.createdAt).format('MMMM D, YYYY')
        }));
        setMedia(manipulated);
    };

    const fetchMedia = async () => {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch('/api/media');
            
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data: PayloadResponse = await response.json();
            manipulateAndSetData(data?.docs || []);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch media');
            console.error('Error fetching media:', err);
        } finally {
            setLoading(false);
        }
    };

    // Return data directly since it's already manipulated
    const data: VideoItem[] = media?.length > 0 ? media : [];

    useEffect(() => {
        fetchMedia();
    }, []);

    return {
        loading,
        error,
        data
    };
};