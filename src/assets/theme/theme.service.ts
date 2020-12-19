import { Injectable } from '@angular/core';
import { ThemeModel, lightTheme, darkTheme } from './theme';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  colors: ThemeModel;
  constructor() {}

  // Setting application theme based on tenant
  setThemeColor(variation: 'light' | 'dark') {
    if (variation === 'light') {
      this.colors = lightTheme;
    } else {
      this.colors = darkTheme;
    }

    for (const key in this.colors) {
      if (!this.colors.hasOwnProperty(key)) continue;

      this.makeCSSVariables(this.colors[key], key);
    }
  }

  // Setting color variables for material theme
  private makeCSSVariables(color: string, colorName: string) {
    const hsl = this.hexToHSL(color);

    const root = document.documentElement;

    root.style.setProperty(`--${colorName}-hue`, `${hsl.hue}`);
    root.style.setProperty(`--${colorName}-saturation`, `${hsl.saturation}`);
    root.style.setProperty(`--${colorName}-luminosity`, `${hsl.luminosity}`);
  }

  // Converts HEX value to RGB value
  private hexToRGB(hex: string, usedByHSL?: boolean) {
    let r;
    let g;
    let b;

    // 3 digits -- (#f00 = red)
    if (hex.length === 4) {
      r = '0x' + hex[1] + hex[1];
      g = '0x' + hex[2] + hex[2];
      b = '0x' + hex[3] + hex[3];

      // 6 digits -- (#ff0000 = red)
    } else if (hex.length === 7) {
      r = '0x' + hex[1] + hex[2];
      g = '0x' + hex[3] + hex[4];
      b = '0x' + hex[5] + hex[6];
    }

    return {
      red: usedByHSL ? r : +r,
      green: usedByHSL ? g : +g,
      blue: usedByHSL ? b : +b,
    };
  }

  // Converts HEX value to HSL value
  private hexToHSL(hex) {
    // Convert hex to RGB first
    let { red, green, blue } = this.hexToRGB(hex, true);

    // Then to HSL
    red /= 255;
    green /= 255;
    blue /= 255;

    const cmin = Math.min(red, green, blue);

    const cmax = Math.max(red, green, blue);

    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) {
      h = 0;
    } else if (cmax === red) {
      h = ((green - blue) / delta) % 6;
    } else if (cmax === green) {
      h = (blue - red) / delta + 2;
    } else {
      h = (red - green) / delta + 4;
    }

    h = Math.round(h * 60);

    if (h < 0) {
      h += 360;
    }

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { hue: h, saturation: s, luminosity: l };
  }
}
