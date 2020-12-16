import { StyleSheet } from 'react-native';
import { Avenir, mgTop } from '@constant/Unit';

export const styles = StyleSheet.create({
    topcontainer:{
        width:'100%',
        height: 60,
        marginTop: mgTop,
        paddingHorizontal: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0, .2)'
    },
    txt:{
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: '800',
        fontFamily: Avenir
    },
    image:{

    },
    rightCon:{

    }
});
