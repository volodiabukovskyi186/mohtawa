import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-how-research',
  templateUrl: './how-research.component.html',
  styleUrls: ['./how-research.component.scss']
})
export class HowResearchComponent implements OnInit {


  options: AnimationOptions = {
    path: '/assets/animations/how-it/research/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.7;
  }
}
