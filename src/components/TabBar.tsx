import { Pressable, Text, View } from "react-native";
import { BRAND, FONTS } from "../theme";

export type TabKey = "chats" | "scheduler";

export function TabBar({ value, onChange }: { value: TabKey; onChange: (v: TabKey) => void }) {
  return (
    <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: BRAND.cardSubtle }}>
      <TabBtn label="Chats" active={value === "chats"} onPress={() => onChange("chats")} />
      <TabBtn label="Scheduler" active={value === "scheduler"} onPress={() => onChange("scheduler")} />
    </View>
  );
}

function TabBtn({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: 14,
        paddingVertical: 10,
        borderBottomWidth: 2,
        borderBottomColor: active ? BRAND.inkStrong : "transparent",
        marginBottom: -1,
      }}
    >
      <Text
        style={{
          color: active ? BRAND.inkStrong : BRAND.inkSoft,
          fontFamily: active ? FONTS.semibold : FONTS.medium,
          fontSize: 14,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
