import React from "react";
import { ScrollView, StyleSheet, Pressable, Dimensions } from "react-native";
import { Card } from "react-native-elements";
import constants from "../utils/constants";

const { width, height } = Dimensions.get("screen");

const recipe = ({ item, navigation }) => {
  //console.log(id);

  const {name, thumbnail_url} = item;

  const loadRecipe = () => {
      navigation.navigate(constants.SCREEN.DETAILS, {item});
  };

  return (
      <Pressable onPress={loadRecipe}>
        <Card containerStyle={styles.card}>
          <Card.Image style={styles.img} source={{ uri: thumbnail_url }} />
          <Card.Title style={styles.title}>{name}</Card.Title>
        </Card>
      </Pressable>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: constants.COLORS.WARNING,
    borderRadius: 20,
    width: 180,
    height: 240,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
    position: 'relative',
  },

  title: {
    marginTop: 5,
    marginBottom: 5,
    fontSize: 15,
    width: 'auto',
    height: 'auto',
    color: constants.COLORS.LIGHT,
  },
  img:{
    width: 160,
    height: 130,
    borderRadius: 20,
  },
});

export default recipe;
