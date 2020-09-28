import {Component, OnInit} from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-home-what-is',
  templateUrl: './home-what-is.component.html',
  styleUrls: ['./home-what-is.component.scss']
})
export class HomeWhatIsComponent implements OnInit {

  options: AnimationOptions = {
    path: '/assets/animations/home-page/what-is/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.2;
  }
}
