import { Heading, Text, Center, Image, View } from "@gluestack-ui/themed";
import { ScrollView, StyleSheet } from "react-native";
import { Header } from "../components";
import { useLocalSearchParams } from "expo-router";
import datas from "../datas"; // Impor berkas datas.js

const NewsDetail = () => {
  const params = useLocalSearchParams();
  const newsId = parseInt(params.id); // Ubah parameter ID menjadi integer

  // Mencari data berdasarkan ID
  const newsData = datas.find((item) => item.id === newsId);

  return (
    <View>
      <Header title={"News"} withBack={true} />
      <ScrollView contentContainerStyle={styles.container}>
        <Image source={{ uri: newsData.image }} style={styles.image} />
        <Text style={styles.date}>{newsData.date}</Text>
        <Text style={styles.title}>{newsData.title}</Text>
        
        <Text style={styles.content}>{newsData.content}</Text>
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  image: {
    resizeMode: "cover",
    height:250,
    width: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 10,
  },
  date: {
    fontSize: 16,
    color: "gray",
    marginTop: 20,
  },
  content: {
    fontSize: 18,
    margin: 16,
  },
});

export default NewsDetail;
