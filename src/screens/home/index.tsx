import React, { FC } from 'react';
import {
    View,
    Text,
    Image,
    StatusBar,
    ScrollView,
    TouchableOpacity,
    ImageBackground
} from 'react-native';

import { MusicPlayer, TopHeader, FlatView, Footer } from '@components/ScreenComponent';
import { styles } from './styles';
import { useTheme } from '@components/ThemeContext/ThemeContext';
import { Assets } from '@constant/images';

const mkData = [
    {
        id: '1',
        title: 'Release the tension',
        thumbnail: Assets.test1,
        duration: 14
    },
    {
        id: '2',
        title: 'Focus on what matters',
        thumbnail: Assets.test2,
        duration: 8
    },
    {
        id: '3',
        title: 'Release the tension',
        thumbnail: Assets.test1,
        duration: 12
    },
    {
        id: '4',
        title: 'Focus on what matters',
        thumbnail: Assets.test2,
        duration: 18
    },
    {
        id: '5',
        title: 'Release the tension',
        thumbnail: Assets.test1,
        duration: 5
    }

];

const Home: FC = () => {
    const { theme } = useTheme();
    return (
        <View style={styles.container}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle="light-content"/>
            <ImageBackground source={Assets.background} style={styles.background} resizeMode="stretch">
                <TopHeader leftText="Good Night" right={Assets.settig}/>
                <MusicPlayer />
                <ScrollView style={[styles.content, {backgroundColor: theme.colors.background}]} showsVerticalScrollIndicator={false}>
                    <Text style={styles.todaytext}>Today Inspiration</Text>
                    <Text style={[styles.description, {color: theme.colors.primary}]}>"losing at the start is not necessarily losing at the finish!"</Text>
                    <View style={styles.section} key="quick">
                        <View style={styles.sectionHeader}>
                            <Text style={[styles.txt, {color:theme.colors.primary}]}>Quick Meditation</Text>
                            <TouchableOpacity style={{paddingHorizontal:20}} >
                                <Image source={Assets.rightArrow} style={{}}/>
                            </TouchableOpacity>
                        </View>
                        <FlatView data={mkData}/>
                    </View>
                    <View style={{height:10}}/>
                    <View style={styles.section} key="new">
                        <View style={styles.sectionHeader}>
                            <Text style={[styles.txt, {color:theme.colors.primary}]}>New Release</Text>
                            <TouchableOpacity style={{paddingHorizontal:20}} >
                                <Image source={Assets.rightArrow} style={{}}/>
                            </TouchableOpacity>
                        </View>
                        <FlatView data={mkData}/>
                    </View>
                    <View style={styles.space}/>
                </ScrollView>
                <View style={[styles.footer, {backgroundColor:theme.colors.background}]}>
                    <Footer/>
                </View>
            </ImageBackground>
        </View>
    );
};

export default Home;
