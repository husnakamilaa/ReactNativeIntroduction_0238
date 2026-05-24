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
  return (
    <SafeAreaView style={globalStyles.screen}>
      <Navbar title="index" />

      <KeyboardAvoidingView
        style={styles.content}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeTitle}>Selamat Datang</Text>
          <Text style={styles.welcomeSubtitle}>Silakan masuk ke akun Anda</Text>
        </View>

        <View style={[globalStyles.card, styles.loginCard]}>
          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Username / Email</Text>
            <TextInput
              style={globalStyles.input}
              value={username}
              onChangeText={setUsername}
              placeholderTextColor={COLORS.textLight}
              autoCapitalize="none"
              autoCorrect={false}
            />
          </View>

          <View style={globalStyles.inputContainer}>
            <Text style={globalStyles.label}>Password</Text>
            <TextInput
              style={globalStyles.input}
              value={password}
              onChangeText={setPassword}
              placeholderTextColor={COLORS.textLight}
              secureTextEntry
              autoCapitalize="none"
            />
          </View>

          <TouchableOpacity style={globalStyles.btnPrimary} onPress={handleSubmit} activeOpacity={0.85}>
            <Text style={globalStyles.btnPrimaryText}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>

      <View style={styles.bottomBar}>
        <TouchableOpacity style={styles.menuBtn}>
          <Text style={styles.menuIcon}>≡</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    // <View style={styles.container}>
    //   <Text>Hello</Text>
    //   <Link href="/contoh">Halaman Contoh</Link>
    //   <Link href="/div">Halaman Form</Link>
    //   <Text>Ini Form Nama </Text>
    //   <TextInput
    //     placeholder="Masukkan nama anda"
    //     style={{ height: 40, borderColor: "gray", borderWidth: 1, width: 200 }}
    //   />
    // </View>
  );
}

const styles = StyleSheet.create({
  content: { flex: 1, justifyContent: "center", paddingHorizontal: 24 },
  welcomeSection: { marginBottom: 28, paddingHorizontal: 4 },
  welcomeTitle: { fontSize: 28, fontWeight: "700", color: COLORS.primary },
  welcomeSubtitle: { fontSize: 14, color: COLORS.textGray, marginTop: 4 },
  loginCard: { paddingHorizontal: 20, paddingVertical: 24 },
  bottomBar: { paddingHorizontal: 20, paddingBottom: 16 },
  menuBtn: {
    width: 40, height: 40, borderRadius: 8,
    backgroundColor: COLORS.white,
    alignItems: "center", justifyContent: "center",
    shadowColor: "#000", shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1, shadowRadius: 4, elevation: 2,
  },
  menuIcon: { fontSize: 18, color: COLORS.textDark, fontWeight: "600" },
  // container: {
  //   flex: 1,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});