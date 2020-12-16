import { MediaLink } from './media-link';

export interface User {
    uid: string;
    email: string;
    createdISO: string;
    lastOpenedAppISO: string;
    isBanned: boolean;
    isDeleted: boolean;
    mediaLinks: MediaLink[];
    fcmToken?: string;
    role: 'standard' | 'admin';
}
