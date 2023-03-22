import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EndDateComponent } from './end-date/end-date.component';
const routes: Routes = [
  { path: 'End-Date-Calculator', component: EndDateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
