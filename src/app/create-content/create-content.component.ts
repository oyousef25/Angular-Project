import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../../../helper-files/Content";

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.css']
})
export class CreateContentComponent implements OnInit {
  @Output() newCardEvent = new EventEmitter<Content>();
  public newCardItem: Content;

  /*
    card properties
   */
  public id: number;
  public author: string;
  public imgUrl: string;
  public type: string;
  public title: string;
  public body: string;
  public tags: string[];

  constructor() {
    this.id = 0;
    this.author = "";
    this.imgUrl = "";
    this.type = "";
    this.title = "";
    this.body = "";
    this.tags = [""];

    this.newCardItem = {
      author: this.author,
      body: this.body,
      id: this.id,
      imgUrl: this.imgUrl,
      tags: this.tags,
      title: this.title,
      type: this.type
    }
  }

  ngOnInit(): void {
  }

  addNewCard(){
    let cardPromise = new Promise((success, fail)=>{
      let testSuccess= true;
      if(testSuccess){
        this.newCardEvent.emit(this.newCardItem);
        success("Item added successfully!");
      }else{
        fail("Operation failed!");
      }
    }).then(successResult =>
    console.log(successResult)).catch(failResult => console.log(failResult));
  }
}
