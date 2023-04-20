import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { presetTheme } from 'unocss-preset-theme'
import { light } from './light'
import { dark } from './dark'

export interface PresetAntdOptions {
  /**
   * Used to generate Base colors
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
   * @default #f5222d
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
    lightBackgroundColor = '#ffffff',
    darkBackgroundColor = '#141414',
    primary = '#1677ff',
    success = '#52c41a',
    warning = '#faad14',
    error = '#f5222d',
    info = '#1677ff',
  } = options

  return presetTheme<Theme>({
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
