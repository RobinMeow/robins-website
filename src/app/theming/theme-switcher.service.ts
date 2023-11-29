import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { THEMES } from './themes';
import { isPlatformBrowser } from '@angular/common';

@Injectable({ providedIn: 'root' })
export class ThemeSwitcherService {
  private readonly _THEME_KEY: string = 'current-theme';

  private readonly ALL_THEMES: string[] = [THEMES.DARK, THEMES.LIGHT];

  constructor() {
    const CURRENT_THEME: string | null = localStorage.getItem(this._THEME_KEY);

    if (CURRENT_THEME == null) {
      this.setCurrentTheme(THEMES.DARK);
    }
  }

  setCurrentTheme(themeName: string): void {
    if (!this.isValidThemeName(themeName))
      throw new Error(
        `Tried to set current theme to invalid theme '${themeName}'.`
      );

    localStorage.setItem(this._THEME_KEY, themeName);
  }

  getCurrentTheme(): string {
    return localStorage.getItem(this._THEME_KEY)!;
  }

  isValidThemeName(themeName: string): boolean {
    return this.ALL_THEMES.includes(themeName);
  }
}
