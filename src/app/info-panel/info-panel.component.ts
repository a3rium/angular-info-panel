import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { InsightsTabComponent } from '../insights-tab/insights-tab.component';

@Component({
  selector: 'app-info-panel',
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.css'],
  standalone: true,
  imports: [MatTabsModule, MatIconModule, InsightsTabComponent],
})
export class InfoPanelComponent {}
