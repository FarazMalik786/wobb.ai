import React from 'react'
import { View, Text, SectionList, Image, Pressable } from 'react-native'
import { DummyData } from '../DummyData/DummyData'
import { styles } from './Styles'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { FlatList } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Custom_Component from '../Menu_Details_Screen/Component/Custom_Component'
function Home_Screen() {

  const navigation = useNavigation();
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
    <View style={{ flex: 1 }}>
      <View style={styles.restaurantInfo_container}>
        <Image source={{ uri: DummyData['restaurant-info'].img }} style={{ height: responsiveHeight(25), width: responsiveWidth(87) }} />
        <Text style={styles.title}>{DummyData['restaurant-info'].name}</Text>
        <Text>North Indian, Chinese, South Indian</Text>
        <Text style={{ color: "gray" }}>{DummyData['restaurant-info'].address}</Text>
      </View>
      <View style={{marginHorizontal: responsiveWidth(5)}}>
      <Custom_Component txt={"Favourite"} onPress={()=>navigation.navigate("FavouriteMeals")} />
      </View>
      
      <FlatList data={DummyData.menu_item}
        renderItem={renderitem}
        keyExtractor={item => item.id} />

    </View>
  )
}

export default Home_Screen
