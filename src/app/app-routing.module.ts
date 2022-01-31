import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './components/owner/owner.component';


const routes: Routes = [
  {
    path: "",
    component: OwnerComponent
  },
  {
    path: "owners",
    component: OwnerComponent
  }
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
