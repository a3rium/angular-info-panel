import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AiSummaryComponent } from '../ai-summary/ai-summary.component';
import { AgentSummaryComponent } from '../agent-summary/agent-summary.component';
import { AiRepliesComponent } from '../ai-replies/ai-replies.component';
import { RecommendationsComponent } from '../recommendations/recommendations.component';
import data from 'src/app/data/insight.json';
import { InsightData } from '../shared/models/InsightData';

@Component({
  selector: 'app-insights-tab',
  standalone: true,
  imports: [
    CommonModule,
    AiSummaryComponent,
    AgentSummaryComponent,
    AiRepliesComponent,
    RecommendationsComponent,
  ],
  templateUrl: './insights-tab.component.html',
  styleUrls: ['./insights-tab.component.css'],
})
export class InsightsTabComponent {
  insightData: InsightData = data;
  inputData: string = JSON.stringify(this.insightData, null, 2);

  updateInput(value: string) {
    this.inputData = value;
  }

  changeInsightData() {
    console.log(this.inputData);
    if (this.inputData != '') this.insightData = JSON.parse(this.inputData);
  }
}
