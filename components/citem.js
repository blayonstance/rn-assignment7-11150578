import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const CartItem = ({ product, onRemoveFromCart }) => {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price}</Text>
      </View>
      <TouchableOpacity
        style={styles.removeButton}
        onPress={() => onRemoveFromCart(product.id)}
      >
        <Image
          source={require("../assets/remove.png")} // Replace with your actual x icon image path
          style={styles.removeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  image: {
    width: 80,
    height: 80,
    resizeMode: "cover",
    marginRight: 16,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    color: "#888",
  },
  removeButton: {
    padding: 8,
  },
  removeIcon: {
    width: 20,
    height: 20,
  },
});

export default CartItem;
