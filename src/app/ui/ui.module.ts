import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HomeComponent } from './home/home.component';
import { uiRoutes } from "./ui.routing";

@NgModule({
    declarations: [HomeComponent],
    imports: [RouterModule.forChild(uiRoutes)]
})
export class UiModule { }