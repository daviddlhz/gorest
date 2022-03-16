import { Routes } from "@angular/router";

export const mainRoutes: Routes = [
    {path: '', loadChildren: () => import('./ui/ui.module').then(m => m.UiModule) }
];
