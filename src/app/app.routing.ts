import { ArticlesComponent } from './articles/articles.component';
import { BioComponent } from './bio/bio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'bio',
    component: BioComponent
  },
  {
    path: 'articles',
    component: ArticlesComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);