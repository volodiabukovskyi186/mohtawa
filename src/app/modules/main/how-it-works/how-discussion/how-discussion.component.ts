import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-how-discussion',
  templateUrl: './how-discussion.component.html',
  styleUrls: ['./how-discussion.component.scss']
})
export class HowDiscussionComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/how-it/discussion/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 1;
  }

}
