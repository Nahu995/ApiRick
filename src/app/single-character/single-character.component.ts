import { Component, OnInit, Input, Output, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CharacterService } from '../services/character.service'
@Component({
  selector: 'app-single-character',
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css']
})
export class SingleCharacterComponent implements OnInit {
  character
  episodes:number[] = [];
  seasons=[[],[],[]];
  constructor(
    public characterService:CharacterService,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.getSingleCharacter(this.route.snapshot.params.id)
  }
  
  getSingleCharacter(id:number){
    this.characterService.getSingleCharacter(id)
    .subscribe(response => {
      this.character = response;
        console.log(this.character);
        this.character.episode.map(
          (elem)=> {
            elem = elem.split("/");
            this.episodes.push(+elem[elem.length-1]);
          }
          );
          this.getEpisodes(this.episodes)
      },()=>{})
  }
  getEpisodes(episodes: number[]){
    this.characterService.getEpisodes(episodes)
      .subscribe(episodes => {
        console.log(episodes)
        if(!Array.isArray(episodes)){
          episodes = [episodes]}
        if(Array.isArray(episodes)){
        episodes.map((elem, index) => {
          if(elem.episode.includes("S01")){
            this.seasons[0].push(elem)}
          else if(elem.episode.includes("S02")){
            this.seasons[1].push(elem)}
          else
          {
            this.seasons[2].push(elem)}
        })
      }
        console.log("A8lpqtp",this.seasons)
      })
  }
}
