import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ConverterComponent } from './components/converter/converter.component';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'convert', component: ConverterComponent },
  { path: '', redirectTo: '/convert', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
