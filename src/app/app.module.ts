import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutsModule } from './layouts/layouts.module';
import { PageModule } from './pages/page.module';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { GeneralInterceptorService } from './interceptors/general-interceptor.service';
// PLUGINS
import { NgxUiLoaderModule, NgxUiLoaderHttpModule, NgxUiLoaderConfig, POSITION, NgxUiLoaderRouterModule } from 'ngx-ui-loader';
import { PipesModule } from './pipes/pipes.module';


const ngxUiLoaderConfig: any = environment.ngxUiConfig;

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PipesModule,
    LayoutsModule,
    PageModule,
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
    NgxUiLoaderRouterModule,
    NgxUiLoaderHttpModule.forRoot({
      showForeground: true,
      exclude: [ ]
    }),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: GeneralInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
