/**
 * DashboardScreen — root of the visible app. Lives INSIDE
 * <ThemeProvider> (mounted by App.tsx), so useTheme() resolves
 * cleanly here and in every descendant.
 *
 * Composes the visible chunks: Header (top bar), StatRow (peach +
 * yellow cards), TabBar (chats / scheduler), and the active tab
 * content. Nothing in this file knows what shape any individual
 * piece is — it just stitches.
 */
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, Text } from "react-native";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import { useTheme } from "@plyxui/styles";

import { Header } from "../components/Header";
import { StatRow } from "../components/StatRow";
import { TabBar, type TabKey } from "../components/TabBar";
import { ChatsList } from "../components/ChatsList";
import { SchedulerList } from "../components/SchedulerList";

export function DashboardScreen() {
  const { colors } = useTheme();
  const [tab, setTab] = useState<TabKey>("chats");
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={[styles.center, { backgroundColor: colors.cream }]}>
        <Text style={{ color: colors.inkSoft, fontSize: 13 }}>Loading…</Text>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.cream }]}>
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
