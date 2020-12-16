import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    Image,
    TouchableOpacity
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import { Assets } from '@constant/images';
import { styles } from './styles';

const livePlayURL = 'https://s4.radio.co/s8118d127d/low';

TrackPlayer.setupPlayer().then(() => {
    TrackPlayer.add({
        id: 'trackId',
        url: livePlayURL,
        title: 'Title',
        artist: 'Artist'
    });
});

const MusicPlayer = () => {
    const [vol, setVolume] = useState(5);
    const [bPlay, setPlay] = useState(false);
    const [duration, setDuration] = useState(100);
    const [isSeeking, setIsSeeking] = useState(false);
    const [position, setPosition] = useState(0);

    useEffect(() => {
        const Init = () => {
            TrackPlayer.updateOptions({
                capabilities: [
                  TrackPlayer.CAPABILITY_PLAY,
                  TrackPlayer.CAPABILITY_PAUSE,
                ],
                compactCapabilities:[
                    TrackPlayer.CAPABILITY_PLAY,
                    TrackPlayer.CAPABILITY_PAUSE
                ],
            });
            const currentTrack = TrackPlayer.getCurrentTrack();
            if (currentTrack == null) {
              TrackPlayer.reset();
              TrackPlayer.setVolume(vol / 10);
            }
        };
        Init();
        return () => {
            setPlay(false);
            TrackPlayer.reset();
        };
    }, []);

    const togglePlayback = () => {
        if ( !bPlay ) {
            TrackPlayer.play();
            setPlay(true);
        }else{
            TrackPlayer.pause();
            setPlay(false);
        }
    };

    return (
        <>
            <View style={styles.cassett} >
                <View style={styles.resumeCon}>
                    <TouchableOpacity  key="middle" onPress={() => togglePlayback()}>
                        <Image source={bPlay ? Assets.pause : Assets.play} style={styles.playIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.resume}>RESUME</Text>
                </View>
                <Text style={styles.title}>Calm The Heart With a Serene Natural Atomosphere</Text>
                <Slider
                    minimumValue          = {0}
                    maximumValue          = {duration}
                    thumbTintColor        = "transparent"
                    minimumTrackTintColor = "#FFF"
                    maximumTrackTintColor = "#FFF"
                    step                  = {1}
                    disabled              = {false}
                    onValueChange ={ val => {
                        TrackPlayer.pause();
                        setIsSeeking(true);
                    }}
                    onSlidingComplete={ val => {
                        TrackPlayer.play();
                        setPosition(val);
                        TrackPlayer.seekTo(val);
                    }}
                    value={position}
                    style={styles.slidebar}
                />
            </View>
        </>
    );
};

export default MusicPlayer;
