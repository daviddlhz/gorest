import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { userProvider } from "@domain/users/user.provider";
import { UsersComponent } from "./users.component";
import { usersRoutes } from "./users.routing";

@NgModule({
    declarations: [UsersComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        RouterModule.forChild(usersRoutes)
    ],
    exports: [UsersComponent],
    providers: [userProvider]
})

export class usersModule { }