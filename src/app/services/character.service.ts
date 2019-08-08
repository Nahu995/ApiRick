import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  
  url = 'https://rickandmortyapi.com/api/'

  reqCharacters = 'character/'
  reqLocations = 'location/'
  reqEpisodes = 'episode/'
  maxCharacters = 493;

  constructor(
    private http : HttpClient
  ) { }
  // carga 8 pjs aleatorios en el home
  getCharacters(n: number = 1){
    const charactersAmount = [];

    for(let i =1; i<= n ; i ++){
      charactersAmount.push(Math.floor((Math.random() *  
      this.maxCharacters) +1 ));
    }
    return this.http.get(this.url + this.reqCharacters + charactersAmount);
  }
  // Vuelve a cargar los pjs aleatoriamente
  resetCharacters(){
    this.getCharacters()
  }
  //Carga todos los personajes por pagina
  getAllCharacters(n: number = 1){
    return this.http.get(this.url + this.reqCharacters + `?page=${n}`)
  }
  // trae un solo pj
  getSingleCharacter(id:number){
    return this.http.get(this.url + this.reqCharacters + id);
  }
  getEpisodes(episodes:number[]){
    console.log(episodes)
    return this.http.get(this.url + this.reqEpisodes + episodes)
  }
}
