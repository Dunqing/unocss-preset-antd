import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { type PresetThemeOptions, presetTheme } from 'unocss-preset-theme'
import { light } from './light'
import { dark } from './dark'

export interface PresetAntdOptions extends Omit<PresetThemeOptions<Theme>, 'theme'> {
  /**
   * Used to generate light colors
   *
   * @default #ffffff
   */
  lightBackgroundColor?: string
  /**
   * Used to generate dark theme colors
   *
   * @default #141414
   */
  darkBackgroundColor?: string
  /**
   * Base primary color
   *
   * @default #1677ff
   */
  primary?: string
  /**
   * Base success color
   *
   * @default #52c41a
   */
  success?: string
  /**
   * Base warning color
   *
   * @default #faad14
   */
  warning?: string
  /**
   * Base error color
   *
   * @default #ff4d4f
   */
  error?: string
  /**
   * Base info color
   *
   * @default #1677ff
   */
  info?: string
}

export function presetAntd(options: PresetAntdOptions = {}): Preset<Theme> {
  const {
    prefix = '--un-preset-antd',
    selectors,
    lightBackgroundColor = '#ffffff',
    darkBackgroundColor = '#141414',
    primary = '#1677ff',
    success = '#52c41a',
    warning = '#faad14',
    error = '#ff4d4f',
    info = '#1677ff',
  } = options

  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: light({
        backgroundColor: lightBackgroundColor,
        primary,
        success,
        warning,
        error,
        info,
      }),
      dark: dark({
        backgroundColor: darkBackgroundColor,
        primary,
        success,
        warning,
        error,
        info,
      }),
    },
  })
}

export default presetAntd
