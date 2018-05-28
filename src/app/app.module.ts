import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { ListingsComponent } from './listings/listings.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './common/footer/footer.component';
import { NavbarComponent } from './common/navbar/navbar.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { MoreinfoComponent } from './moreinfo/moreinfo.component';
import { SignInComponent } from './modals/sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { AdsComponent } from './ads/ads.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { FaIconComponent} from '../utils/fa-icon/component/fa-icon.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


const appRoutes: Routes = [
  { path: '', component: LandingpageComponent },
  { path: 'listings',  component: ListingsComponent},
  { path: 'description', component: MoreinfoComponent},
  { path: 'sign-in', component: SignInComponent},
  { path: 'profile', component: ProfileComponent},
  { path: 'new_ad', component: AdsComponent},
  { path: 'edit_ad', component: AdsComponent},
  { path: 'messages', component: ChatBoxComponent},
  { path: 'edit_profile', component: EditProfileComponent},
  // Why is there a data property here?
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // },
  { path: '',
    redirectTo: '/',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LandingpageComponent,
    ListingsComponent,
    AboutComponent,
    FooterComponent,
    NavbarComponent,
    PageNotFoundComponent,
    MoreinfoComponent,
    SignInComponent,
    ProfileComponent,
    AdsComponent,
    EditProfileComponent,
    FaIconComponent,
    ChatBoxComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
