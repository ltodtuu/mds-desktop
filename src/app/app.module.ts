import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './core/util/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { NetService } from './core/services/net.service';
import { AuthService } from './core/services/auth.service';
import { UserService } from './core/services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { Router, RouterModule } from '@angular/router';
import { AppRoutes } from './core/constants/routes';
import { FeaturesModule } from './features/features.module';
import { CoreModule } from './core/core.module';
import { LocalStorageService } from './core/services/local-storage.service';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { matPaginatorInternationalization, netLoginInit } from './core/util/app-init';
import { MtxDatetimepickerModule } from '@ng-matero/extensions/datetimepicker';
import { MtxNativeDatetimeModule } from '@ng-matero/extensions/core';
import { MtxMomentDatetimeModule } from '@ng-matero/extensions-moment-adapter';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
    CoreModule,
    FeaturesModule,
    MtxDatetimepickerModule,
    MtxNativeDatetimeModule,
    MtxMomentDatetimeModule
  ],
  providers: [
    NetService,
    AuthService,
    UserService,
    LocalStorageService,
    {
      provide: APP_INITIALIZER,
      useFactory: netLoginInit,
      deps: [NetService, AuthService, Router],
      multi: true,
    },
    {
      provide: APP_INITIALIZER,
      useFactory: matPaginatorInternationalization,
      deps: [MatPaginatorIntl],
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
