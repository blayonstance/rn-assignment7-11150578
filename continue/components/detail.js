import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";

const Details = ({ route, navigation }) => {
  const { product } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require("../assets/Backward.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Open Fashion</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Image source={require("../assets/Search.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Image
            source={require("../assets/shoppingBag.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Image source={product.image} style={styles.productImage} />

      <View style={styles.detailsContainer}>
        <Text style={styles.productName}>{product.name}</Text>
        <Text style={styles.productPrice}>${product.price.toFixed(2)}</Text>

        <Text style={styles.sectionTitle}>MATERIALS</Text>
        <Text style={styles.materialsText}>
          We work with monitoring programmes to ensure compliance with safety,
          health and quality standards for our products.
        </Text>

        <View style={styles.careInstructions}>
          <View style={{ flexDirection: "row", marginRight: 10 }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/Do Not Bleach.png")}
            />
            <Text style={styles.careItem}>Do not use bleach</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/Do Not Tumble Dry.png")}
            />
            <Text style={styles.careItem}>Do not tumble dry</Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/Do Not Wash.png")}
            />
            <Text style={styles.careItem}>
              Dry clean with tetrachloroethylene
            </Text>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/Iron Low Temperature.png")}
            />
            <Text style={styles.careItem}>
              Iron at a maximum of 110°C/230°F
            </Text>
          </View>
        </View>
        <View
          style={{ borderColor: "gray", borderWidth: 1, marginBottom: 40 }}
        ></View>

        <View style={styles.shippingInfo}>
          <View
            style={{
              flexDirection: "row",
            }}
          >
            <Image
              style={{ marginRight: 10 }}
              source={require("../assets/Shipping.png")}
            />
            <Text style={styles.shippingTitle}>Free Flat Rate Shipping</Text>
          </View>

          <Text style={styles.shippingDate}>Estimated to be delivered on</Text>
          <Text> 09/11/2021 - 12/11/2021.</Text>
        </View>

        <TouchableOpacity style={styles.addToBasketButton}>
          <Text style={styles.addToBasketText}>ADD TO BASKET</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginVertical: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  icon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productImage: {
    width: "100%",
    height: 400,
    resizeMode: "contain",
  },
  detailsContainer: {
    padding: 16,
  },
  productName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  productPrice: {
    fontSize: 18,
    color: "#ff5757",
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 16,
    marginBottom: 8,
  },
  materialsText: {
    fontSize: 14,
    lineHeight: 20,
    marginBottom: 16,
  },
  careInstructions: {
    marginBottom: 16,
  },
  careItem: {
    fontSize: 20,
    color: "gray",
    lineHeight: 20,
  },
  shippingInfo: {
    marginBottom: 24,
  },
  shippingTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  shippingDate: {
    fontSize: 14,
  },
  addToBasketButton: {
    backgroundColor: "#000",
    padding: 16,
    alignItems: "center",
    borderRadius: 4,
  },
  addToBasketText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Details;
