/**
 * plyxui-demo-native — React Native dashboard with the plyxui design
 * language. Multi-file: each component lives in src/components/*.tsx
 * with a shared theme + data module. Snack-safe — no @plyxui/* imports
 * until the globalThis-singleton fix in @plyxui/* @0.2.2 propagates
 * through Snackager.
 *
 *   src/theme.ts      → BRAND tokens + FONTS map
 *   src/data.ts       → mock CHATS + REMINDERS
 *   src/components/*  → Header, StatRow, TabBar, ChatsList, SchedulerList, Avatar
 */
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, View, StyleSheet } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";

import { BRAND } from "./src/theme";
import { Header } from "./src/components/Header";
import { StatRow } from "./src/components/StatRow";
import { TabBar, type TabKey } from "./src/components/TabBar";
import { ChatsList } from "./src/components/ChatsList";
import { SchedulerList } from "./src/components/SchedulerList";

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });
  const [tab, setTab] = useState<TabKey>("chats");

  if (!fontsLoaded) {
    return (
      <View style={[styles.center, { backgroundColor: BRAND.cream }]}>
        <Text style={{ color: BRAND.inkSoft, fontSize: 13 }}>Loading…</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: BRAND.cream }]}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
        <StatRow />
        <View style={{ marginTop: 24 }}>
          <TabBar value={tab} onChange={setTab} />
          {tab === "chats" ? <ChatsList /> : <SchedulerList />}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
