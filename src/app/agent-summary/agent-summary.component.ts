import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { RatingSliderComponent } from '../rating-slider/rating-slider.component';
import { AgentSummary } from '../shared/models/AgentSummary';

@Component({
  selector: 'app-agent-summary',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, RatingSliderComponent],
  templateUrl: './agent-summary.component.html',
  styleUrls: ['./agent-summary.component.css'],
})
export class AgentSummaryComponent {
  @Input() agentSummary!: AgentSummary;
}
