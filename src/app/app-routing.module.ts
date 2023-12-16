import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { FrameworksComponent } from './components/frameworks/frameworks.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home', component: HomeComponent, children: [
      { path: '', redirectTo: 'languages', pathMatch: 'full' },
      { path: 'languages', component: LanguagesComponent },
      { path: 'frameworks', component: FrameworksComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
