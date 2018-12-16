import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { RegisterComponent } from './components/register/register.component';
import { Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { EventsComponent } from './components/events/events.component';
import { SpecialEventsComponent } from './components/special-events/special-events.component'
import { AuthService } from './auth.service'
import { EventService } from './event.service';
import { AuthGuard } from './auth.guard';
import { TokenInterceptorService } from './token-interceptor.service';

const appRoutes: Routes =[
  {
    path:'',
    redirectTo:'/events',
    pathMatch:'full'
    
  },
  {
    path:'registers',
    component:RegisterComponent
  },
  {
    path:'login',
   component:LoginComponent
  },
  {
    path:'events',
    component:EventsComponent
},
{
  path:'special',
  component:SpecialEventsComponent,
 canActivate:[AuthGuard]
}
 
];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EventsComponent,
    SpecialEventsComponent
  ],
  imports: [
    BrowserModule,
FormsModule,
HttpClientModule,
RouterModule.forRoot(appRoutes)

  ],
  exports:[RouterModule],
  providers: [AuthService,EventService,AuthGuard,
  {
    provide:HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
