

import {HomeComponent} from '../app/home/home.component';
import {RouterModule} from '@angular/router';
import {GameComponent} from '../app/games/game.component';
const routes = [
  {path: '', component: HomeComponent},
  {path: 'spill', component: GameComponent}
];

export default RouterModule.forRoot(routes);
