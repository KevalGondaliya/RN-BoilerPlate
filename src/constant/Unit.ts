import { Dimensions, Platform } from 'react-native';
import { getStatusBarHeight } from 'react-native-status-bar-height';

export const H = Dimensions.get('window').height;
export const W = Dimensions.get('window').width;
export const isIOS = Platform.OS === 'ios';
export const statusH = getStatusBarHeight();
export const mgTop = isIOS ? 45 : statusH;
export const frlRegular = 'FrankRuhlLibre-Regular';
export const Avenir = 'AvenirLTStd-Book';
