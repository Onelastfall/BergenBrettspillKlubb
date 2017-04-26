import {GameComponent} from '../app/games/game.component';
import {RouterModule} from '@angular/router';

const routes = [
  {path: '', component: GameComponent}
];

export const gameRoutes = RouterModule.forChild(routes);
