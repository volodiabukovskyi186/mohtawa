import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {SharedModule} from '../../_shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {HomeTopComponent} from './home-page/home-top/home-top.component';
import {HomeSingUpComponent} from './home-page/home-sing-up/home-sing-up.component';
import {HomeNowComponent} from './home-page/home-now/home-now.component';
import {HomeWhatIsComponent} from './home-page/home-what-is/home-what-is.component';
import {HomeProblemComponent} from './home-page/home-problem/home-problem.component';
import {HomeSolutionComponent} from './home-page/home-solution/home-solution.component';
import {HomeServicesComponent} from './home-page/home-services/home-services.component';
import {HowItWorksComponent} from './how-it-works/how-it-works.component';
import {HowTopComponent} from './how-it-works/how-top/how-top.component';
import {HowSingUpComponent} from './how-it-works/how-sing-up/how-sing-up.component';
import {HowDiscussionComponent} from './how-it-works/how-discussion/how-discussion.component';
import {HowResearchComponent} from './how-it-works/how-research/how-research.component';
import {HowImplementationComponent} from './how-it-works/how-implementation/how-implementation.component';
import {HowAssessmentComponent} from './how-it-works/how-assessment/how-assessment.component';
import {AboutUsComponent} from './about-us/about-us.component';
import {AboutTopComponent} from './about-us/about-top/about-top.component';
import {AboutOurVisionComponent} from './about-us/about-our-vision/about-our-vision.component';
import {AboutPartnersComponent} from './about-us/about-partners/about-partners.component';
import {ContactUsComponent} from './contact-us/contact-us.component';
import {ContactTopComponent} from './contact-us/contact-top/contact-top.component';
import {ContactFormComponent} from './contact-us/contact-form/contact-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import {LottieModule} from 'ngx-lottie';
import * as AOS from 'aos';

const mainRoutes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'how-it-works', component: HowItWorksComponent},
  {path: 'about-us', component: AboutUsComponent},
  {path: 'contact-us', component: ContactUsComponent},

];

@NgModule({
  declarations: [
    HomePageComponent,
    HomeTopComponent,
    HomeSingUpComponent,
    HomeNowComponent,
    HomeWhatIsComponent,
    HomeProblemComponent,
    HomeSolutionComponent,
    HomeServicesComponent,
    HowItWorksComponent,
    HowTopComponent,
    HowSingUpComponent,
    HowDiscussionComponent,
    HowResearchComponent,
    HowImplementationComponent,
    HowAssessmentComponent,
    AboutUsComponent,
    AboutTopComponent,
    AboutOurVisionComponent,
    AboutPartnersComponent,
    ContactUsComponent,
    ContactTopComponent,
    ContactFormComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    RouterModule.forChild(mainRoutes),
    ReactiveFormsModule,
    LottieModule
  ]
})
export class MainModule {
  constructor() {
    AOS.init({
      duration: 1200,
    });
  }
}
