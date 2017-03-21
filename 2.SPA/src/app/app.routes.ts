import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
//NOTA: Si para la redirección queremos usar la # ya que es mas compatible con navegadores.
//pasamos el parametro useHash en la llamada de forRoot
//export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash : true});
