import { Injectable } from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {Observable, of} from "rxjs";
import {CONTENTARRAY} from "../../../helper-files/contentDB";
import {MessageService} from "../message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  constructor(private messageService: MessageService) {
  }

  getContent(): Content[] {
    const content = CONTENTARRAY;

    this.messageService.add('Content retrieved!');

    return content;
  }

  getContentObs(): Observable<Content[]> {
    const content = of(CONTENTARRAY);

    this.messageService.add('Content retrieved!');

    return content;
  }
}
