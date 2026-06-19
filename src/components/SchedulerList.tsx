import { Text, View } from "react-native";
import { BRAND, FONTS } from "../theme";
import { REMINDERS, type Reminder } from "../data";

export function SchedulerList() {
  return (
    <View style={{ marginTop: 12, gap: 12 }}>
      {REMINDERS.map((ev) => (
        <ReminderCard key={ev.id} ev={ev} />
      ))}
    </View>
  );
}

function ReminderCard({ ev }: { ev: Reminder }) {
  const bg = ev.variant === "peach" ? BRAND.peach : BRAND.yellow;
  return (
    <View style={{ backgroundColor: bg, borderRadius: 18, padding: 16 }}>
      <Text style={{ color: BRAND.inkStrong, opacity: 0.75, fontFamily: FONTS.semibold, fontSize: 11 }}>
        {ev.date}
      </Text>
      <Text style={{ color: BRAND.inkStrong, fontFamily: FONTS.bold, fontSize: 16, marginTop: 4 }}>
        {ev.title}
      </Text>
      <Text style={{ color: BRAND.inkStrong, opacity: 0.8, fontFamily: FONTS.regular, fontSize: 12, marginTop: 4, lineHeight: 18 }}>
        {ev.body}
      </Text>
    </View>
  );
}
