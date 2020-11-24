import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import constants from "../utils/constants";

const ingredients = ({ item }) => {
    // console.log(item.sections.components)
  return (
    <ScrollView>
      <View style={{ flexDirection: "column" }}>
        {item.sections ? (
          item.sections.map((section, index) => (
            section.components.map((item,index) => (
                // console.log(item.raw_text+" "+item.extra_comment)
                <Text key={index} style={styles.paragraph}>{section ? (item.raw_text+" "+item.extra_comment) : ("")}</Text>
            ))
          ))
        ) : (
          <Text style={styles.paragraph}>No ingredients available</Text>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paragraph: {
    marginTop: 10,
    fontSize: 14,
    fontWeight: "300",
    color: constants.COLORS.TEXT_COLOR,
    lineHeight: 22,
    textAlign: "left",
  },
});

export default ingredients;

