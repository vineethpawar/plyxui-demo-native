/**
 * Brand tokens + font family map for the demo. Mirrors what
 * @plyxui/styles + @plyxui/core would expose via useTheme +
 * colorTokens — but as a static record, so no React context is
 * involved and the Snackager dedup issue can't bite.
 *
 * Swap to `import { useTheme } from "@plyxui/styles"` once
 * @plyxui/* @0.2.2+ propagates through Snackager (the globalThis
 * singleton fix lands then).
 */
export const BRAND = {
  cream:        "#FAF3EC",
  card:         "#FFFFFF",
  cardSubtle:   "#F6EFE8",
  peach:        "#F8C9C0",
  peachDeep:    "#F0AA9E",
  yellow:       "#F6E27A",
  inkStrong:    "#1F1A17",
  inkSoft:      "#7A716A",
};

export const FONTS = {
  regular:  "Montserrat_400Regular",
  medium:   "Montserrat_500Medium",
  semibold: "Montserrat_600SemiBold",
  bold:     "Montserrat_700Bold",
};
