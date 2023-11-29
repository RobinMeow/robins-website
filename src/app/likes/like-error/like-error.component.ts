import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarRef } from '@angular/material/snack-bar';

@Component({
  selector: 'likes-like-error',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './like-error.component.html',
  styleUrls: ['./like-error.component.scss', '../like-snackbar.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeErrorComponent {
  protected readonly snackBarRef = inject(MatSnackBarRef);
}
