import { useState, useEffect } from 'react';
import moment from 'moment';
import { MediaDocument, PayloadResponse, VideoItem } from '@/app/(frontend)/utils/types';
import { youtubeSectionDummyData } from '@/app/(frontend)/utils/DummyData/youtubeSectionDummyData';

export const useYoutubeSectionController = () => {
    const [media, setMedia] = useState<VideoItem[]>([]);
    // const [loading, setLoading] = useState(true);
    const [loading, setLoading] = useState(false);
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
        // fetchMedia();
    }, []);

    return {
        loading,
        error,
        data: youtubeSectionDummyData //when payload not in use
    };
};
