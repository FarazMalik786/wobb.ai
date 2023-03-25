import {StyleSheet} from 'react-native'
import { responsiveFontSize , responsiveHeight , responsiveWidth} from 'react-native-responsive-dimensions'

export const styles = StyleSheet.create({
   restaurantInfo_container:{
    marginVertical: responsiveHeight(5),
    marginHorizontal: responsiveWidth(3),
    borderRadius: responsiveWidth(2),
    backgroundColor:"white",
    padding: responsiveWidth(4),
    elevation: responsiveWidth(2)
    },
    title:{
        fontWeight:"bold",
        fontSize: responsiveFontSize(4),
        marginVertical: responsiveHeight(2)
    },
    MenuItem_Container:{
        flexDirection:"row",
        backgroundColor:"white",
        margin: responsiveHeight(2),
        padding: responsiveHeight(2),
        elevation: responsiveWidth(2),
        borderRadius: responsiveWidth(3)
    },
   
})