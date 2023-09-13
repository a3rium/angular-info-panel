import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatChipsModule } from '@angular/material/chips';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-ai-replies',
  standalone: true,
  imports: [CommonModule, MatChipsModule, MatCardModule],
  templateUrl: './ai-replies.component.html',
  styleUrls: ['./ai-replies.component.css'],
})
export class AiRepliesComponent {
  @Input() aiReplies!: string[];
}
