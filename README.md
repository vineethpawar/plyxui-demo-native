# plyxui-demo-native

The React Native sibling of [plyxui-demo](https://github.com/vineethpawar/plyxui-demo). Same dashboard language — cream + peach + yellow, Montserrat — re-shaped for a phone. Every UI element is from `@plyxui/*`; Metro picks the `.native.tsx` variants automatically.

## Live

- **Expo Snack** (browser preview + QR for device, SDK 54): https://snack.expo.dev/v3K5EDUQ-Ns1I7H2Pv329

> The Snack is a snapshot. If you push changes here and want them reflected, re-run the Snack save API or paste the latest [`App.tsx`](App.tsx) + [`package.json`](package.json) into a fresh Snack at https://snack.expo.dev.

## Run locally

```bash
git clone https://github.com/vineethpawar/plyxui-demo-native
cd plyxui-demo-native
npm install
npx expo start
# scan the QR code with Expo Go (iOS / Android) or hit `w` for the web preview
```

## What's here

Single-file demo. Mobile-shaped — phones don't have sidebars — so the sidebar from the web demo becomes:

- A **header** with greeting + bell + avatar
- A **stats row** (two cards: members, events)
- A **Tabs** primitive switching between Chats and Scheduler

| Where | What | From |
|---|---|---|
| Theme + brand palette | `ThemeProvider`, `useTheme`, `registerColorTokens` | `@plyxui/styles`, `@plyxui/core` |
| Stats + cards + chat rows | `Box`, `Text`, `Stack`, `Flex`, `Image`, `Divider` | `@plyxui/primitives` |
| Tabs switch | `Tabs`, `TabList`, `Tab`, `TabPanel` | `@plyxui/comps` |
| Tap-to-toast feedback | `useToast`, `Toaster` | `@plyxui/hooks`, `@plyxui/comps` |
| Typography | `@expo-google-fonts/montserrat` | Expo |

Same import paths as the web demo, same `useTheme()` token access. The only diff is Metro resolves `.native.tsx` over `.tsx`.
