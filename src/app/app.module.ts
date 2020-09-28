import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SharedModule} from './_shared/shared.module';
import {MainModule} from './modules/main/main.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateLoader, TranslateModule, TranslateService} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {LottieModule} from 'ngx-lottie';
import player from 'lottie-web';

export function playerFactory() {
  return player;
}

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    MainModule,
    HttpClientModule,
    LottieModule.forRoot({player: playerFactory}),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      },
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private translate: TranslateService) {
    this.initTranslate();
  }

  initTranslate(): void {
    const lang = localStorage.lang = localStorage.lang ? localStorage.lang : 'en';
    this.translate.use(lang);
    this.translate.onLangChange.subscribe(event => localStorage.lang = event.lang);
  }
}
