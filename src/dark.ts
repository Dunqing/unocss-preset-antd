import type { Theme } from 'unocss/preset-mini'
import { generate } from './utils'

export interface PresetAntdDarkOptions {
  /**
   * Used to generate dark theme colors
   *
   * @default #141414
   */
  backgroundColor?: string
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

export function dark(options: PresetAntdDarkOptions = {}): Theme {
  const {
    backgroundColor = '#141414',
    primary = '#1677ff',
    success = '#52c41a',
    warning = '#faad14',
    error = '#f5222d',
    info = '#1677ff',
  } = options

  return {
    colors: {
      primary: generate(primary, 'dark', backgroundColor),
      success: generate(success, 'dark', backgroundColor),
      warning: generate(warning, 'dark', backgroundColor),
      error: generate(error, 'dark', backgroundColor),
      info: generate(info, 'dark', backgroundColor),
    },
  }
}

export default dark
