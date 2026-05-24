import { Link } from "expo-router";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Hello</Text>
      <Link href="/contoh">Halaman Contoh</Link>
      <Link href="/div">Halaman Form</Link>
      <Text>Ini Form Nama </Text>
      <TextInput
        placeholder="Masukkan nama anda"
        style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 200 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});