import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {CreateContentComponent} from "../create-content/create-content.component";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  @Input() contentArray: Content[];
  @Input() content: Content;

  constructor() {
    this.content = {
      id: 0,
      author: '',
      title: '',
      body: '',
      imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
      type: "string",
      tags: ["string"]
    }

    this.contentArray = [];

    // this.contentArray = [{
    //   id: 1023,
    //   author: 'Omar',
    //   title: 'Mobile development and the future',
    //   body: 'Coding is amazing and stressful',
    //   imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    //   type: "creative",
    //   tags: ["string"]
    // },
    //   {
    //     id: 1022,
    //     author: 'Tom',
    //     title: 'Tom is cool',
    //     body: 'He is cool because he is',
    //     imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    //     type: "horror",
    //     tags: ["string"]
    //   },
    //   {
    //     id: 1021,
    //     author: 'Dawn',
    //     title: 'Dawn is a good person',
    //     body: 'She is a good person!',
    //     imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    //     type: "horror",
    //     tags: ["string"]
    //   },
    //   {
    //     id: 1021,
    //     author: 'Alex',
    //     title: 'Alex is amazing in Js',
    //     body: 'We all know that',
    //     imgUrl: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg",
    //     type: "comedy",
    //     tags: ["string"]
    //   },
    //   {
    //     id: 1021,
    //     author: 'Peter',
    //     title: 'Peter is smart',
    //     body: 'I agree!',
    //     type: "comedy",
    //     tags: ["hummus", "string", "shawarma"]
    //   }];
  }

  ngOnInit(): void {
  }

  addToContentList(newContentCard: Content){
    this.contentArray.push(newContentCard);
    this.contentArray = Object.assign([], this.contentArray);
    console.log("content-list test");
    console.log(this.contentArray);
  }
}
