import {StyleSheet} from 'react-native'
import { responsiveFontSize , responsiveHeight , responsiveWidth} from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
   menuItem_container:{
    marginVertical: responsiveHeight(4),
   // marginHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    backgroundColor:"white",
    padding: responsiveWidth(4),
    elevation: responsiveWidth(2)
    },
    title:{
        fontWeight:"bold",
        fontSize: responsiveFontSize(4),
    },
    description:{
        width: responsiveWidth(92),
        backgroundColor:"white",
        alignSelf:"center",
        padding: responsiveHeight(1.5),
        borderRadius: responsiveWidth(2),
        elevation: responsiveWidth(2),
        marginBottom: responsiveHeight(3)
    }
})