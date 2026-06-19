import { Alert, Pressable, Text, View } from "react-native";
import { BRAND, FONTS } from "../theme";
import { CHATS, type ChatPreview } from "../data";
import { Avatar } from "./Avatar";

export function ChatsList() {
  return (
    <View style={{ backgroundColor: BRAND.card, borderRadius: 20, padding: 12, marginTop: 12 }}>
      {CHATS.map((c, i) => (
        <View key={c.id}>
          <ChatRow chat={c} />
          {i < CHATS.length - 1 ? (
            <View style={{ height: 1, backgroundColor: BRAND.cardSubtle, marginHorizontal: 10 }} />
          ) : null}
        </View>
      ))}
    </View>
  );
}

function ChatRow({ chat }: { chat: ChatPreview }) {
  return (
    <Pressable
      onPress={() => Alert.alert(chat.name, chat.preview)}
      style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
    >
      <View style={{ flexDirection: "row", alignItems: "center", gap: 12, padding: 10 }}>
        <Avatar uri={chat.avatar} initials={chat.name.slice(0, 1)} />
        <View style={{ flex: 1 }}>
          <Text style={{ color: BRAND.inkStrong, fontFamily: FONTS.semibold, fontSize: 14 }}>
            {chat.name}
          </Text>
          <Text style={{ color: BRAND.inkSoft, fontFamily: FONTS.regular, fontSize: 12, marginTop: 2 }}>
            {chat.preview}
          </Text>
        </View>
        {chat.unread ? (
          <View
            style={{
              backgroundColor: BRAND.peachDeep,
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: 999,
            }}
          >
            <Text style={{ color: "#fff", fontSize: 11, fontWeight: "700" }}>{chat.unread}</Text>
          </View>
        ) : null}
      </View>
    </Pressable>
  );
}
