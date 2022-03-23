import { Provider } from "@angular/core";
import { UserService } from "@core/services/users.service";

export const userProvider: Provider = [
    { provide: 'userRepository', useClass: UserService }
]