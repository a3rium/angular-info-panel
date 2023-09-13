import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ai-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './ai-summary.component.html',
  styleUrls: ['./ai-summary.component.css'],
})
export class AiSummaryComponent {
  @Input() aiSummary!: string;
}
