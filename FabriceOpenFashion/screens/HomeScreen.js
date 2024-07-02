import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const products = [
  {
    id: "1",
    title: "Office Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress1.png"),
  },
  {
    id: "2",
    title: "Black",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress2.png"),
  },
  {
    id: "3",
    title: "Church Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress3.png"),
  },
  {
    id: "4",
    title: "Lamerei",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress4.png"),
  },
  {
    id: "5",
    title: "Office Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress5.png"),
  },
  {
    id: "6",
    title: "Church Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress6.png"),
  },
  {
    id: "7",
    title: "Lamerei",
    subtitle: "Reversible Angora Cardigan",
    price: 120,
    image: require("../assets/dress7.png"),
  },
];

const HomeScreen = ({ navigation }) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const loadCart = async () => {
      const storedCart = await AsyncStorage.getItem("cart");
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    };
    loadCart();
  }, []);

  const addToCart = async (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={require("../assets/Menu.png")} style={styles.icon} />
        </TouchableOpacity>
        <Image source={require("../assets/Logo.png")} style={styles.logo} />
        <View style={styles.headerIcons}>
          <TouchableOpacity>
            <Image
              source={require("../assets/Search.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image
              source={require("../assets/shoppingBag.png")}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.storyText}>OUR STORY</Text>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Image source={item.image} style={styles.productImage} />
            <Text style={styles.productTitle}>{item.title}</Text>
            <Text style={styles.productSubtitle}>{item.subtitle}</Text>
            <Text style={styles.productPrice}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(item)}>
              <Image
                source={require("../assets/add_circle.png")}
                style={styles.addButton}
              />
            </TouchableOpacity>
          </View>
        )}
      />
      <Button title="Go to Cart" onPress={() => navigation.navigate("Cart")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
  },
  logo: {
    width: 100,
    height: 50,
    resizeMode: "contain",
  },
  headerIcons: {
    flexDirection: "row",
  },
  icon: {
    width: 24,
    height: 24,
    marginHorizontal: 5,
  },
  storyText: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 20,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  productImage: {
    width: 150,
    height: 200,
    resizeMode: "cover",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  productPrice: {
    fontSize: 16,
    color: "#e60000",
  },
  addButton: {
    width: 30,
    height: 30,
    marginTop: 10,
  },
});

export default HomeScreen;
