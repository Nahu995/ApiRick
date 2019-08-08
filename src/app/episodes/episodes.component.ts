import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service'

@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.component.html',
  styleUrls: ['./episodes.component.css']
})
export class EpisodesComponent implements OnInit {

  @Input() seasons;
  episodes : number[] = new Array(31).fill(0).map((elem,i) => elem = i+1)
  flagHeader= false

  constructor(
    public characterService:CharacterService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.route)
    if(this.route.snapshot.routeConfig.path.includes("episodes")){
      this.flagHeader= true
      this.getEpisodes(this.episodes)
    }
    console.log(this.route.snapshot)
  }

  getEpisodes(episodes: number[]){
    this.seasons =[[],[],[]]
    this.characterService.getEpisodes(episodes)
      .subscribe(episodes => {
        console.log(episodes)
        if(Array.isArray(episodes)){
        episodes.map(elem => {
          if(elem.episode.includes("S01")){
            this.seasons[0].push(elem)}
          else if(elem.episode.includes("S02")){
            this.seasons[1].push(elem)}
          else{
            this.seasons[2].push(elem)}
        })
      }
        console.log(this.seasons)
      })
  }

}
