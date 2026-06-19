/**
 * Brand palette + font family map for the demo.
 *
 * One static object every component imports directly. No
 * `registerColorTokens()` call — that's the imperative pattern
 * we're replacing. Components reach for `BRAND.peach` straight
 * from this file.
 *
 * For the plyxui-themed primitives (Box, Text, Stack…), we also
 * register these tokens at startup so `useTheme().colors.peach`
 * resolves — but no component depends on that hook; everything
 * here can be consumed statically.
 */
import { registerColorTokens } from "@plyxui/core";

export const BRAND = {
  cream:       "#FAF3EC",
  card:        "#FFFFFF",
  cardSubtle:  "#F6EFE8",
  peach:       "#F8C9C0",
  peachDeep:   "#F0AA9E",
  yellow:      "#F6E27A",
  inkStrong:   "#1F1A17",
  inkSoft:     "#7A716A",
};

export const FONTS = {
  regular:  "Montserrat_400Regular",
  medium:   "Montserrat_500Medium",
  semibold: "Montserrat_600SemiBold",
  bold:     "Montserrat_700Bold",
};

export const RADIUS = {
  sm:  8,
  md:  12,
  lg:  18,
  xl:  20,
  pill: 999,
};

export const SPACING = {
  xs: 4, sm: 8, md: 12, lg: 16, xl: 20, xxl: 24,
};

// Tell plyxui's useTheme about the brand colors so any primitive that
// reads from useTheme().colors picks them up. Components in this demo
// can still go directly to BRAND.* for non-themed inline styles.
registerColorTokens({
  cream:      { light: BRAND.cream,      dark: "#161412" },
  card:       { light: BRAND.card,       dark: "#1F1C19" },
  cardSubtle: { light: BRAND.cardSubtle, dark: "#26221E" },
  peach:      { light: BRAND.peach,      dark: "#5B3A35" },
  peachDeep:  { light: BRAND.peachDeep,  dark: "#A06A60" },
  yellow:     { light: BRAND.yellow,     dark: "#806F2C" },
  inkStrong:  { light: BRAND.inkStrong,  dark: "#F5F1EC" },
  inkSoft:    { light: BRAND.inkSoft,    dark: "#A39B92" },
});
