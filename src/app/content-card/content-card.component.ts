import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {createComponent} from "@angular/compiler/src/core";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() content: Content;

  constructor() {
    //Create a new instance of the Content interface
    this.content = {
      id: 0,
      author: '',
      title: '',
      body: '',
      imgUrl: "",
      type: "",
      tags: [""]
    };
  }

  showId(index: number){
    console.log(index);
  }

  ngOnInit(): void {
  }
}
