import { Component, OnInit } from '@angular/core';
import {Content} from "../../../helper-files/Content";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {

  ngOnInit(): void {
    //Create a new instance of the Content interface
     let contentItem1: Content = {
      id: 1024,
      author: 'Alex',
      title: 'javascript frameworks',
      body: 'javascript is the best'
    };
  }
}
