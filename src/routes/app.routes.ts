

import {RouterModule} from '@angular/router';
const routes = [
  {path: '', loadChildren: 'app/home/home.module'},
  {path: 'spill', loadChildren: 'app/games/game.module'}
];

export const rootRouting = RouterModule.forRoot(routes);
