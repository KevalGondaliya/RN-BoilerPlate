import { StyleSheet } from 'react-native';
import { W, Avenir, frlRegular, isIOS } from '@constant/Unit';

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    background:{
        flex:1
    },
    content:{
        flex:1,
        paddingLeft: 20,
        paddingTop:20
    },
    todaytext:{
        fontSize: 12,
        color: 'yellow',
        fontFamily: Avenir,

    },
    description:{
        fontSize: 16,
        lineHeight:24,
        letterSpacing: .5,
        fontWeight: 'bold',
        fontFamily: frlRegular,
        fontStyle: 'normal',
        paddingRight:20,
        marginTop: 5
    },
    section:{
        width: W,
    },
    sectionHeader:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginRight:20,
        paddingVertical: 10
    },
    txt:{
        fontFamily:Avenir,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing:.5
    },
    footer:{
        position:'absolute',
        bottom:0,
        shadowColor: 'rgba(255, 255, 255, .16)',
        shadowOffset: {width: -4, height: 32},
        shadowRadius: 5,
        elevation: 5
    },
    space:{
        height: isIOS ? 120 : 90
    }
});
