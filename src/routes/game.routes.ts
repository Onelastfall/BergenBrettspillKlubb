import {GameComponent} from '../app/games/game.component';
import {RouterModule} from '@angular/router';
/**
 * Created by yijun on 26.04.17.
 */

const routes = [
  {path: '', component: GameComponent}
];

export const gameRoutes = RouterModule.forChild(routes);
