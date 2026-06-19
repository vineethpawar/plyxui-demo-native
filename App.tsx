/**
 * plyxui-demo-native — React Native dashboard built end-to-end with
 * @plyxui/*. Same component contract as the web demo: Metro picks
 * the `.native.tsx` files automatically via the `react-native`
 * condition in each package's exports field.
 *
 *   ThemeProvider + ToastProvider wrap the app
 *   registerColorTokens adds the cream / peach / yellow palette
 *   Box / Text / Stack / Flex / Image / Divider / Spinner from primitives
 *   Tabs / Toaster from comps
 *   useToast from hooks
 *
 * Open in Expo Snack (browser) or scan the QR with Expo Go on your phone.
 */
import { useState } from "react";
import { SafeAreaView, ScrollView, StatusBar, Pressable, StyleSheet, View, Text as RNText } from "react-native";
import { useFonts, Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import { registerColorTokens } from "@plyxui/core";
import { ThemeProvider, useTheme } from "@plyxui/styles";
import { ToastProvider, useToast } from "@plyxui/hooks";
import { Box, Text, Stack, Flex, Image, Divider } from "@plyxui/primitives";
import { Tabs, TabList, Tab, TabPanel, Toaster } from "@plyxui/comps";

registerColorTokens({
  cream:        { light: "#FAF3EC", dark: "#161412" },
  card:         { light: "#FFFFFF", dark: "#1F1C19" },
  cardSubtle:   { light: "#F6EFE8", dark: "#26221E" },
  peach:        { light: "#F8C9C0", dark: "#5B3A35" },
  peachDeep:    { light: "#F0AA9E", dark: "#A06A60" },
  yellow:       { light: "#F6E27A", dark: "#806F2C" },
  yellowDeep:   { light: "#E8D060", dark: "#A89230" },
  bubbleMine:   { light: "#F6CBC1", dark: "#5B3A35" },
  bubbleTheirs: { light: "#F2EBE3", dark: "#2A2522" },
  inkStrong:    { light: "#1F1A17", dark: "#F5F1EC" },
  inkSoft:      { light: "#7A716A", dark: "#A39B92" },
});

const CHATS = [
  { id: "1", name: "Mithun Grives",  preview: "Yeah, the colors look great now.",  avatar: "https://i.pravatar.cc/72?img=14", unread: 2 },
  { id: "2", name: "Anika Patel",    preview: "Pushed the migration script.",      avatar: "https://i.pravatar.cc/72?img=49" },
  { id: "3", name: "Karim Yousef",   preview: "Approved — ship it.",                avatar: "https://i.pravatar.cc/72?img=12", unread: 1 },
  { id: "4", name: "Liu Qing",       preview: "Quick call before standup?",         avatar: "https://i.pravatar.cc/72?img=15" },
  { id: "5", name: "Tomas Ramirez",  preview: "Notes from the design crit.",        avatar: "https://i.pravatar.cc/72?img=16" },
];

const REMINDERS = [
  { id: "r1", date: "27 Sep, 2024", title: "Annual Book Fair",      body: "Open to all members. Volunteer slots still available.",  variant: "peach" as const },
  { id: "r2", date: "02 Oct, 2024", title: "Art Competition",       body: "Submissions close at 6 pm. Theme: cities at night.",     variant: "yellow" as const },
  { id: "r3", date: "11 Oct, 2024", title: "Quarterly Town Hall",   body: "Numbers, what shipped, what's next. Hybrid.",            variant: "peach" as const },
];

export default function Root() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular, Montserrat_500Medium, Montserrat_600SemiBold, Montserrat_700Bold,
  });

  return (
    <ThemeProvider>
      <ToastProvider>
        <Shell ready={fontsLoaded} />
        <Toaster position="bottom" />
      </ToastProvider>
    </ThemeProvider>
  );
}

function Shell({ ready }: { ready: boolean }) {
  const { colors } = useTheme();
  const [tab, setTab] = useState("chats");

  if (!ready) {
    return (
      <View style={[styles.center, { backgroundColor: colors.cream }]}>
        <RNText style={{ color: colors.inkSoft }}>Loading…</RNText>
      </View>
    );
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: colors.cream }]}>
      <StatusBar barStyle="dark-content" />
      <Header />
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ padding: 16, paddingBottom: 48 }}>
        <StatRow />

        <View style={{ marginTop: 20 }}>
          <Tabs value={tab} onChange={setTab}>
            <TabList>
              <Tab value="chats">Chats</Tab>
              <Tab value="scheduler">Scheduler</Tab>
            </TabList>

            <TabPanel value="chats">
              <ChatsList />
            </TabPanel>

            <TabPanel value="scheduler">
              <SchedulerList />
            </TabPanel>
          </Tabs>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function Header() {
  const { colors } = useTheme();
  return (
    <Flex
      align="center"
      justify="between"
      style={{ paddingHorizontal: 18, paddingVertical: 14, backgroundColor: colors.cream }}
    >
      <View>
        <Text size="sm" style={{ color: colors.inkSoft, fontFamily: "Montserrat_500Medium" }}>
          Good morning,
        </Text>
        <Text size="lg" weight="bold" style={{ color: colors.inkStrong, fontFamily: "Montserrat_700Bold" }}>
          Mithun Roy
        </Text>
      </View>
      <Flex align="center" gap={2}>
        <RoundIconBtn label="Notifications">🔔</RoundIconBtn>
        <Image
          src="https://i.pravatar.cc/64?img=14"
          alt="You"
          width={40}
          height={40}
          radius="pill"
          fallback={
            <View style={{ width: "100%", height: "100%", backgroundColor: colors.peachDeep, alignItems: "center", justifyContent: "center" }}>
              <RNText style={{ color: "#fff", fontWeight: "700" }}>MR</RNText>
            </View>
          }
        />
      </Flex>
    </Flex>
  );
}

