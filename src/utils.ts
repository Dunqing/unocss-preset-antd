import { generate as antdGenerate } from '@ant-design/colors'

export const convertArrayToObject = (array: string[]) => Object.fromEntries(array.map((item, index) => [index + 1, item]))

export const generate = (color: string, theme: 'default' | 'dark', backgroundColor: string) => convertArrayToObject(antdGenerate(color, { theme, backgroundColor }))
