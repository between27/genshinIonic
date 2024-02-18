import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GenshinCharactersService {

  constructor(private http: HttpClient) {
  }


  getCharacters(): Observable<any> {
    return this.http.get(`https://genshin.jmp.blue/characters/all`)
  }

  getIdChar():Observable<any>{
    return this.http.get(`https://genshin.jmp.blue/characters/`)
  }

  showCharacter(id: string | null){
    return this.http.get(`https://genshin.jmp.blue/characters/${id}?lang=fr`)
}
}
