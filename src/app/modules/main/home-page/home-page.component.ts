import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public closedMenu = true;
    lang: any ;
  constructor() {
  }

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
    console.log(this.lang);
  }

  isOpenedMenu(value) {
    return this.closedMenu = value;
  }
}
