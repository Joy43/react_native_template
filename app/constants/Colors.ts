export const Colors = {
  // ── Primary Backgrounds ────────────────────────────────────────────────────
  primaryDark:  '#0A0E27',   // main bg
  secondaryDark: '#1A1F3A',  // card / surface bg

  // ── Text ──────────────────────────────────────────────────────────────────
  textLight:     '#FFFFFF',  // primary text on dark bg
  textSecondary: '#A0A8B8',  // muted / subtitle text

  // ── Accent ────────────────────────────────────────────────────────────────
  gold:          '#E8B923',  // gold accent / CTA

  // ── Status ────────────────────────────────────────────────────────────────
  success:       '#10B981',  // online, success states
  error:         '#EF4444',  // destructive / error
  neutral:       '#6B7280',  // neutral gray

  // ── Aliases kept for backward compat ──────────────────────────────────────
  light: {
    primary:      '#0A0E27',
    primaryDark:  '#0A0E27',
    primaryLight: '#6B7280',
    background:   '#F9FAFC',
    surface:      '#FFFFFF',
    card:         '#FFFFFF',
    text: {
      primary:   '#0A0E27',
      secondary: '#6B7280',
      tertiary:  '#6B7280',
      inverse:   '#FFFFFF',
    },
    border: {
      light:  '#FFFFFF',
      medium: '#F9FAFC',
      dark:   '#6B7280',
    },
    success:  '#10B981',
    warning:  '#E8B923',
    error:    '#EF4444',
    rating:   '#E8B923',
    overlay:  'rgba(10, 14, 39, 0.5)',
  },

  dark: {
    primary:      '#E8B923',
    primaryDark:  '#E8B923',
    primaryLight: '#A0A8B8',
    background:   '#0A0E27',
    surface:      '#1A1F3A',
    card:         '#1A1F3A',
    text: {
      primary:   '#FFFFFF',
      secondary: '#A0A8B8',
      tertiary:  '#A0A8B8',
      inverse:   '#0A0E27',
    },
    border: {
      light:  '#1A1F3A',
      medium: '#0A0E27',
      dark:   '#A0A8B8',
    },
    success:  '#10B981',
    warning:  '#E8B923',
    error:    '#EF4444',
    rating:   '#E8B923',
    overlay:  'rgba(10, 14, 39, 0.7)',
  },
} as const;

export type ColorScheme = 'light' | 'dark';