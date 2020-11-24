import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import constants from "../utils/constants";

const steps = ({ item }) => {
  return (
    <ScrollView>
      <View style={{ flexDirection: "column" }}>
        {item.instructions ? (
          item.instructions.map((instruction, index) => (
            <View key={index}>
              <Text style={styles.paragraph}>{instruction.display_text}</Text>
            </View>
          ))
        ) : (
          <Text style={styles.paragraph}>No steps available</Text>
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

export default steps;
