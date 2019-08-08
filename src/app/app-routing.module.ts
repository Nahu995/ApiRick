import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SingleCharacterComponent } from './single-character/single-character.component'
import { CharactersComponent } from './characters/characters.component'
import { HomeComponent } from './home/home.component'
import { EpisodesComponent } from './episodes/episodes.component';
import { SingleEpisodeComponent } from './single-episode/single-episode.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'character/:id', component: SingleCharacterComponent},
  { path: 'characters/:id', component: CharactersComponent},
  { path: 'characters', component: CharactersComponent},
  { path: 'episodes', component: EpisodesComponent},
  { path: 'episodes/:id', component: SingleEpisodeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
