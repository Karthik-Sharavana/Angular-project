import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DemoMaterialModule } from './material-module';
import { AdminHomePageComponent } from './Admin/admin-home-page/admin-home-page.component';
import { RegisterRoomComponent } from './Admin/register-room/register-room.component';
import { UserDetailsComponent } from './Admin/user-details/user-details.component';
import { WelcomePageComponent } from './Admin/welcome-page/welcome-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomePageComponent,
    RegisterRoomComponent,
    UserDetailsComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'' , component: WelcomePageComponent },
      { path:'welcome' , component: WelcomePageComponent },      
      { path:'register' , component: RegisterRoomComponent },
      { path:'userdetails' , component: UserDetailsComponent },
      { path:'**' , component: AdminHomePageComponent },
    ]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule 
{
  
}
