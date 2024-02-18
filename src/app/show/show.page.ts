import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GenshinCharactersService} from "../services/genshin-characters.service";

@Component({
  selector: 'app-show',
  templateUrl: './show.page.html',
  styleUrls: ['./show.page.scss'],
})
export class ShowPage implements OnInit {
character : any
  id: string | null = this.route.snapshot.paramMap.get('id')
  imageUrl = 'https://genshin.jmp.blue/characters/'
  constructor(private route: ActivatedRoute, private genshinCharactersService : GenshinCharactersService) { }

  ngOnInit() {


    this.genshinCharactersService.showCharacter(this.id).subscribe((res)=>{
      console.log(res)

      this.character = res
    })
  }

}
