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
import { SidebarFooterComponent } from './components/pages/sidebar/sidebar-footer/sidebar-footer.component';
import { PostCreateComponent } from './components/pages/main/post/post-create/post-create.component';
import { PostItemComponent } from './components/pages/main/post/post-item/post-item.component';
import { ProfileMainComponent } from './components/pages/main/profile/profile-main/profile-main.component';
import { ProfileComponent } from './components/pages/main/profile/profile.component';
const routes: Routes = [
  { path: '', component: ShellComponent },
  { path: 'profile', component: ProfileComponent },
];
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
    SidebarFooterComponent,
    PostCreateComponent,
    PostItemComponent,
    ProfileMainComponent,
    ProfileComponent  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
