import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-how-assessment',
  templateUrl: './how-assessment.component.html',
  styleUrls: ['./how-assessment.component.scss']
})
export class HowAssessmentComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/how-it/assessment/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.2;
  }

}
