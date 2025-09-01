import React from "react";
import { FlatList, TouchableOpacity, Image, Text, StyleSheet } from "react-native";
import useCartStore from "../store/cartStore";

export default function ItemGrid({ items }) {
  const toggleItem = useCartStore((state) => state.toggleItem);
  const cart = useCartStore((state) => state.cart);

  return (
    <FlatList
      data={items}
      numColumns={2}
      keyExtractor={(item) => item.slug}
      contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
      renderItem={({ item }) => {
        const inCart = cart[item.slug];
        return (
          <TouchableOpacity
            style={[styles.card, inCart && styles.inCart]}
            onPress={() => toggleItem(item.slug)}
          >
            <Image source={{ uri: item.iconUrl }} style={styles.image} />
            <Text style={styles.name}>{item.name}</Text>
            {inCart && <Text style={styles.cartText}>Added to cart</Text>}
          </TouchableOpacity>
        );
      }}
    />
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 8,
    padding: 15,
    backgroundColor: "#fff",
    borderRadius: 12,
    alignItems: "center",
    elevation: 3, 
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  inCart: {
    backgroundColor: "#d0f0c0",
  },
  image: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "600",
  },
  cartText: {
    marginTop: 5,
    fontSize: 12,
    color: "green",
  },
});
