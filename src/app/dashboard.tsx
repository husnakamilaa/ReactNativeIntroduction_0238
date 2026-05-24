import DateTimePicker from "@react-native-community/datetimepicker";
import { useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import { BottomNav } from "../components/navbar";
import { COLORS, globalStyles } from "../style";

const TRIP_TYPES = ["Round Trip", "One way", "Multi city"];
const LOCATIONS = ["New York (NYC)", "Jakarta (CGK)"];
const DESTINATIONS = ["London (LDN)", "Singapore (SIN)"];
const PLACES = [
  {
    id: 1,
    name: "London, UK",
    desc: "Tower Bridge & River Thames",
    img: require("../../assets/images/place/london.jpg"),
  },
  {
    id: 2,
    name: "Paris, France",
    desc: "City of Lights & Romance",
    img: require("../../assets/images/place/paris.jpg"),
  },
  {
    id: 3,
    name: "Tokyo, Japan",
    desc: "Shibuya & Modern Culture",
    img: require("../../assets/images/place/tokyobaru.jpg"),
  },
];

const formatDate = (date: Date) =>
  date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });

function SelectField({ label, options, selected, onSelect }: {
  label: string; options: string[]; selected: number; onSelect: (i: number) => void;
}) {
  const [open, setOpen] = useState(false);
  return (
    <View style={[styles.fieldGroup, open && { zIndex: 100 }]}>
      <Text style={globalStyles.label}>{label}</Text>
      <TouchableOpacity style={globalStyles.selectBox} onPress={() => setOpen(!open)}>
        <Text style={globalStyles.selectText}>{options[selected]}</Text>
      </TouchableOpacity>
      {open && (
        <View style={globalStyles.dropdown}>
          {options.map((opt, i) => (
            <TouchableOpacity key={i}
              style={[globalStyles.dropdownItem, selected === i && globalStyles.dropdownItemActive]}
              onPress={() => { onSelect(i); setOpen(false); }}>
              <Text style={[globalStyles.dropdownText, selected === i && globalStyles.dropdownTextActive]}>
                {opt}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

export default function Dashboard() {
  const { username } = useLocalSearchParams<{ username: string }>();
  const [trip, setTrip]         = useState(0);
  const [from, setFrom]         = useState(0);
  const [to, setTo]             = useState(0);
  const [depart, setDepart]     = useState(new Date("2021-12-04"));
  const [ret, setRet]           = useState(new Date("2021-12-16"));
  const [showDepart, setShowDepart] = useState(false);
  const [showRet, setShowRet]       = useState(false);

 return (
    <SafeAreaView style={globalStyles.screen} edges={["bottom"]}>
      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.hero}>
          <View style={styles.heroTop}>
            <View>
              <Text style={styles.greeting}>Hello {username},</Text>
              <Text style={styles.heroTitle}>Book your next Flight</Text>
            </View>
            <Image
              source={require("../../assets/images/place/avatar.jpg")}
              style={styles.avatar}
            />
          </View>
          <View style={styles.tripTabs}>
            {TRIP_TYPES.map((t, i) => (
              <TouchableOpacity key={i}
                style={[styles.tripTab, trip === i && styles.tripTabActive]}
                onPress={() => setTrip(i)}>
                <Text style={[styles.tripTabText, trip === i && styles.tripTabTextActive]}>{t}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={[globalStyles.card, styles.searchCard]}>
          <SelectField label="From (Location)"  options={LOCATIONS}    selected={from} onSelect={setFrom} />
          <SelectField label="To (Destination)" options={DESTINATIONS} selected={to}   onSelect={setTo} />

          <View style={styles.dateRow}>
            {/* Departure */}
            <View style={styles.dateCol}>
              <Text style={globalStyles.label}>Departure</Text>
              <TouchableOpacity style={globalStyles.datePill} onPress={() => setShowDepart(true)}>
                <Text style={globalStyles.datePillText}>{formatDate(depart)}</Text>
              </TouchableOpacity>
              {showDepart && (
                <DateTimePicker value={depart} mode="date" display="default"
                  onChange={(_, date) => { setShowDepart(false); if (date) setDepart(date); }} />
              )}
            </View>

            <View style={styles.dateCol}>
              <Text style={globalStyles.label}>Return</Text>
              <TouchableOpacity style={globalStyles.datePill} onPress={() => setShowRet(true)}>
                <Text style={globalStyles.datePillText}>{formatDate(ret)}</Text>
              </TouchableOpacity>
              {showRet && (
                <DateTimePicker value={ret} mode="date" display="default"
                  onChange={(_, date) => { setShowRet(false); if (date) setRet(date); }} />
              )}
            </View>
          </View>

          <TouchableOpacity style={globalStyles.btnPrimary} activeOpacity={0.85}>
            <Text style={globalStyles.btnPrimaryText}>Search flights</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={globalStyles.sectionTitle}>Popular place</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {PLACES.map((p) => (
              <TouchableOpacity key={p.id} style={globalStyles.carouselCard}>
                <Image source={p.img } style={globalStyles.carouselImage} resizeMode="cover" />
                <View style={globalStyles.carouselOverlay}>
                  <Text style={globalStyles.carouselName}>{p.name}</Text>
                  <Text style={globalStyles.carouselDesc}>{p.desc}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>

        <View style={{ height: 90 }} />
      </ScrollView>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  hero: { backgroundColor: COLORS.primary, paddingHorizontal: 20, paddingTop: 20, paddingBottom: 30 },
  heroTop: { flexDirection: "row", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 },
  greeting:  { fontSize: 14, color: "rgba(255,255,255,0.85)" },
  heroTitle: { fontSize: 22, fontWeight: "700", color: COLORS.white, marginTop: 2 },
  avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: COLORS.white },
  tripTabs: { flexDirection: "row", backgroundColor: "rgba(255,255,255,0.15)", borderRadius: 30, padding: 4 },
  tripTab:  { flex: 1, paddingVertical: 8, alignItems: "center", borderRadius: 24 },
  tripTabActive: { backgroundColor: COLORS.white },
  tripTabText:   { fontSize: 13, color: "rgba(255,255,255,0.85)", fontWeight: "500" },
  tripTabTextActive: { color: COLORS.primary, fontWeight: "700" },

  searchCard: { marginHorizontal: 16, marginTop: -16, zIndex: 10 },
  fieldGroup: { marginBottom: 14 },
  dateRow: { flexDirection: "row", gap: 12, marginBottom: 16 },
  dateCol: { flex: 1 },

  section: { marginTop: 24, paddingHorizontal: 16 },
});

