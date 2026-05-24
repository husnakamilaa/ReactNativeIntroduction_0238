import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, globalStyles } from "../style";

type NavbarProps = {
  title: string;
  showBack?: boolean;
  avatarUri?: string;
};

