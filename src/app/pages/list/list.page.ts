import { Component, OnInit } from '@angular/core';
import {GenshinCharactersService} from "../../services/genshin-characters.service";
import {environment} from "../../../environments/environment";
import {InfiniteScrollCustomEvent} from "@ionic/angular";

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {
  characters: Array<any> = []
  ids: Array<any> = []


  constructor(private genshinCharactersService: GenshinCharactersService) { }

  ngOnInit() {
    this.loadIds()
    this.loadCharacters()

  }


  loadCharacters() {
    this.genshinCharactersService.getCharacters().subscribe(
      res => {
        console.log(res)
        for (let i =0; i < res.length; i++) {
          res[i].id = this.ids[i]
        }
        for (let char of res) {
          if (
            char.name != "Chevreuse" &&
            char.name != "Navia") {
            this.characters.push(char)
          }
        }
      }
    )
  }

  loadIds() {
    this.genshinCharactersService.getIdChar().subscribe(
      res => {
        console.log(res)
        for (let id of res) {
          this.ids.push(id)
        }
      }
    )
  }


}
