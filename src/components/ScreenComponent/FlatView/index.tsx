import React from 'react';
import {
  View,
  Text,
  FlatList,
  ImageBackground,
  ImageSourcePropType
} from 'react-native';
import { styles } from './styles';

interface Music {
    id: string;
    title: string;
    thumbnail: ImageSourcePropType;
    duration: number;
}

interface Props {
    data:Music[];
}

const FlatView = (props: Props) => {
    return (
        <View style={{paddingRight: 25}}>
            <FlatList
                data={props.data}
                keyExtractor={(item) => item.id}
                horizontal = {true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => {
                    return (
                        <ImageBackground source={item.thumbnail} style={styles.container} imageStyle={styles.imgStyle}>
                            <View style={styles.mask}>
                                <Text style={styles.txt}>{item.title}</Text>
                                <Text style={styles.duration}>{item.duration} minutes</Text>
                            </View>
                        </ImageBackground>
                    );
                }}
            />
        </View>
    );
};

export default FlatView;
