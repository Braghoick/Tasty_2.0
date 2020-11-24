import React from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions
} from "react-native";
import constants from "../utils/constants";
import Steps from "../components/steps";
import Ingredients from "../components/ingredients";

const { width, height } = Dimensions.get("screen");
const imageWidth = 130;
const imageHeight = 200;

export const Recipe = ({ navigation, route }) => {
  const { item } = route.params;
  let array = item.instructions;
  //console.log(item);
  return (
    <ScrollView style={styles.container} stickyHeaderIndices={[0]}>
      <View style={styles.imageContainer}>
        <Image
          style={[StyleSheet.absoluteFill, styles.cover]}
          source={{
            uri: `${item.thumbnail_url}`,
          }}
        ></Image>
      </View>
      <View style={styles.content}>
        <View style={{ flex: 2 }}>
          <View style={styles.titleContainer}>
            <Text style={styles.titlePrincipal}>{item.name}</Text>
          </View>
            <Text style={styles.prepTime}>Total Preparation time: {item.total_time_minutes} min</Text>
        </View>

        {/* DESCRIPCION */}
        <View style={styles.contentSecondary}>
          <View style={styles.secondaryContent}>
            <Text style={styles.title}>Description</Text>
            <Text style={styles.paragraph}>
              {item.description ? item.description : "No description available"}
            </Text>
          </View>
        </View>

        {/* Ingredientes */}
        <View style={styles.contentSecondary}>
          <View style={styles.secondaryContent}>
            <Text style={styles.title}>Ingredients</Text>
            <Ingredients item={item} />
          </View>
        </View>

        {/* PASOS */}
        <View style={styles.contentSecondary}>
          <View style={styles.secondaryContent}>
            <Text style={styles.title}>Steps</Text>
            <Steps item={item} />
          </View>
        </View>

      </View>
      <View style={{ height: 10 }} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: constants.COLORS.PRIMARY,
  },
  imageContainer: {
    position: "relative",
    width,
    height: height / 3,
  },
  cover: {
    width: null,
    height: null,
  },
  content: {
    position: "relative",
    width,
    paddingBottom: 0,
    backgroundColor: constants.COLORS.PRIMARY,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    top: -30,
    zIndex: 20,
  },
  contentSecondary: {
    position: "relative",
    width,
    paddingHorizontal: 30,
    backgroundColor: constants.COLORS.PRIMARY,
    zIndex: 10,
  },
  titleContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  titlePrincipal: {
    color: constants.COLORS.TEXT_COLOR,
    fontWeight: "bold",
    flexGrow: 1,
    flexWrap: "wrap",
    marginTop: 30,
    fontSize: 25,
  },
  title: {
    color: constants.COLORS.TEXT_COLOR,
    fontWeight: "bold",
    flexGrow: 1,
    flexWrap: "wrap",
    marginTop: 30,
    fontSize: 18,
  },
  prepTime: {
    fontSize: 15,
    marginTop: 15,
    paddingHorizontal: 30,
    textTransform: "capitalize",
  },
  poster: {
    position: "absolute",
    width: imageWidth,
    height: imageHeight,
    borderRadius: 16,
    left: 20,
  },
  secondaryContent: {
  },
  paragraph: {
    fontSize: 15,
    fontWeight: "300",
    color: constants.COLORS.TEXT_COLOR,
    lineHeight: 22,
    marginTop: 5,
    textAlign: "left",
  },
});
