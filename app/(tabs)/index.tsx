import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { Image } from 'expo-image';

const PlaceholderImage = require('@/assets/images/background-image.png');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
     alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
  },
   image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
    </View>
  );
}
