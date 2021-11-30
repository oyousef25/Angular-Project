import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {MatDialog} from "@angular/material/dialog";
import {CreateDialogComponent} from "../create-dialog/create-dialog.component";
import {ContentService} from "../services/content.service";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newCardEvent = new EventEmitter<Content>();
  contentArray: Content[] = [];

  constructor(private contentService: ContentService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.contentService.getContent().subscribe(
      contentList => {
        this.contentArray = contentList;
    });
  }

  show(){
    this.dialog.open(CreateDialogComponent);
  }
}
