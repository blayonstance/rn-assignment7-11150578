import React, { useState, useEffect } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
  Modal,
} from "react-native";
import ProductItem from "./prduct";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCartItems(JSON.parse(storedCart));
      }
    };
    loadCart();

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        const mappedProducts = data.map((item) => ({
          id: item.id.toString(),
          description: item.description,
          name: item.title,
          price: item.price,
          image: { uri: item.image },
        }));
        setProducts(mappedProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const addToCart = async (product) => {
    const itemExists = cartItems.find((item) => item.id === product.id);
    if (itemExists) {
      return;
    }

    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const navigateTo = (screen) => {
    navigation.navigate(screen);
    setIsMenuVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={toggleMenu}>
          <Image source={require("../assets/Menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Text style={styles.title}>Open Fashion</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Search")}>
          <Image source={require("../assets/Search.png")} style={styles.icon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Text style={{ textAlign: "right" }}>{cartItems.length}</Text>
          <Image
            source={require("../assets/shoppingBag.png")}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="fade"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={toggleMenu}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={toggleMenu}
        >
          <View style={styles.dropdownMenu}>
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 27 }}>ERIC ATSU</Text>
              <View
                style={{
                  borderColor: "#ff5757",
                  borderWidth: 1,
                  marginTop: 10,
                  width: 100,
                  marginRight: 10,
                }}
              ></View>
            </View>
            <TouchableOpacity onPress={() => navigateTo("Home")}>
              <Text style={styles.menuItem}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("Cart")}>
              <Text style={styles.menuItem}>Cart</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("")}>
              <Text style={styles.menuItem}>Jewelery</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("")}>
              <Text style={styles.menuItem}>Blog</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("")}>
              <Text style={styles.menuItem}>Electronic</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigateTo("")}>
              <Text style={styles.menuItem}>Clothing</Text>
            </TouchableOpacity>
          </View>
        </TouchableOpacity>
      </Modal>

      <View style={styles.containerr}>
        <Text style={styles.titlee}>OUR STORY</Text>
        <View style={styles.iconContainer}>
          <View style={styles.line} />
          <View style={styles.iconCircle}>
            <Image source={require("../assets/Listview.png")} />
          </View>
          <View style={styles.iconCircle}>
            <Ionicons name="filter" size={30} />
          </View>
        </View>
      </View>
      <FlatList
        data={products}
        numColumns={2}
        renderItem={({ item }) => (
          <ProductItem product={item} onAddToCart={addToCart} />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.productList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
  containerr: {
    width: "100%",
    marginVertical: 20,
    paddingHorizontal: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
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
  titlee: {
    fontSize: 18,
    fontWeight: "400",
    letterSpacing: 4,
    marginBottom: 10,
  },
  iconContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    position: "relative",
  },
  iconCircle: {
    alignItems: "center",
    justifyContent: "center",
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: "#eeede9",
    marginHorizontal: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productList: {
    padding: 6,
    gap: 6,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    justifyContent: "flex-start",
  },
  dropdownMenu: {
    backgroundColor: "white",
    padding: 2,
    marginTop: 80,
    width: 170,
    marginRight: 20,
    marginHorizontal: 20,
    borderRadius: 5,
    elevation: 5,
  },
  menuItem: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});

export default HomeScreen;
