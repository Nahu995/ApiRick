import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { CharacterService } from '../services/character.service'

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {
  characters;
  info;
  pagination : number[] = new Array(25).fill(0).map((elem,i) => elem = i+1)
  currentPage;
  singleCharacter: number;
  constructor(
    public characterService : CharacterService,
    private route:ActivatedRoute
  ) { }
  
  ngOnInit() {

    if(this.route.snapshot.routeConfig.path.includes('characters')){
      this.route.paramMap.subscribe(
        params=> {
          this.currentPage = Number(params.get('id'))
          console.log(this.currentPage)
          this.getAllCharacters(this.currentPage)
        }
      )

    }
    if(this.route.snapshot.routeConfig.path.includes('character/')){
      this.getSingleCharacter(this.route.snapshot.params.id)
    }
    if(this.route.snapshot.routeConfig.path === 'home'){
      this.getCharacters(8)
    }
  }

  getCharacters(n: number) {
    this.characterService.getCharacters(n)
      .subscribe(characters => {
        this.characters = characters;
        console.log(this.characters)
      })
  }
  getAllCharacters(n:number) {
    this.characterService.getAllCharacters(n)
      .subscribe(response => {
        this.characters = response['results'];
        this.info = response['info'];
      })
  }
  getSingleCharacter(id:number){
    this.characterService.getSingleCharacter(id)
      .subscribe(response => {
        this.characters = [response]
        console.log(this.characters)
      })
  }
}
