import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-how-implementation',
  templateUrl: './how-implementation.component.html',
  styleUrls: ['./how-implementation.component.scss']
})
export class HowImplementationComponent implements OnInit {


  options: AnimationOptions = {
    path: '/assets/animations/how-it/implemen/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.7;
  }

}
