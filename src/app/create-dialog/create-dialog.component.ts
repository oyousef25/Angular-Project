import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Content} from "../../../helper-files/Content";

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.scss']
})
export class CreateDialogComponent implements OnInit {
  @Output() newCardEvent = new EventEmitter<Content>();
  newCardItem: Content;

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

  //error message in case there was empty fields
  public errorMssg: string;

  constructor() {
    this.id = 0;
    this.author = "";
    this.imgUrl = "";
    this.type = "";
    this.title = "";
    this.body = "";
    this.tags = [""];

    //error
    this.errorMssg = "";

    this.newCardItem = {
      author: "",
      body: "",
      id: 0,
      imgUrl: "",
      tags: [],
      title: "",
      type: ""
    }
  }

  ngOnInit(): void {
  }

  addNewCard(){
    if (this.author != "" && this.body != "" && this.id != 0 && this.imgUrl != "" && this.tags != [] && this.title != "" && this.type != ""){
      let cardPromise = new Promise((success, fail)=>{
        let testSuccess= true;
        if(testSuccess){
          this.newCardItem = {
            author: this.author,
            body: this.body,
            id: this.id,
            imgUrl: this.imgUrl,
            tags: this.tags,
            title: this.title,
            type: this.type
          }
          this.newCardEvent.emit(this.newCardItem);
          success("Item added successfully!");
          this.errorMssg = "";
        }else{
          fail("Operation failed!");
        }
      }).then(successResult =>
        console.log(successResult)).catch(failResult => console.log(failResult));
    }else{
      console.log("All fields must have values and ID must be more higher than 0")
      this.errorMssg = "All fields must have values and ID must be more higher than 0";
    }

    //Reset form inputs
    this.resetForm();
  }

  resetForm(){
    this.id = 0;
    this.author = "";
    this.imgUrl = "";
    this.type = "";
    this.title = "";
    this.body = "";
    this.tags = [];
  }

}
