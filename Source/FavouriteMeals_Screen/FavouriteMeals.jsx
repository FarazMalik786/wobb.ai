import React from 'react'
import { View, Text, SectionList, Image, Pressable , FlatList , StyleSheet} from 'react-native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native'
function FavouriteMeals() {
    const navigation = useNavigation();
    const favouriteMealsList = useSelector((state) => state.FavouriteMeals);

    const renderitem = ({ item }) => {
        return <Pressable style={styles.MenuItem_Container} onPress={() => navigation.navigate("menuItem", { item })}>
          <View style={{ height: responsiveHeight(15), width: responsiveWidth(60) }}>
            <Text style={{ fontSize: responsiveHeight(3), fontWeight: "bold" }}>{item.name}</Text>
            <Text>{item.price}</Text>
            <Text style={{ color: "gray" }}>{item.ingredients}</Text>
          </View>
          <Image source={{ uri: item.image }} style={{ height: responsiveHeight(12), width: responsiveWidth(23) }} />
        </Pressable>
      }
  return (
    <View>
       <FlatList data={favouriteMealsList}
        renderItem={renderitem}
        keyExtractor={item => item.id} />
    </View>
  )
}

export default FavouriteMeals
const styles = StyleSheet.create({
    MenuItem_Container:{
        flexDirection:"row",
        backgroundColor:"white",
        margin: responsiveHeight(2),
        padding: responsiveHeight(2),
        elevation: responsiveWidth(2),
        borderRadius: responsiveWidth(3)
    }
})