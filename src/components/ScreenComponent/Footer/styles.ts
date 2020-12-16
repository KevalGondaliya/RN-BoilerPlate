
import { StyleSheet } from 'react-native';
import { Avenir, W  } from '@constant/Unit';

export const styles = StyleSheet.create({
    topcontainer:{
        width: W,
        height: 60,
        paddingHorizontal: 20,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems: 'center',
    },
    txt:{
        color: '#FFFFFF',
        fontWeight: '800',
        fontFamily: Avenir,
        marginLeft: 10
    },
    image:{
    },
    actCon:{
        paddingHorizontal:20,
        height: 40,
        width: '40%',
        borderRadius: 25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#525B81'
    },
    inactCon:{
        paddingHorizontal:20,
        height: 40,
        width: '40%',
        borderRadius: 25,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
    }
});
