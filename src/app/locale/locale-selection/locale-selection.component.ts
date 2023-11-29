import { CommonModule, UpperCasePipe } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  LOCALE_ID,
  inject,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { Locale, LocaleService } from '@locale';

@Component({
  selector: 'locale-locale-selection',
  standalone: true,
  imports: [CommonModule, MatMenuModule, MatButtonModule],
  templateUrl: './locale-selection.component.html',
  styleUrl: './locale-selection.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class LocaleSelectionComponent {
  protected readonly LOCALES: Locale[];
  protected readonly _currentLocale = inject(LOCALE_ID);
  protected readonly localeService = inject(LocaleService);

  constructor() {
    this.LOCALES = this.localeService.getLocales();

    let hasDash: boolean = this._currentLocale.indexOf('-') != -1;
    if (hasDash) {
      this._currentLocale = this._currentLocale.substring(
        0,
        this._currentLocale.length - 3
      ); // truncates -EN at the end
    }
  }

  protected onLocaleClick(locale: string): void {
    this.localeService.changeLocale(locale);
  }
}
