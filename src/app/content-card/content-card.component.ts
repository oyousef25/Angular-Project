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
      id: 1024,
      author: 'Alex',
      title: 'javascript frameworks',
      body: 'javascript is the best'
    };
  }
  ngOnInit(): void {
  }
}
