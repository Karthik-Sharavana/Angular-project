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
import { UserModuleComponent } from './User/user-module/user-module.component';
import { RegisterComponent } from './register/register.component';
import { BookRoomComponent } from './User/book-room/book-room.component';
import { LoginComponent } from './user-login/login.component';
import { UserHomeComponent } from './User/home/home.component';
import { MainHomeComponent } from './main-home/main-home.component';
import { MainAboutComponent } from './main-about/main-about.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';

// import { REACTIVE_FORM_DIRECTIVES } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminHomePageComponent,
    RegisterRoomComponent,
    UserDetailsComponent,
    WelcomePageComponent,
    UserModuleComponent,
    RegisterComponent,
    UserHomeComponent,
    BookRoomComponent,
    LoginComponent,
    MainHomeComponent,
    MainAboutComponent,
    AdminLoginComponent,
  ],
  imports: [
    BrowserModule,
    DemoMaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      { path:'' , component: MainAboutComponent },
      { path:'welcome' , component: WelcomePageComponent },
      { path:'main-home', component: MainHomeComponent },
      { path: 'user-register', component:RegisterComponent },      
      { path:'register' , component: RegisterRoomComponent },
      { path:'main-about', component: MainAboutComponent },
      { path:'userdetails' , component: UserDetailsComponent },
      { path: 'usermodule', component: UserModuleComponent },
      { path: 'user-homemodule', component: UserHomeComponent },
      { path: 'user-book-room', component:BookRoomComponent },
      { path: 'user-login', component: LoginComponent },
      { path: 'admin-login', component: AdminLoginComponent },
      { path:'admin-home' , component: AdminHomePageComponent },
      { path: '**', component: MainAboutComponent }
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
