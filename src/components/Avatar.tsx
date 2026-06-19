import { useState } from "react";
import { Image, Text, View } from "react-native";
import { BRAND } from "../theme";

export function Avatar({ uri, initials, size = 44 }: { uri: string; initials: string; size?: number }) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <View
        style={{
          width: size,
          height: size,
          borderRadius: 999,
          backgroundColor: BRAND.peachDeep,
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
      source={{ uri }}
      onError={() => setFailed(true)}
      style={{ width: size, height: size, borderRadius: 999 }}
    />
  );
}
