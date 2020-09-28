import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public closedMenu = true;

  constructor() {
  }

  ngOnInit() {
  }

  isOpenedMenu(value) {
    return this.closedMenu = value;
  }

}
