
import { StyleSheet } from 'react-native';
import { frlRegular, Avenir, W  } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        width:2 * ( W - 40 ) / 5,
        height: ( W - 40 ) / 2,
        marginRight: 15,
        borderRadius:20,
        shadowColor: '#000',
        shadowOffset:{width: 2, height:2},
        shadowOpacity: .5,
        elevation:3
    },
    imgStyle:{
      borderRadius:20,
    },
    mask:{
        flex:1,
        borderRadius:20,
        padding: 20,
        backgroundColor:'rgba(0, 0, 0, .2)'
    },
    txt:{
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: .5,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontFamily: frlRegular
    },
    duration:{
        fontFamily: Avenir,
        fontSize: 12,
        lineHeight: 20,
        letterSpacing: .5,
        color: '#FFF',
        position:'absolute',
        bottom:20,
        left: 20
    },
    image:{

    },
    rightCon:{

    }
});
