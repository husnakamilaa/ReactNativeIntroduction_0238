import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COLORS, globalStyles } from "../style";

type NavbarProps = {
  title: string;
  showBack?: boolean;
  avatarUri?: string;
};

export function Navbar({ title, showBack = false, avatarUri }: NavbarProps) {
  const router = useRouter();
  return (
    <View style={styles.navbar}>
      <View style={styles.row}>
        {showBack && (
          <TouchableOpacity onPress={() => router.back()} style={styles.backBtn}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
        )}
        <Text style={styles.navTitle}>{title}</Text>
      </View>
      <View style={styles.row}>
        {avatarUri && <Image source={{ uri: avatarUri }} style={styles.avatar} />}
        <TouchableOpacity style={styles.settingsBtn}>
          <Text style={styles.settingsIcon}>⚙</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const TABS = [
  { label: "Home" },
  { label: "Flights" },
  { label: "Hotels" },
  { label: "Profile" },
];

type BottomNavProps = { activeIndex?: number };

export function BottomNav({ activeIndex = 0 }: BottomNavProps) {
  return (
    <View style={globalStyles.bottomNav}>
      {TABS.map((tab, i) => (
        <TouchableOpacity key={i} style={globalStyles.bottomNavItem}>
          <Text style={i === activeIndex ? globalStyles.bottomNavLabelActive : globalStyles.bottomNavLabel}>
            {tab.label}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
