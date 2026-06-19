/**
 * plyxui-demo-native — entry only.
 *
 * Wraps the tree in <ThemeProvider> so any descendant can call
 * useTheme(). No useTheme() call lives in this file — the dashboard
 * screen below mounts INSIDE the provider, so the hook is always
 * called under it.
 *
 *   App.tsx
 *     └─ <ThemeProvider>
 *          └─ <DashboardScreen />   ← uses useTheme() (and composes
 *                                     Header / StatRow / TabBar etc.,
 *                                     each of which uses useTheme() too)
 */
import "./src/theme";                       // side-effect: registerColorTokens
import { ThemeProvider } from "@plyxui/styles";
import { DashboardScreen } from "./src/screens/DashboardScreen";

export default function App() {
  return (
    <ThemeProvider>
      <DashboardScreen />
    </ThemeProvider>
  );
}
