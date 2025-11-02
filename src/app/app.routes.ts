import { Routes } from '@angular/router';
import { HederComponent } from './heder/heder.component';
import { UsersListComponent } from './users-list/users-list.component';

export const routes: Routes = [

{path:'users', component: UsersListComponent},
{path:'heder',component: HederComponent}
 
];
