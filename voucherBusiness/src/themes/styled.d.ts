import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string
      marine: string
      black: string
      olive_light: string
      olive: string
      rosy_brown: string
      steel_blue: string
      brown: string
      chocolate: string
      brown_light: string
      white: string
      grey: {
        '50': string
        '100': string
        '200': string
        '400': string
        '500': string
        '600': string
        '700': string
        '800': string
        '900': string
      }
      error: {
        dark: string
        medium: string
        light: string
      }
    }
    fonts: {
      sizes: {
        small: number
        xSmall: number
        medium: number
        xMedium: number
        large: number
        xLarge: number
        extra: number
        xExtra: number
      }
      family: {
        apercuLight: 'Apercu-Light'
        apercuRegular: 'Apercu-Regular'
        apercuMedium: 'Apercu-Medium'
        apercuBold: 'Apercu-Bold'
        neueMontrealLight: 'NeueMontreal-Light'
        neueMontrealRegular: 'NeueMontreal-Regular'
        neueMontrealMedium: 'NeueMontreal-Medium'
        neueMontrealBold: 'NeueMontreal-Bold'
      }
      lineHeight: {
        large: number
        medium: number
        small: number
      }
    }
  }
}
