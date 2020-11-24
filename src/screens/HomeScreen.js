import React, { useEffect } from "react";
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform,
  Image
} from "react-native";
import { Card } from "react-native-elements";
import axios from "axios";
import constants from "../utils/constants";
import Recipe from "../components/recipes";

export const HomeScreen = ({navigation, route}) => {

    //console.log(navigation);

    const [recipes, setRecipes] = React.useState([]);

    const imageProfile = 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500';

    const options = {
      method: "GET",
      url: "https://tasty.p.rapidapi.com/recipes/list",
      params: { from: "0", size: "40", tags: "under_30_minutes" },
      headers: {
        "x-rapidapi-key": `${constants.API_KEY}`,
        "x-rapidapi-host": "tasty.p.rapidapi.com",
      },
    };

    useEffect(() => {
      axios
        .request(options)
        .then(function (response) {
          setRecipes(response.data.results);
        console.log(response.data.results);
        })
        .catch(function (error) {
          console.error(error);
        });
    }, [setRecipes]);

    return (
        <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Hi Chef!!</Text>
          <Text style={styles.subtitle}>What do you want to cook?</Text>
        </View>
        <View style={styles.content}>
         <FlatList
            style={{ alignSelf: "center" }}
            numColumns={2} // set number of columns
            columnWrapperStyle={styles.row} // space them out evenly
            data={recipes}
            renderItem={({ item }) => (
              <Recipe item={item} navigation={navigation}/>
            )}
          keyExtractor={(item) => `${item.id}`}
          contentInset={{ bottom: 80, top: 0 }}
        /> 
        </View>
        </ScrollView>
    );

    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.LIGHT_GRAY,
    marginTop: Platform.OS !== "ios" ? 0 : 0,
  },
  content: {
    flex: 2,
    backgroundColor: constants.COLORS.PRIMARY2,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    zIndex: 20,
  },
  title: {
    marginLeft: 20,
    fontSize: 30,
    marginTop: 60,
    color: constants.COLORS.LIGHT,
  },
  titleContainer: {
    position: 'relative',
    zIndex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  subtitle: {
    fontSize: 12,
    marginBottom: 60,
    color: constants.COLORS.LIGHT,
  },
  img: {
    height: 150,
    width:150,
  },
  row: {
    flex: 1,
    justifyContent: "space-around",
  },
  img: {},
});


