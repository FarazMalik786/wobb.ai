import React from 'react'
import { Text, View, Pressable} from 'react-native'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
function Custom_Component({txt , onPress}) {
  return (
    <Pressable onPress={onPress}
    style={{justifyContent:"center" , alignItems:"center" , height: responsiveHeight(5), width: responsiveWidth(20) , backgroundColor:"white" , borderWidth:responsiveWidth(0.3), borderColor:"black" , marginBottom: responsiveHeight(2),borderRadius: responsiveWidth(2), marginHorizontal: responsiveWidth(1)}}
    >
      <Text>{txt}</Text>
    </Pressable>
  )
}

export default Custom_Component
