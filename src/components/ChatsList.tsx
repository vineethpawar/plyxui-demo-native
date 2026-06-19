import { Alert, Pressable, View } from "react-native";
import { useTheme } from "@plyxui/styles";
import { Box, Text, Flex, Divider } from "@plyxui/primitives";
import { FONTS, RADIUS, SPACING } from "../theme";
import { CHATS, type ChatPreview } from "../data";
import { Avatar } from "./Avatar";

export function ChatsList() {
  const { colors } = useTheme();
  return (
    <Box style={{ backgroundColor: colors.card, borderRadius: RADIUS.xl, padding: SPACING.md, marginTop: SPACING.md }}>
      {CHATS.map((c, i) => (
        <View key={c.id}>
          <ChatRow chat={c} />
          {i < CHATS.length - 1 ? <Divider color={colors.cardSubtle} inset={10} /> : null}
        </View>
      ))}
    </Box>
  );
}

function ChatRow({ chat }: { chat: ChatPreview }) {
  const { colors } = useTheme();
  return (
    <Pressable
      onPress={() => Alert.alert(chat.name, chat.preview)}
      style={({ pressed }) => ({ opacity: pressed ? 0.6 : 1 })}
    >
      <Flex align="center" gap={3} style={{ padding: SPACING.sm + 2 }}>
        <Avatar uri={chat.avatar} initials={chat.name.slice(0, 1)} />
        <View style={{ flex: 1 }}>
          <Text size="sm" weight="semibold" style={{ color: colors.inkStrong, fontFamily: FONTS.semibold }}>
            {chat.name}
          </Text>
          <Text size="xs" style={{ color: colors.inkSoft, fontFamily: FONTS.regular, marginTop: 2 }}>
            {chat.preview}
          </Text>
        </View>
        {chat.unread ? (
          <View
            style={{
              backgroundColor: colors.peachDeep,
              paddingHorizontal: 8,
              paddingVertical: 2,
              borderRadius: RADIUS.pill,
            }}
          >
            <Text size="xs" weight="bold" style={{ color: "#fff" }}>{chat.unread}</Text>
          </View>
        ) : null}
      </Flex>
    </Pressable>
  );
}
