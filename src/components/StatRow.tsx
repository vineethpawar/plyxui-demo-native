import { Text, View } from "react-native";
import { BRAND, FONTS } from "../theme";

export function StatRow() {
  return (
    <View style={{ flexDirection: "row", gap: 12 }}>
      <StatCard label="Members" value="142" delta="+18" variant="peach" />
      <StatCard label="Events"  value="7"   delta="this wk" variant="yellow" />
    </View>
  );
}

function StatCard({
  label, value, delta, variant,
}: { label: string; value: string; delta: string; variant: "peach" | "yellow" }) {
  const bg = variant === "peach" ? BRAND.peach : BRAND.yellow;
  return (
    <View style={{ flex: 1, backgroundColor: bg, borderRadius: 18, padding: 16 }}>
      <Text style={{ color: BRAND.inkStrong, opacity: 0.75, fontFamily: FONTS.semibold, fontSize: 11, letterSpacing: 0.6 }}>
        {label.toUpperCase()}
      </Text>
      <Text style={{ color: BRAND.inkStrong, fontFamily: FONTS.bold, fontSize: 28, marginTop: 4 }}>
        {value}
      </Text>
      <Text style={{ color: BRAND.inkStrong, opacity: 0.7, fontFamily: FONTS.medium, fontSize: 11, marginTop: 2 }}>
        {delta}
      </Text>
    </View>
  );
}
