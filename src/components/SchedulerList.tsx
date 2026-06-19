import { useTheme } from "@plyxui/styles";
import { Box, Text, Stack } from "@plyxui/primitives";
import { FONTS, RADIUS, SPACING } from "../theme";
import { REMINDERS, type Reminder } from "../data";

export function SchedulerList() {
  return (
    <Stack direction="vertical" gap={3} style={{ marginTop: SPACING.md }}>
      {REMINDERS.map((ev) => <ReminderCard key={ev.id} ev={ev} />)}
    </Stack>
  );
}

function ReminderCard({ ev }: { ev: Reminder }) {
  const { colors } = useTheme();
  const bg = ev.variant === "peach" ? colors.peach : colors.yellow;
  return (
    <Box style={{ backgroundColor: bg, borderRadius: RADIUS.lg, padding: SPACING.lg }}>
      <Text size="xs" weight="semibold" style={{ color: colors.inkStrong, opacity: 0.75, fontFamily: FONTS.semibold }}>
        {ev.date}
      </Text>
      <Text size="md" weight="bold" style={{ color: colors.inkStrong, fontFamily: FONTS.bold, marginTop: 4 }}>
        {ev.title}
      </Text>
      <Text size="xs" style={{ color: colors.inkStrong, opacity: 0.8, fontFamily: FONTS.regular, marginTop: 4, lineHeight: 18 }}>
        {ev.body}
      </Text>
    </Box>
  );
}
