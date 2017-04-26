/**
 * Created by yijun on 20.04.17.
 */

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GameComponent} from './game.component';
import {gameRoutes} from '../../routes/game.routes';
@ NgModule ({
  imports: [CommonModule, gameRoutes],
  declarations: [GameComponent]
})

export default class GameModule {}
