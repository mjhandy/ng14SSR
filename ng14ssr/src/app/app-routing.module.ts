import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { HomeComponent } from './components/pages/home/home.component';
import { TestComponent } from './components/pages/test/test.component';
import { FormComponent } from './components/pages/form/form.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    data:{
      title: 'Home Page'
    }
  },
  {
    path: 'test',
    component: TestComponent,
    data:{
      title: 'Test Page'
    }
  },
  {
    path: 'form',
    component: FormComponent,
    data:{
      title: 'Form Page'
    }
  }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
