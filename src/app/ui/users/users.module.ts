import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { UsersComponent } from "./users.component";
import { usersRoutes } from "./users.routing";

@NgModule({
    declarations: [UsersComponent],
    imports: [RouterModule.forChild(usersRoutes)],
    exports: [UsersComponent]
})

export class usersModule { }