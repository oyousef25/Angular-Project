import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {MatDialog} from "@angular/material/dialog";
import {CreateDialogComponent} from "../create-dialog/create-dialog.component";


@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrls: ['./create-content.component.scss']
})
export class CreateContentComponent implements OnInit {
  @Output() newCardEvent = new EventEmitter<Content>();

  constructor(public dialog: MatDialog) {
  }

  ngOnInit(): void {
  }

  show(){
    this.dialog.open(CreateDialogComponent);
  }
}
