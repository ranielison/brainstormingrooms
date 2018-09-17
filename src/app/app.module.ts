import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import { AngularFireModule } from 'angularfire2';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
export const firebaseConfig = environment.firebaseConfig;

import {ROUTES} from './app.routes';
import { CoreModule } from './core/core.module';
import { UserProfileComponent } from './user-profile/user-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    RouterModule.forRoot(ROUTES),
    CoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
