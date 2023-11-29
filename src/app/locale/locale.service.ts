import { Injectable } from '@angular/core';
import { Locale } from '@locale';

@Injectable({ providedIn: 'root' })
export class LocaleService {
  // ToDo: load dynamically by searching the locales folder by its files and reading their file endings
  private readonly _locales: Locale[] = [
    { locale: 'de', display: 'Deutsch' },
    { locale: 'en-US', display: 'English' },
  ];

  getLocales(): Locale[] {
    return this._locales;
  }

  changeLocale(locale: string) {
    window.location.href = `/${locale}`;
  }

  // ToDo: locale pipe formatter
}
