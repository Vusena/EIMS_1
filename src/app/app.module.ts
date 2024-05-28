import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from "@angular/platform-browser";
import { MatIconModule } from '@angular/material/icon';




import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';


import { MainLayoutComponent } from './core/components/main-layout/main-layout/main-layout.component';
import { LayoutModule } from "./core/components/layout/layout.module";
import { AuthComponent } from './core/components/auth/auth/auth.component';
import { HttpClientModule } from "@angular/common/http";
import { STEPPER_GLOBAL_OPTIONS } from "@angular/cdk/stepper";


import player from 'lottie-web';


@NgModule({
  declarations: [
  AppComponent,
  MainLayoutComponent,
  AuthComponent,
  
  
         
    
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot(AppRoutes,{ useHash: true  }),
    LayoutModule,
    // ToastrModule.forRoot(),
    HttpClientModule,
    RouterModule,
   
  
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
