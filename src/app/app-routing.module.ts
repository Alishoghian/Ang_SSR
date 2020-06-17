import { NgModule } from '@angular/core';
import {  RouterModule } from '@angular/router';
import { Route } from './route';


@NgModule({
  imports: [RouterModule.forRoot(Route, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

