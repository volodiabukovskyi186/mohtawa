import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-home-problem',
  templateUrl: './home-problem.component.html',
  styleUrls: ['./home-problem.component.scss']
})
export class HomeProblemComponent implements OnInit {
  options: AnimationOptions = {
    path: '/assets/animations/home-page/test2/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.3;
  }
}
