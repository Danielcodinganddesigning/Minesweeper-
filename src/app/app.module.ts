import { BrowserModule, HammerModule, HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import * as Hammer from 'hammerjs';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BestScoresTableModule } from './best-scores-table/best-scores-table.module';
import { CellModule } from './cell/cell.module';
import { AppRoutingModule } from './app-routing.module';
import { GameComponent } from './game/game.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { MenuScreenComponent } from './menu-screen/menu-screen.component';

@Injectable()
export class MinesweeperHammerConfig extends HammerGestureConfig {
    buildHammer(element: HTMLElement) {
        const ta = new Hammer(element, {
            touchAction: "auto",
        });
        return ta;
    }
}

@NgModule({
    declarations: [
        AppComponent,
        GameComponent,
        StartScreenComponent,
        MenuScreenComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HammerModule,
        CoreModule,
        SharedModule,
        BestScoresTableModule,
        CellModule,
        AppRoutingModule,
    ],
    bootstrap: [AppComponent],
    providers: [{
        provide: HAMMER_GESTURE_CONFIG,
        useClass: MinesweeperHammerConfig
    }]
})
export class AppModule { }