function StatRow() {
  return (
    <Stack direction="horizontal" gap={3}>
      <StatCard label="Members"  value="142" delta="+18" variant="peach" />
      <StatCard label="Events"   value="7"   delta="this wk" variant="yellow" />
    </Stack>
  );
}

function StatCard({ label, value, delta, variant }: { label: string; value: string; delta: string; variant: "peach" | "yellow" }) {
  const { colors } = useTheme();
  const bg = variant === "peach" ? colors.peach : colors.yellow;
  return (
    <Box style={{ flex: 1, backgroundColor: bg, borderRadius: 18, padding: 16 }}>
      <Text size="xs" weight="semibold" style={{ color: colors.inkStrong, opacity: 0.75, fontFamily: "Montserrat_600SemiBold" }}>
        {label.toUpperCase()}
      </Text>
      <Text size="xl" weight="bold" style={{ color: colors.inkStrong, fontFamily: "Montserrat_700Bold", marginTop: 4 }}>
        {value}
      </Text>
      <Text size="xs" style={{ color: colors.inkStrong, opacity: 0.7, fontFamily: "Montserrat_500Medium", marginTop: 2 }}>
        {delta}
      </Text>
    </Box>
  );
}

function ChatsList() {
  const { colors } = useTheme();
  return (
    <Box style={{ backgroundColor: colors.card, borderRadius: 20, padding: 12, marginTop: 12 }}>
      {CHATS.map((c, i) => (
        <View key={c.id}>
          <ChatRow chat={c} />
          {i < CHATS.length - 1 ? <Divider color={colors.cardSubtle} /> : null}
        </View>
      ))}
    </Box>
  );
}

function ChatRow({ chat }: { chat: typeof CHATS[number] }) {
  const { colors } = useTheme();
  const { toast } = useToast();
  return (
    <Pressable
      onPress={() => toast({ title: chat.name, description: chat.preview, variant: "default" })}
      style={({ pressed }: { pressed: boolean }) => ({ opacity: pressed ? 0.6 : 1 })}
    >
      <Flex align="center" gap={3} style={{ padding: 10 }}>
        <Image
          src={chat.avatar}
          alt={chat.name}
          width={44}
          height={44}
          radius="pill"
          fallback={
            <View style={{ width: "100%", height: "100%", backgroundColor: colors.peachDeep, alignItems: "center", justifyContent: "center" }}>
              <RNText style={{ color: "#fff", fontWeight: "700" }}>{chat.name.slice(0, 1)}</RNText>
            </View>
          }
        />
        <View style={{ flex: 1 }}>
          <Text size="sm" weight="semibold" style={{ color: colors.inkStrong, fontFamily: "Montserrat_600SemiBold" }}>
            {chat.name}
          </Text>
          <Text size="xs" style={{ color: colors.inkSoft, marginTop: 2, fontFamily: "Montserrat_400Regular" }}>
            {chat.preview}
          </Text>
        </View>
        {chat.unread ? (
          <View style={{ backgroundColor: colors.peachDeep, paddingHorizontal: 8, paddingVertical: 2, borderRadius: 999 }}>
            <RNText style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}>{chat.unread}</RNText>
          </View>
        ) : null}
      </Flex>
    </Pressable>
  );
}

function SchedulerList() {
  return (
    <Stack direction="vertical" gap={3} style={{ marginTop: 12 }}>
      {REMINDERS.map((ev) => <ReminderCard key={ev.id} ev={ev} />)}
    </Stack>
  );
}

function ReminderCard({ ev }: { ev: typeof REMINDERS[number] }) {
  const { colors } = useTheme();
  const bg = ev.variant === "peach" ? colors.peach : colors.yellow;
  return (
    <Box style={{ backgroundColor: bg, borderRadius: 18, padding: 16 }}>
      <Text size="xs" weight="semibold" style={{ color: colors.inkStrong, opacity: 0.75, fontFamily: "Montserrat_600SemiBold" }}>
        {ev.date}
      </Text>
      <Text size="md" weight="bold" style={{ color: colors.inkStrong, fontFamily: "Montserrat_700Bold", marginTop: 4 }}>
        {ev.title}
      </Text>
      <Text size="xs" style={{ color: colors.inkStrong, opacity: 0.8, fontFamily: "Montserrat_400Regular", marginTop: 4, lineHeight: 18 }}>
        {ev.body}
      </Text>
    </Box>
  );
}

function RoundIconBtn({ children, label }: { children: React.ReactNode; label: string }) {
  const { colors } = useTheme();
  return (
    <Pressable
      accessibilityLabel={label}
      style={({ pressed }: { pressed: boolean }) => ({
        backgroundColor: colors.card,
        width: 40,
        height: 40,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <RNText style={{ fontSize: 16 }}>{children}</RNText>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  center: { flex: 1, alignItems: "center", justifyContent: "center" },
});
