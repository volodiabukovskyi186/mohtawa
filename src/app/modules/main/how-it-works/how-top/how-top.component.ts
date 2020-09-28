import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-how-top',
  templateUrl: './how-top.component.html',
  styleUrls: ['./how-top.component.scss']
})
export class HowTopComponent implements OnInit {


  options: AnimationOptions = {
    path: '/assets/animations/how-it/top/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.5;
  }

}
