import { useState } from "react";
import { View } from "react-native";
import { useTheme } from "@plyxui/styles";
import { Image, Text } from "@plyxui/primitives";
import { RADIUS } from "../theme";

export function Avatar({ uri, initials, size = 44 }: { uri: string; initials: string; size?: number }) {
  const { colors } = useTheme();
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: RADIUS.pill,
          backgroundColor: colors.peachDeep,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700", fontSize: size * 0.32 }}>{initials}</Text>
      </View>
    );
  }

  return (
    <Image
      src={uri}
      alt={initials}
      width={size}
      height={size}
      radius="pill"
      fallback={
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: colors.peachDeep,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "700", fontSize: size * 0.32 }}>{initials}</Text>
        </View>
      }
    />
  );
}
