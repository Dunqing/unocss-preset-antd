import { createGenerator, presetUno } from 'unocss'
import { describe, expect, test } from 'vitest'
import presetAntd from '../src'

describe('theme', () => {
  test('basic theme colors', async () => {
    const uno = createGenerator({
      presets: [presetUno(), presetAntd()],
    })

    const themeColors = ['primary', 'success', 'warning', 'error', 'info']
    const steps = ['', ...Array.from({ length: 10 }).map((_, index) => index + 1)]
    const targets = themeColors.flatMap(themeColor =>
      steps.map(step => step ? `text-${themeColor}-${step}` : `text-${themeColor}`),
    )

    const { css } = await uno.generate(targets.join('\n'))
    expect(css).toMatchInlineSnapshot(`
      "/* layer: preflights */
      *,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgba(0,0,0,0);--un-ring-shadow:0 0 rgba(0,0,0,0);--un-shadow-inset: ;--un-shadow:0 0 rgba(0,0,0,0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgba(147,197,253,0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
      /* layer: theme */
      :root{--un-preset-antd-colors-primary-DEFAULT:22, 119, 255;--un-preset-antd-colors-primary-1:230, 244, 255;--un-preset-antd-colors-primary-2:186, 224, 255;--un-preset-antd-colors-primary-3:145, 202, 255;--un-preset-antd-colors-primary-4:105, 177, 255;--un-preset-antd-colors-primary-5:64, 150, 255;--un-preset-antd-colors-primary-6:22, 119, 255;--un-preset-antd-colors-primary-7:9, 88, 217;--un-preset-antd-colors-primary-8:0, 62, 179;--un-preset-antd-colors-primary-9:0, 44, 140;--un-preset-antd-colors-primary-10:0, 29, 102;--un-preset-antd-colors-success-DEFAULT:82, 196, 26;--un-preset-antd-colors-success-1:246, 255, 237;--un-preset-antd-colors-success-2:217, 247, 190;--un-preset-antd-colors-success-3:183, 235, 143;--un-preset-antd-colors-success-4:149, 222, 100;--un-preset-antd-colors-success-5:115, 209, 61;--un-preset-antd-colors-success-6:82, 196, 26;--un-preset-antd-colors-success-7:56, 158, 13;--un-preset-antd-colors-success-8:35, 120, 4;--un-preset-antd-colors-success-9:19, 82, 0;--un-preset-antd-colors-success-10:9, 43, 0;--un-preset-antd-colors-warning-DEFAULT:250, 173, 20;--un-preset-antd-colors-warning-1:255, 251, 230;--un-preset-antd-colors-warning-2:255, 241, 184;--un-preset-antd-colors-warning-3:255, 229, 143;--un-preset-antd-colors-warning-4:255, 214, 102;--un-preset-antd-colors-warning-5:255, 197, 61;--un-preset-antd-colors-warning-6:250, 173, 20;--un-preset-antd-colors-warning-7:212, 136, 6;--un-preset-antd-colors-warning-8:173, 104, 0;--un-preset-antd-colors-warning-9:135, 77, 0;--un-preset-antd-colors-warning-10:97, 52, 0;--un-preset-antd-colors-error-DEFAULT:255, 77, 79;--un-preset-antd-colors-error-1:255, 242, 240;--un-preset-antd-colors-error-2:255, 241, 240;--un-preset-antd-colors-error-3:255, 204, 199;--un-preset-antd-colors-error-4:255, 163, 158;--un-preset-antd-colors-error-5:255, 120, 117;--un-preset-antd-colors-error-6:255, 77, 79;--un-preset-antd-colors-error-7:217, 54, 62;--un-preset-antd-colors-error-8:179, 36, 48;--un-preset-antd-colors-error-9:140, 21, 35;--un-preset-antd-colors-error-10:102, 14, 27;--un-preset-antd-colors-info-DEFAULT:22, 119, 255;--un-preset-antd-colors-info-1:230, 244, 255;--un-preset-antd-colors-info-2:186, 224, 255;--un-preset-antd-colors-info-3:145, 202, 255;--un-preset-antd-colors-info-4:105, 177, 255;--un-preset-antd-colors-info-5:64, 150, 255;--un-preset-antd-colors-info-6:22, 119, 255;--un-preset-antd-colors-info-7:9, 88, 217;--un-preset-antd-colors-info-8:0, 62, 179;--un-preset-antd-colors-info-9:0, 44, 140;--un-preset-antd-colors-info-10:0, 29, 102;}
      .dark{--un-preset-antd-colors-primary-DEFAULT:22, 104, 220;--un-preset-antd-colors-primary-1:17, 26, 44;--un-preset-antd-colors-primary-2:17, 37, 69;--un-preset-antd-colors-primary-3:21, 50, 91;--un-preset-antd-colors-primary-4:21, 65, 126;--un-preset-antd-colors-primary-5:21, 84, 173;--un-preset-antd-colors-primary-6:22, 104, 220;--un-preset-antd-colors-primary-7:60, 137, 232;--un-preset-antd-colors-primary-8:101, 169, 243;--un-preset-antd-colors-primary-9:141, 197, 248;--un-preset-antd-colors-primary-10:183, 220, 250;--un-preset-antd-colors-success-DEFAULT:73, 170, 25;--un-preset-antd-colors-success-1:22, 35, 18;--un-preset-antd-colors-success-2:29, 55, 18;--un-preset-antd-colors-success-3:39, 73, 22;--un-preset-antd-colors-success-4:48, 99, 23;--un-preset-antd-colors-success-5:60, 134, 24;--un-preset-antd-colors-success-6:73, 170, 25;--un-preset-antd-colors-success-7:106, 190, 57;--un-preset-antd-colors-success-8:143, 212, 96;--un-preset-antd-colors-success-9:178, 229, 139;--un-preset-antd-colors-success-10:213, 242, 187;--un-preset-antd-colors-warning-DEFAULT:216, 150, 20;--un-preset-antd-colors-warning-1:43, 33, 17;--un-preset-antd-colors-warning-2:68, 49, 17;--un-preset-antd-colors-warning-3:89, 66, 20;--un-preset-antd-colors-warning-4:124, 89, 20;--un-preset-antd-colors-warning-5:170, 119, 20;--un-preset-antd-colors-warning-6:216, 150, 20;--un-preset-antd-colors-warning-7:232, 179, 57;--un-preset-antd-colors-warning-8:243, 204, 98;--un-preset-antd-colors-warning-9:248, 223, 139;--un-preset-antd-colors-warning-10:250, 237, 181;--un-preset-antd-colors-error-DEFAULT:220, 68, 70;--un-preset-antd-colors-error-1:44, 22, 24;--un-preset-antd-colors-error-2:69, 29, 31;--un-preset-antd-colors-error-3:91, 37, 38;--un-preset-antd-colors-error-4:126, 46, 47;--un-preset-antd-colors-error-5:173, 57, 58;--un-preset-antd-colors-error-6:220, 68, 70;--un-preset-antd-colors-error-7:232, 110, 107;--un-preset-antd-colors-error-8:243, 156, 151;--un-preset-antd-colors-error-9:248, 198, 194;--un-preset-antd-colors-error-10:250, 237, 236;--un-preset-antd-colors-info-DEFAULT:22, 104, 220;--un-preset-antd-colors-info-1:17, 26, 44;--un-preset-antd-colors-info-2:17, 37, 69;--un-preset-antd-colors-info-3:21, 50, 91;--un-preset-antd-colors-info-4:21, 65, 126;--un-preset-antd-colors-info-5:21, 84, 173;--un-preset-antd-colors-info-6:22, 104, 220;--un-preset-antd-colors-info-7:60, 137, 232;--un-preset-antd-colors-info-8:101, 169, 243;--un-preset-antd-colors-info-9:141, 197, 248;--un-preset-antd-colors-info-10:183, 220, 250;}
      /* layer: default */
      .text-error{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-DEFAULT),var(--un-text-opacity));}
      .text-error-1{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-1),var(--un-text-opacity));}
      .text-error-10{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-10),var(--un-text-opacity));}
      .text-error-2{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-2),var(--un-text-opacity));}
      .text-error-3{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-3),var(--un-text-opacity));}
      .text-error-4{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-4),var(--un-text-opacity));}
      .text-error-5{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-5),var(--un-text-opacity));}
      .text-error-6{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-6),var(--un-text-opacity));}
      .text-error-7{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-7),var(--un-text-opacity));}
      .text-error-8{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-8),var(--un-text-opacity));}
      .text-error-9{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-error-9),var(--un-text-opacity));}
      .text-info{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-DEFAULT),var(--un-text-opacity));}
      .text-info-1{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-1),var(--un-text-opacity));}
      .text-info-10{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-10),var(--un-text-opacity));}
      .text-info-2{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-2),var(--un-text-opacity));}
      .text-info-3{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-3),var(--un-text-opacity));}
      .text-info-4{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-4),var(--un-text-opacity));}
      .text-info-5{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-5),var(--un-text-opacity));}
      .text-info-6{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-6),var(--un-text-opacity));}
      .text-info-7{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-7),var(--un-text-opacity));}
      .text-info-8{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-8),var(--un-text-opacity));}
      .text-info-9{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-info-9),var(--un-text-opacity));}
      .text-primary{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-DEFAULT),var(--un-text-opacity));}
      .text-primary-1{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-1),var(--un-text-opacity));}
      .text-primary-10{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-10),var(--un-text-opacity));}
      .text-primary-2{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-2),var(--un-text-opacity));}
      .text-primary-3{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-3),var(--un-text-opacity));}
      .text-primary-4{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-4),var(--un-text-opacity));}
      .text-primary-5{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-5),var(--un-text-opacity));}
      .text-primary-6{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-6),var(--un-text-opacity));}
      .text-primary-7{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-7),var(--un-text-opacity));}
      .text-primary-8{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-8),var(--un-text-opacity));}
      .text-primary-9{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-primary-9),var(--un-text-opacity));}
      .text-success{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-DEFAULT),var(--un-text-opacity));}
      .text-success-1{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-1),var(--un-text-opacity));}
      .text-success-10{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-10),var(--un-text-opacity));}
      .text-success-2{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-2),var(--un-text-opacity));}
      .text-success-3{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-3),var(--un-text-opacity));}
      .text-success-4{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-4),var(--un-text-opacity));}
      .text-success-5{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-5),var(--un-text-opacity));}
      .text-success-6{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-6),var(--un-text-opacity));}
      .text-success-7{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-7),var(--un-text-opacity));}
      .text-success-8{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-8),var(--un-text-opacity));}
      .text-success-9{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-success-9),var(--un-text-opacity));}
      .text-warning{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-DEFAULT),var(--un-text-opacity));}
      .text-warning-1{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-1),var(--un-text-opacity));}
      .text-warning-10{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-10),var(--un-text-opacity));}
      .text-warning-2{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-2),var(--un-text-opacity));}
      .text-warning-3{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-3),var(--un-text-opacity));}
      .text-warning-4{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-4),var(--un-text-opacity));}
      .text-warning-5{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-5),var(--un-text-opacity));}
      .text-warning-6{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-6),var(--un-text-opacity));}
      .text-warning-7{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-7),var(--un-text-opacity));}
      .text-warning-8{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-8),var(--un-text-opacity));}
      .text-warning-9{--un-text-opacity:1;color:rgba(var(--un-preset-antd-colors-warning-9),var(--un-text-opacity));}"`)
  })
})
