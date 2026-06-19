import { Pressable, View } from "react-native";
import { useTheme } from "@plyxui/styles";
import { Text } from "@plyxui/primitives";
import { FONTS, SPACING } from "../theme";

export type TabKey = "chats" | "scheduler";

export function TabBar({ value, onChange }: { value: TabKey; onChange: (v: TabKey) => void }) {
  const { colors } = useTheme();
  return (
    <View style={{ flexDirection: "row", borderBottomWidth: 1, borderBottomColor: colors.cardSubtle }}>
      <TabBtn label="Chats" active={value === "chats"} onPress={() => onChange("chats")} />
      <TabBtn label="Scheduler" active={value === "scheduler"} onPress={() => onChange("scheduler")} />
    </View>
  );
}

function TabBtn({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={onPress}
      style={{
        paddingHorizontal: SPACING.md + 2,
        paddingVertical: SPACING.sm + 2,
        borderBottomWidth: 2,
        borderBottomColor: active ? colors.inkStrong : "transparent",
        marginBottom: -1,
      }}
    >
      <Text
        size="sm"
        style={{
          color: active ? colors.inkStrong : colors.inkSoft,
          fontFamily: active ? FONTS.semibold : FONTS.medium,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
}
