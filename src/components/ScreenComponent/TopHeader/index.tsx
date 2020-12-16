import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    ImageSourcePropType,
} from 'react-native';
import { styles } from './styles';

interface Props {
    leftText: string;
    right: ImageSourcePropType;
}

const TopHeader = ( props : Props ) => {
    return (
        <View style={styles.topcontainer}>
            <Text style={styles.txt}>{props.leftText}</Text>
            <TouchableOpacity style={styles.rightCon} >
                <Image source={props.right} style={styles.image}/>
            </TouchableOpacity>
        </View>
    );
};
export default TopHeader;
