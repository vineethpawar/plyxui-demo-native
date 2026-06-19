import { useTheme } from "@plyxui/styles";
import { Box, Text, Stack } from "@plyxui/primitives";
import { FONTS, RADIUS, SPACING } from "../theme";

export function StatRow() {
  return (
    <Stack direction="horizontal" gap={3}>
      <StatCard label="Members" value="142" delta="+18" variant="peach" />
      <StatCard label="Events"  value="7"   delta="this wk" variant="yellow" />
    </Stack>
  );
}

function StatCard({
  label, value, delta, variant,
}: { label: string; value: string; delta: string; variant: "peach" | "yellow" }) {
  const { colors } = useTheme();
  const bg = variant === "peach" ? colors.peach : colors.yellow;
  return (
    <Box style={{ flex: 1, backgroundColor: bg, borderRadius: RADIUS.lg, padding: SPACING.lg }}>
      <Text size="xs" weight="semibold" style={{ color: colors.inkStrong, opacity: 0.75, fontFamily: FONTS.semibold, letterSpacing: 0.6 }}>
        {label.toUpperCase()}
      </Text>
      <Text size="xl" weight="bold" style={{ color: colors.inkStrong, fontFamily: FONTS.bold, marginTop: 4 }}>
        {value}
      </Text>
      <Text size="xs" style={{ color: colors.inkStrong, opacity: 0.7, fontFamily: FONTS.medium, marginTop: 2 }}>
        {delta}
      </Text>
    </Box>
  );
}
