import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-home-solution',
  templateUrl: './home-solution.component.html',
  styleUrls: ['./home-solution.component.scss']
})
export class HomeSolutionComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/home-page/solution/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = .5;
  }

}
