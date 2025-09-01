import React from "react";
import { View, Text, FlatList, StyleSheet, Image } from "react-native";
import groceriesData from "../data/groceries.json";
import useCartStore from "../store/cartStore";

export default function CartScreen() {
    const cart = useCartStore((state) => state.cart);
    const cartItems = Object.keys(cart).map((slug) => groceriesData[slug]);

    if (cartItems.length === 0) {
        return (
            <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>Your cart is empty</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.header}>My Cart</Text>
            <FlatList
                data={cartItems}
                keyExtractor={(item) => item.slug}
                contentContainerStyle={{ paddingBottom: 20 }}
                renderItem={({ item }) => (
                    <View style={styles.card}>
                        <Image source={{ uri: item.iconUrl }} style={styles.image} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.unit}>
                                {item.defaultQuantity} {item.unit}
                            </Text>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#f8f8f8" },
    header: {
        fontSize: 24,
        fontWeight: "700",
        marginTop: 15,
        marginLeft: 15,
        marginBottom: 10,
    },
    emptyContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyText: {
        fontSize: 18,
        color: "#888",
    },
    card: {
        flexDirection: "row",
        backgroundColor: "#fff",
        marginHorizontal: 15,
        marginBottom: 12,
        borderRadius: 12,
        padding: 12,
        alignItems: "center",
        elevation: 3,
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
    },
    image: { width: 60, height: 60, marginRight: 12 },
    info: { flex: 1 },
    name: { fontSize: 16, fontWeight: "600" },
    unit: { fontSize: 14, color: "#555" },
});
