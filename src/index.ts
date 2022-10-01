import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'

export interface PresetAntd {
}

export const presetTheme = <T extends Theme = Theme>(options: PresetAntd): Preset<T> => {
  const {} = options
  return {
    name: '@unocss/preset-theme',
  }
}

export default presetTheme
