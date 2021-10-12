import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../../helper-files/Content";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
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
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      type: "string",
      tags: ["string"]
    };
  }

  showId(index: number){
    console.log(index);
  }

  ngOnInit(): void {
  }
}
