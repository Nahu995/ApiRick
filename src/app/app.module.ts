import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CharactersComponent } from './characters/characters.component';
import { SingleCharacterComponent } from './single-character/single-character.component';
import { CardComponent } from './card/card.component';
import { EpisodesComponent } from './episodes/episodes.component';
import { HeaderComponent } from './header/header.component';
import { SingleEpisodeComponent } from './single-episode/single-episode.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    SingleCharacterComponent,
    CardComponent,
    EpisodesComponent,
    HeaderComponent,
    SingleEpisodeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
