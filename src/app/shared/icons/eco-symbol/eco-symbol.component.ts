import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'icon-eco-symbol',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './eco-symbol.component.html',
  styleUrl: './eco-symbol.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EcoSymbolComponent {}
