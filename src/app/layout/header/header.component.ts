import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject,
} from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDrawer, MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { LanguageSelectionComponent } from 'src/app/language-selection/language-selection.component';
import { MatSnackBarModule, MatSnackBar } from '@angular/material/snack-bar';
import { LikeButtonComponent } from '@likes';
import { THEMES, ThemeSwitcherService } from '@theming';

@Component({
  selector: 'layout-header',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    RouterModule,
    MatMenuModule,
    LanguageSelectionComponent,
    NgOptimizedImage,
    MatSnackBarModule,
    LikeButtonComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly _themeSwitcher = inject(ThemeSwitcherService);
  private readonly _snackBar = inject(MatSnackBar);

  @Input({ required: true }) drawer!: MatDrawer;

  protected toggleTheme(matIcon: MatIcon) {
    const IS_DARK_MODE: boolean =
      this._themeSwitcher.getCurrentTheme() == THEMES.DARK;

    if (IS_DARK_MODE) {
      matIcon.fontIcon = 'dark_mode';
      this._themeSwitcher.setCurrentTheme(THEMES.LIGHT);
    } else {
      matIcon.fontIcon = 'light_mode';
      this._themeSwitcher.setCurrentTheme(THEMES.DARK);
    }
  }
}
