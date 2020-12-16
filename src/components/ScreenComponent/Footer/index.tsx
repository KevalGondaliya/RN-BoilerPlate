import React from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image
} from 'react-native';
import { styles } from './styles';
import { Assets } from '@constant/images';

const TopHeader = () => {
    const [curindex, setCurIndex] = React.useState(0);
    return (
        <View style={styles.topcontainer}>
            <TouchableOpacity style={curindex === 0 ? styles.actCon : styles.inactCon} onPress={() => setCurIndex(0)} key="left">
                <Image source={Assets.discover} style={styles.image}/>
                <Text style={styles.txt}>Discovery</Text>
            </TouchableOpacity>

            <TouchableOpacity style={curindex === 1 ? styles.actCon : styles.inactCon} onPress={() => setCurIndex(1)} key="right">
                <Image source={Assets.check} style={styles.image}/>
                <Text style={styles.txt}>My Sessions</Text>
            </TouchableOpacity>
        </View>
    );
};
export default TopHeader;
