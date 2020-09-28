import { Component, OnInit } from '@angular/core';
import {AnimationOptions} from 'ngx-lottie';

@Component({
  selector: 'app-contact-top',
  templateUrl: './contact-top.component.html',
  styleUrls: ['./contact-top.component.scss']
})
export class ContactTopComponent implements OnInit {


  options: AnimationOptions = {
    path: '/assets/animations/contact-us/top/data.json'
  };

  constructor() {
  }

  ngOnInit() {
  }

  animationCreated(animationItem: any): void {
    animationItem.playSpeed = 0.7;
  }

}
