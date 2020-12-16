import { ContentPart } from './content-part';
import { MediaLink } from './media-link';

export type ContentBlock = {
    uid: string,
    name: string,
    description: string,
    /**
     * Some content requires login, for hospital trails for example.
     */
    requiresLogin: boolean,
    /**
     * Photo or video, the main cover media for the list. Make sure it's 16:9.
     */
    coverMedia: MediaLink,
    /**
     * These can be video or photo. Make sure it's 16:9.
     */
    medias: MediaLink[],
    /**
     * Each content is made up of some parts.
     * If there is only 1 part, then go right to it.
     */
    parts: ContentPart[],
};
