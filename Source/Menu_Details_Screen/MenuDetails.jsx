import React from 'react'
import { Text, View, Image, ScrollView, Share } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { styles } from './Styles';
import Custom_Component from './Component/Custom_Component';
import * as Linking from 'expo-linking';
import { AntDesign } from '@expo/vector-icons';
import { useSelector, useDispatch } from 'react-redux';
import { Pressable } from 'react-native';
import { add_meal, remove_meal } from '../Redux/favouriteMeals';

function MenuDetails() {
    const route = useRoute();
    const dispatch = useDispatch();
    const { id, image, name, logo, description, ingredients, rating, price, Bestseller } = route.params.item;
    const favouriteMealsList = useSelector((state) => state.FavouriteMeals);
    const isExistingFavouriteMeal = () => {
        return favouriteMealsList.some((existing) => existing.id === id)
    }

    const shareLink = () => {
        const link = Linking.createURL("menuItem", { queryParams : route.params.item });
        console.log(link);
        Share.share({
            url: link,
            message: link
        })
    }
    const handleFavouiteMeal = () => {

        if (isExistingFavouriteMeal()) {
            return dispatch(remove_meal({ Id: id }));
        } else {
            return dispatch(add_meal(route.params.item));
        }
    }
    return (
        <ScrollView style={{ flex: 1, paddingHorizontal: responsiveWidth(4) }}>
            <View style={styles.menuItem_container}>
                <Image source={{ uri: image }} style={{ height: responsiveHeight(40), width: responsiveWidth(85) }} />
                <Image source={{ uri: logo }} style={{ height: responsiveHeight(7), width: responsiveWidth(8) }} />
                <View style={{flexDirection:"row"}}>
                    <View>
                        <Text style={styles.title}>{name}</Text>
                        <Text style={{ color: "gray" }}>{price}</Text>
                    </View>
                    <AntDesign name={isExistingFavouriteMeal() ? "heart" : "hearto"} size={24} color={isExistingFavouriteMeal() ? "red" : "black"} onPress={handleFavouiteMeal} style={{marginLeft:"auto", margin:responsiveWidth(4)}}/>
                </View>
            </View>

            <View style={{ flexDirection: "row" }}>
                <Custom_Component txt={`Rating ${rating}`} />
                {Bestseller && <Custom_Component txt={"Bestseller"} />}
                <Custom_Component txt={"Share"} onPress={shareLink} />
            </View>
            <View style={styles.description}>
                <Text style={{ fontSize: responsiveFontSize(2.5) }}> Description </Text>
                <Text style={{ color: "gray" }}>{description}</Text>
            </View>
            <View style={styles.description}>
                <Text style={{ fontSize: responsiveFontSize(2.5) }}> Ingredients </Text>
                <Text style={{ color: "gray" }}>{ingredients}</Text>
            </View>

        </ScrollView>
    )
}

export default MenuDetails
