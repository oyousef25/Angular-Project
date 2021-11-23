import {Component, HostListener, Input, OnInit} from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {CreateContentComponent} from "../create-content/create-content.component";
import {ContentService} from "../services/content.service";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {
  @Input() contentArray: Content[];
  @Input() content: Content;

  constructor(private contentService: ContentService, private messageService: MessageService) {
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
  }

  ngOnInit(): void {
    //this.contentArray = this.contentService.getContent();

    this.contentService.getContentObs().subscribe(
      contentArray => this.contentArray = contentArray
    );
  }

  addToContentList(newContentCard: Content){
    this.contentArray.push(newContentCard);
    this.contentArray = Object.assign([], this.contentArray);
    console.log("content-list test");
    console.log(this.contentArray);
  }
}
