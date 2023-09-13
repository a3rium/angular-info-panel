import { Component, Input, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-rating-slider',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './rating-slider.component.html',
  styleUrls: ['./rating-slider.component.css'],
})
export class RatingSliderComponent {
  @Input() agentRating!: string;
  ratingValue: number = 0;
  sentiment: string = '';
  color: string = '';
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    this.ratingValue = +this.agentRating.split('%', 1);
    this.sentiment = calcSentiment(this.ratingValue);
    this.color = calcColor(this.ratingValue);
  }
}

function calcSentiment(ratingValue: number) {
  let sentiment: string;
  if (ratingValue < 33.333) {
    sentiment = 'sentiment_very_dissatisfied';
  } else if (ratingValue < 66.666) {
    sentiment = 'sentiment_satisfied';
  } else {
    sentiment = 'sentiment_very_satisfied';
  }
  return sentiment;
}

function calcColor(ratingValue: number) {
  let color: string;
  if (ratingValue < 33.333) {
    color = 'red';
  } else if (ratingValue < 66.666) {
    color = 'yellow';
  } else {
    color = 'green';
  }
  return color;
}
