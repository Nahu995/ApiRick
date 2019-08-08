import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../services/character.service'

@Component({
  selector: 'app-single-episode',
  templateUrl: './single-episode.component.html',
  styleUrls: ['./single-episode.component.css']
})

export class SingleEpisodeComponent implements OnInit {
  episode;
  charactersId=[];
  characters;

  constructor(
    public characterService: CharacterService,
    private route: ActivatedRoute
    ) { }
    
  ngOnInit() {
    console.log(this.route)
    this.getEpisode(this.route.snapshot.params.id)

  }
  getEpisode(n){
    this.characterService.getEpisodes(n)
    .subscribe(episode => {
      this.episode = episode
      console.log(this.episode)
      this.episode.characters.map((singleCharacter)=> {
        singleCharacter = singleCharacter.split("/")
        this.charactersId.push(+singleCharacter[singleCharacter.length-1])
      })
      this.getCharactersForEpisode(this.charactersId)
    })
  }
  getCharactersForEpisode(id){
    this.characterService.getSingleCharacter(id)
      .subscribe(response => {
        console.log("getCharactersForEpisode",response)
        this.characters = response
      })
  }
}