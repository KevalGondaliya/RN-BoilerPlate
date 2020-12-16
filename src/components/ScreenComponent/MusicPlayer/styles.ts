
import { StyleSheet } from 'react-native';
import { Avenir, frlRegular, H, W  } from '@constant/Unit';

export const styles = StyleSheet.create({
    cassett:{
        height: .3 * H,
        padding: 20,
        justifyContent:'flex-end',
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    playIcon:{
        width:22,
        height: 22,
        borderRadius:11
    },
    resumeCon:{
        flexDirection:'row',
        alignItems:'center'
    },
    resume:{
        color: '#FFF',
        fontFamily: Avenir,
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        marginLeft: 20
    },
    title:{
        fontFamily: frlRegular,
        fontWeight:'700',
        fontSize: 20,
        color: '#FFF',
        lineHeight: 32,
        letterSpacing: 1,
        marginTop: 20
    },
    slidebar:{
        width: W - 40,
        marginTop: 20,
        marginBottom: 10
    }
});
