import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingLayoutComponent } from './components/landing-layout/landing-layout.component';
import { RouterModule } from '@angular/router';
import { LogoComponent } from './components/logo/logo.component';
import { LogoFullComponent } from './components/logo-full/logo-full.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { AngularMaterialModule } from './util/angular-material.module';
import { ShowLoadingOverlayDirective } from './directives/show-loading-overlay.directive';
import { ViewComponent } from './components/view/view.component';
import { SideNavItemComponent } from './components/sidenav/side-nav-item/side-nav-item.component';
import { SideNavTitleComponent } from './components/sidenav/side-nav-title/side-nav-title.component';
import { ProfileComponent } from './components/home-layout/profile/profile.component';


@NgModule({
  declarations: [
    LandingLayoutComponent,
    LogoComponent,
    LogoFullComponent,
    HomeLayoutComponent,
    LoadingOverlayComponent,
    ShowLoadingOverlayDirective,
    ViewComponent,
    SideNavItemComponent,
    SideNavTitleComponent,
    ProfileComponent,
  ],
  exports: [
    LogoComponent,
    LogoFullComponent,
    FormsModule,
    ReactiveFormsModule,
    ShowLoadingOverlayDirective,
    ViewComponent,
    SideNavItemComponent,
    SideNavTitleComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
  ],
})
export class CoreModule {
}
