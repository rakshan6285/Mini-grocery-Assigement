import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import groceriesData from "../data/groceries.json";
import CategoryList from "../components/CategoryList";
import ItemGrid from "../components/ItemGrid";

export default function HomeScreen() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [items, setItems] = useState([]);

  useEffect(() => {
    const allItems = Object.values(groceriesData); 
    const uniqueCategories = [...new Set(allItems.map(item => item.category))];
    setCategories(uniqueCategories);
    setSelectedCategory(uniqueCategories[0]); 
  }, []);

  useEffect(() => {
    if (selectedCategory) {
      const filteredItems = Object.values(groceriesData).filter(
        item => item.category === selectedCategory
      );
      setItems(filteredItems);
    }
  }, [selectedCategory]);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Grocery Categories</Text>
      <CategoryList
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />
      <Text style={styles.subHeader}>{selectedCategory}</Text>
      <ItemGrid items={items} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f8f8f8" },
  header: { fontSize: 24, fontWeight: "bold", margin: 15 },
  subHeader: { fontSize: 18, fontWeight: "bold", marginLeft: 15, marginVertical: 10, color: "#555" },
});
