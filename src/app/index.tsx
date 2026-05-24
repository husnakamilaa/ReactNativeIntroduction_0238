import { Link, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TextInput, View, Alert, KeyboardAvoidingView, Platform, SafeAreaView, TouchableOpacity } from "react-native";
import { Navbar } from "../components/navbar";
import { COLORS, globalStyles } from "../style";

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = () => {
    if (!username || !password) {
      Alert.alert("Error", "Semua kolom harus diisi!");
      return;
    }
    router.replace({
      pathname: "/dashboard",
      params: { username },
    });
  };
  // return (
  //   <View style={styles.container}>
  //     <Text>Hello</Text>
  //     <Link href="/contoh">Halaman Contoh</Link>
  //     <Link href="/div">Halaman Form</Link>
  //     <Text>Ini Form Nama </Text>
  //     <TextInput
  //       placeholder="Masukkan nama anda"
  //       style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 200 }}
  //     />
  //   </View>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});