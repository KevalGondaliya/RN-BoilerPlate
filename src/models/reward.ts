export type Reward = {
    uid: string,
    /**
     * The url of the track MP3.
     */
    trackUrl: string,
    rewardName: string,
    /**
     * When should the reward allowed to be played?
     */
    startTimeMS?: number,
    /**
     * When should the reward allowed to be played?
     */
    endTimeISOMS?: number,
};
