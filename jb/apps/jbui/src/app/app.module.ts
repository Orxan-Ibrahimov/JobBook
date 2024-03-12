import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { ShellComponent } from './components/shared/shell/shell.component';
import { SidebarComponent } from './components/pages/sidebar/sidebar.component';
import { SidebarProfileBoxComponent } from './components/pages/sidebar/sidebar-profile-box/sidebar-profile-box.component';

const routes: Routes = [{ path: '', component: ShellComponent }];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    ShellComponent,
    SidebarComponent,
    SidebarProfileBoxComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
