import { Injectable } from '@angular/core';
import {Content} from "../../../helper-files/Content";
import { InMemoryDbService} from "angular-in-memory-web-api";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb(){
    const contentList: Content[] = [{
      id: 5,
      author: 'Omar',
      title: 'Mobile development and the future',
      body: 'Coding is amazing and stressful',
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      type: "creative",
      tags: ["string"]
    },
      {
        id: 10,
        author: 'Tom',
        title: 'Tom is cool',
        body: 'He is cool because he is',
        imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        type: "horror",
        tags: ["string"]
      },
      {
        id: 15,
        author: 'Dawn',
        title: 'Dawn is a good person',
        body: 'She is a good person!',
        imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        type: "horror",
        tags: ["string"]
      },
      {
        id: 20,
        author: 'Alex',
        title: 'Alex is amazing in Js',
        body: 'We all know that',
        imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
        type: "comedy",
        tags: ["string"]
      },
      {
        id: 25,
        author: 'Peter',
        title: 'Peter is smart',
        body: 'I agree!',
        type: "comedy",
        tags: ["hummus", "string", "shawarma"]
      }];

    return { contentList }
  }


  genId(content: Content[]): number {
    return content.length ? Math.max(...content.map(contentItem => contentItem.id ?? 0)) + 1: 0;
  }
}
