import { Component, OnInit } from '@angular/core';
import {ContentList} from "../../../helper-files/content-list";
import {Content} from "../../../helper-files/Content";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.css']
})
export class ContentCardComponent implements OnInit {
  public items: ContentList | undefined;

  ngOnInit(): void {
    //Create a new instance of the Content interface
     let contentItem1: Content = {
      id: 1024,
      author: 'Alex',
      title: 'javascript frameworks',
      body: 'javascript is the best'
    };

    //create a definition of the contentList
    let itemsList:ContentList;
    itemsList = new ContentList(contentItem1);

    //Add 3 items to it using our function that we made in the Content interface
    itemsList.items = [{
      id: 1023,
      author: 'Omar',
      title: 'Mobile development and the future',
      body: 'Coding is amazing and stressful'
    },
      {
        id: 1022,
        author: 'Tom',
        title: 'hummus',
        body: 'hummus'
      },
      {
        id: 1021,
        author: 'Dawn',
        title: 'hummus',
        body: 'hummus'
      }];

    this.items = itemsList;
  }
}
