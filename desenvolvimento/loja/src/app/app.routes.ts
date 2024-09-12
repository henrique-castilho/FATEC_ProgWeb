import { Routes } from '@angular/router';
import { ClienteComponent } from './cliente/cliente.component';
import { VitrineComponent } from './vitrine/vitrine.component';

export const routes: Routes = [
    {path:"cliente", component:ClienteComponent},
    {path:"vitrine", component:VitrineComponent},
    {path:"", component:VitrineComponent}
];
