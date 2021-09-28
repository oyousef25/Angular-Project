import {Component, Input, OnInit} from '@angular/core';
import {Content} from "../../../helper-files/Content";

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
      body: ''
    }
    this.contentArray = [{
      id: 1023,
      author: 'Omar',
      title: 'Mobile development and the future',
      body: 'Coding is amazing and stressful'
    },
      {
        id: 1022,
        author: 'Tom',
        title: 'Tom is cool',
        body: 'He is cool because he is'
      },
      {
        id: 1021,
        author: 'Dawn',
        title: 'Dawn is a good person',
        body: 'She is a good person!'
      },
      {
        id: 1021,
        author: 'Alex',
        title: 'Alex is amazing in Js',
        body: 'We all know that'
      },
      {
        id: 1021,
        author: 'Peter',
        title: 'Peter is smart',
        body: 'I agree!'
      }];
  }


  //Add 3 items to it using our function that we made in the Content interface

  ngOnInit(): void {
  }

}
