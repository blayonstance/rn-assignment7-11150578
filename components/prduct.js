import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProductItem = ({ product, onAddToCart }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate("Details", { product })}
    >
      <View style={styles.imageContainer}>
        <Image source={product.image} style={styles.image} />
        <TouchableOpacity
          style={styles.addButton}
          onPress={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
        >
          <Image
            source={require("../assets/add_circle.png")}
            style={styles.addButtonImage}
          />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "column ", marginTop: 10 }}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
  },
  imageContainer: {
    position: "relative",
    marginBottom: 8,
    resizeMode: "contain",
  },
  image: {
    width: 180,
    height: 240,
    resizeMode: "contain",
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 7,
  },
  price: {
    fontSize: 14,
    color: "#ff5757",
  },
  addButton: {
    position: "absolute",
    bottom: 10,
    right: 10,

    borderRadius: 15,
    padding: 5,
  },
  addButtonImage: {
    width: 20,
    height: 20,
  },
  //help
});

export default ProductItem;
