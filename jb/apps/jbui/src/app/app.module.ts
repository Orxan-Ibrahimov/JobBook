import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './components/shared/shell/shell.component';
import { LeftSidebarComponent } from './components/pages/sidebar/left-sidebar.component';
import { SidebarProfileBoxComponent } from './components/pages/sidebar/sidebar-profile-box/sidebar-profile-box.component';
import { SidebarActivityBoxComponent } from './components/pages/sidebar/sidebar-activity-box/sidebar-activity-box.component';
import { SidebarNewsBoxComponent } from './components/pages/sidebar/sidebar-news-box/sidebar-news-box.component';
import { RightSidebarComponent } from './components/pages/sidebar/right-sidebar/right-sidebar.component';
import { SidebarAdvertisionComponent } from './components/pages/sidebar/sidebar-advertision/sidebar-advertision.component';

const routes: Routes = [{ path: '', component: ShellComponent }];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShellComponent,
    LeftSidebarComponent,
    SidebarProfileBoxComponent,
    SidebarActivityBoxComponent,
    SidebarNewsBoxComponent,
    RightSidebarComponent,
    SidebarAdvertisionComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
