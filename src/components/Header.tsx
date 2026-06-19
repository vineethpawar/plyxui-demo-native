import { Pressable, Text, View } from "react-native";
import { BRAND, FONTS } from "../theme";
import { Avatar } from "./Avatar";

export function Header() {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 18,
        paddingVertical: 14,
      }}
    >
      <View>
        <Text style={{ color: BRAND.inkSoft, fontFamily: FONTS.medium, fontSize: 13 }}>
          Good morning,
        </Text>
        <Text style={{ color: BRAND.inkStrong, fontFamily: FONTS.bold, fontSize: 18 }}>
          Mithun Roy
        </Text>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
        <RoundIconBtn label="Notifications">🔔</RoundIconBtn>
        <Avatar uri="https://i.pravatar.cc/64?img=14" initials="MR" size={40} />
      </View>
    </View>
  );
}

function RoundIconBtn({ children, label }: { children: React.ReactNode; label: string }) {
  return (
    <Pressable
      accessibilityLabel={label}
      style={({ pressed }) => ({
        backgroundColor: BRAND.card,
        width: 40,
        height: 40,
        borderRadius: 999,
        alignItems: "center",
        justifyContent: "center",
        opacity: pressed ? 0.7 : 1,
      })}
    >
      <Text style={{ fontSize: 16 }}>{children}</Text>
    </Pressable>
  );
}
