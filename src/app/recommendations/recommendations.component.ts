import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-recommendations',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css'],
})
export class RecommendationsComponent {
  @Input() recommendations!: string;
}
