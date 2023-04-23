import { generate as antdGenerate } from '@ant-design/colors'

export const convertArrayToObject = (array: string[]) => Object.fromEntries(array.map((item, index) => [index + 1, item]))

export function generate(color: string, theme: 'default' | 'dark', backgroundColor: string) {
  const array = antdGenerate(color, { theme, backgroundColor })
  return {
    ...convertArrayToObject(array),
    DEFAULT: array[5],
  }
}
