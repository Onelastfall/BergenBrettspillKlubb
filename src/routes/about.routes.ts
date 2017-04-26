
import {RouterModule} from '@angular/router';
import {AboutComponent} from '../app/about/about.component';
const routes = [
  {path: '', component: AboutComponent}
];

export const aboutRoutes = RouterModule.forChild(routes);
