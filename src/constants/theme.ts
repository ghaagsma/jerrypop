import {
  BLACK,
  THEME_BLUE,
  THEME_CYAN,
  THEME_GREEN,
  THEME_LIGHT_GREEN,
  THEME_ORANGE,
  THEME_PINK,
  THEME_PURPLE,
  THEME_YELLOW,
  WHITE,
} from './color';
import type { Theme } from '../types/theme';

interface Themes {
  [themeName: string]: Theme;
}

export const THEME: Themes = {
  // PB&J
  BLUE_PINK: {
    mainThemeDark: THEME_BLUE,
    mainThemeMedium: THEME_PINK,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: WHITE,
  },
  PURPLE_GREEN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_LIGHT_GREEN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Habanero Ranch
  CYAN_YELLOW: {
    mainThemeDark: THEME_CYAN,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: BLACK,
    mainThemeTextOnMedium: BLACK,
  },
  PINK_PURPLE: {
    mainThemeDark: THEME_PINK,
    mainThemeMedium: THEME_PURPLE,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: WHITE,
  },
  BLUE_ORANGE: {
    mainThemeDark: THEME_BLUE,
    mainThemeMedium: THEME_ORANGE,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  // Rosemary Lemon Pepper
  GREEN_YELLOW: {
    mainThemeDark: THEME_GREEN,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  ORANGE_PURPLE: {
    mainThemeDark: THEME_ORANGE,
    mainThemeMedium: THEME_PURPLE,
    mainThemeTextOnDark: BLACK,
    mainThemeTextOnMedium: WHITE,
  },
  PINK_YELLOW: {
    mainThemeDark: THEME_PINK,
    mainThemeMedium: THEME_YELLOW,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
  PURPLE_CYAN: {
    mainThemeDark: THEME_PURPLE,
    mainThemeMedium: THEME_CYAN,
    mainThemeTextOnDark: WHITE,
    mainThemeTextOnMedium: BLACK,
  },
};

/**
 * Ordered to ensure each rotation introduces two new colors.
 */
export const THEMES = [
  THEME.BLUE_PINK,
  THEME.PURPLE_GREEN,
  THEME.CYAN_YELLOW,
  THEME.PINK_PURPLE,
  THEME.BLUE_ORANGE,
  THEME.GREEN_YELLOW,
  THEME.ORANGE_PURPLE,
  THEME.PINK_YELLOW,
  THEME.PURPLE_CYAN,
];