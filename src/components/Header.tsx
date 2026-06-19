import { Pressable, View } from "react-native";
import { useTheme } from "@plyxui/styles";
import { Text, Flex } from "@plyxui/primitives";
import { FONTS, RADIUS, SPACING } from "../theme";
import { Avatar } from "./Avatar";

export function Header() {
  const { colors } = useTheme();
  return (
    <Flex
      align="center"
      justify="between"
      style={{
        paddingHorizontal: SPACING.lg,
        paddingVertical: SPACING.md,
        backgroundColor: colors.cream,
      }}
    >
      <View>
        <Text size="sm" style={{ color: colors.inkSoft, fontFamily: FONTS.medium }}>
          Good morning,
        </Text>
        <Text size="lg" weight="bold" style={{ color: colors.inkStrong, fontFamily: FONTS.bold }}>
          Mithun Roy
        </Text>
      </View>
      <Flex align="center" gap={2}>
        <RoundIconBtn label="Notifications">🔔</RoundIconBtn>
        <Avatar uri="https://i.pravatar.cc/64?img=14" initials="MR" size={40} />
      </Flex>
    </Flex>
  );
}

function RoundIconBtn({ children, label }: { children: React.ReactNode; label: string }) {
  const { colors } = useTheme();
  return (
    <Pressable
      accessibilityLabel={label}
      style={({ pressed }) => ({
        backgroundColor: colors.card,
        width: 40,
        height: 40,
        borderRadius: RADIUS.pill,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text size="md">{children}</Text>
    </Pressable>
  );
}
