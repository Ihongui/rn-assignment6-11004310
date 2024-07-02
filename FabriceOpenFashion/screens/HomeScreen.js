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
    price: 320,
    image: require("../assets/africa21.png"),
  },
  {
    id: "2",
    title: "Black",
    subtitle: "Reversible Angora Cardigan",
    price: 220,
    image: require("../assets/africa26.jpeg"),
  },
  {
    id: "3",
    title: "west Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 150,
    image: require("../assets/africa22.jpeg"),
  },
  {
    id: "4",
    title: "Lamerei",
    subtitle: "Reversible Angora Cardigan",
    price: 100,
    image: require("../assets/africa23.jpeg"),
  },
  {
    id: "5",
    title: "Office Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 320,
    image: require("../assets/africa24.jpeg"),
  },
  {
    id: "6",
    title: "Church Wear",
    subtitle: "Reversible Angora Cardigan",
    price: 420,
    image: require("../assets/dress6.png"),
  },
  {
    id: "7",
    title: "Tradice",
    subtitle: "Reversible Angora Cardigan",
    price: 550,
    image: require("../assets/africa25.jpeg"),
  },
  {
    id: "8",
    title: "Lamerei",
    subtitle: "Reversible Angora Cardigan",
    price: 720,
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
      <Text style={styles.storyText}>OUR STORY </Text>
      <Text>From Fabrice IHONGUI</Text>
      <TouchableOpacity>
        <Image
          source={require("../assets/addbutton.png")}
          style={styles.addbutton}
        />
      </TouchableOpacity>
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
      <Button
        title="View your Items"
        onPress={() => navigation.navigate("Cart")}
      />
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
    left: -120,
  },
  productContainer: {
    flex: 1,
    margin: 10,
    alignItems: "center",
  },
  productImage: {
    width: 175,
    height: 250,
    resizeMode: "cover",
    marginBottom: 10,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: "bold",
    left: -50,
  },
  productSubtitle: {
    fontSize: 14,
    color: "#888",
  },
  productPrice: {
    fontSize: 16,
    color: "#e60000",
    left: -70,
  },
  addButton: {
    width: 30,
    height: 30,
    marginTop: 10,
    top: -120,
    left: 70,
  },
  addbutton: {
    top: -65,
    left: 260,
  },
});

export default HomeScreen;
