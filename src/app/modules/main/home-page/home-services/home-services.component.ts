import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-home-services',
  templateUrl: './home-services.component.html',
  styleUrls: ['./home-services.component.scss']
})
export class HomeServicesComponent implements OnInit {
  cards = [];

  constructor() {
    this.cards = [
      {
        title: 'HOME.ITEM_7_CARDS.CARD_1_TITLE',
        description: 'HOME.ITEM_7_CARDS.CARD_1_DESC',
        imgSrc: '../../../../../assets/icons/cards/card-icon1.svg',
        imgSize: ''
      },
      {
        title: 'HOME.ITEM_7_CARDS.CARD_2_TITLE',
        description: 'HOME.ITEM_7_CARDS.CARD_2_DESC',
        imgSrc: '../../../../../assets/icons/cards/card-icon2.svg',
        imgSize: ''
      },
    ];
  }

  ngOnInit() {
  }

}
