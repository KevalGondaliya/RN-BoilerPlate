import { MediaLink } from './media-link';
import { Reward } from './reward';

export type ContentPart = {
    name: string,
    description?: string,
    /**
     * Custom: The user can select their own rewards and background sound.
     * Standard: Normal content that just play's a custom music file.
     */
    type: 'custom' | 'standard',
    /**
     * The track url for background music.
     * This can be option incase they are only playing media from the 'media' as video or photo etc.
     * Can also be undefined if the mode is 'custom'
     */
    trackUrl?: string,
    /**
     * If they have custom mode set on, they can choose from custom sound tracks.
     */
    customTrackUrls?: string[],
    /**
     * What is displayed photo or video during the 'active' session.
     * Can be blank if there is nothing.
     */
    media?: MediaLink,
    /**
     * The list of rewards that can be played, rewards have their own time settings.
     * If this is custom mode they will choose their rewards that will be allowed
     */
    rewards?: Reward[],
};
