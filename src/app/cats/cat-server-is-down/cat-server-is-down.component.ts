import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'cats-cat-server-is-down',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cat-server-is-down.component.html',
  styleUrl: './cat-server-is-down.component.scss',
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatServerIsDownComponent {
  private readonly _snackBarRef = inject(MatSnackBarRef);
}
