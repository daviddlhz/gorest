import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { mainRoutes } from './app.routing';

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
