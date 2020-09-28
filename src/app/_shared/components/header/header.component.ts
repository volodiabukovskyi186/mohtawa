import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output('isOpenedMenu') menuToggle = new EventEmitter();
  public isOpenedMenu = true;
  public headerLinks: any = [];
  public href = '';
  lang: string;
  constructor(public translate: TranslateService) {
    this.headerLinks = [
      {
        title: 'HEADER.HOME',
        link: ''
      },
      {
        title: 'HEADER.HOW_IT_WORKS',
        link: '/how-it-works'
      },
      {
        title: 'HEADER.ABOUT_US',
        link: '/about-us'
      },
      {
        title: 'HEADER.CONTACT_US',
        link: '/contact-us'
      },
      {
        title: 'HEADER.SING_UP',
        link: '/sing-up'
      }
    ];
  }

  ngOnInit() {
    this.lang = localStorage.getItem('lang');
  }

  changeLang(language): void {
    this.translate.use(language);
    localStorage.setItem('lang', language ) ;
    this.lang = localStorage.getItem('lang');
  }

}
