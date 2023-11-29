import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'likes-like-thanks',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './like-thanks.component.html',
  styleUrls: ['./like-thanks.component.scss', '../like-snackbar.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LikeThanksComponent {}
