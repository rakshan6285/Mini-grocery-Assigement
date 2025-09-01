import React from "react";
import { FlatList, TouchableOpacity, Text, StyleSheet, View } from "react-native";

export default function CategoryList({ categories, selected, onSelect }) {
  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={categories}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={[
              styles.category,
              selected === item && styles.selectedCategory,
            ]}
            onPress={() => onSelect(item)}
          >
            <Text
              style={[
                styles.categoryText,
                selected === item && styles.selectedText,
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    marginBottom: 5,
    alignItems: "center",      
    justifyContent: "center",  
  },
  category: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: "#eee",
    marginRight: 10,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCategory: {
    backgroundColor: "#4CAF50",
  },
  categoryText: {
    color: "#333",
    fontSize: 14,
    textAlign: "center",
  },
  selectedText: {
    color: "#fff",
    fontWeight: "600",
  },
});
