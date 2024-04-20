import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { GameComponent } from "./game/game.component";
import { StartScreenComponent } from "./start-screen/start-screen.component";
import { MenuScreenComponent } from "./menu-screen/menu-screen.component";
const routes: Routes = [
  { path: "menu", component: MenuScreenComponent},
  { path: "game", component: GameComponent },
  { path: "", component: StartScreenComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
