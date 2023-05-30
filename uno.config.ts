import { defineConfig, presetTypography, presetWind, presetWebFonts } from 'unocss'

export default defineConfig({
  theme: {
    colors: {
      primary: '#C5E2B9',
    }
  },
  presets: [
    presetWind(),
    presetTypography(),
    presetWebFonts({
      provider: 'bunny',
      fonts: {
        sans: ['Open Sans', 'sans-serif'],
      },
    })
  ],
})