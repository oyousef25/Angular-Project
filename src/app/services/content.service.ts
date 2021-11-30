import { Injectable } from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {Observable, of} from "rxjs";
import {CONTENTARRAY} from "../../../helper-files/contentDB";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {MessageService} from "../message.service";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  }

  constructor(private http: HttpClient, private messageService: MessageService) {
  }

  getContent(): Observable<Content[]>{
    // const content = CONTENTARRAY;

    //const content = this.http.get<Content[]>("api/contentList");

    this.messageService.add('Content retrieved!');

    return this.http.get<Content[]>("api/contentList");;
  }

  addContent(content: Content): Observable<Content>{
    return this.http.post<Content>("api/contentList", content, this.httpOptions)
  }

  updateContent(content: Content): Observable<any>{
    return this.http.put("api/contentList", content, this.httpOptions)
  }

  getContentItem(id: number): Observable<Content> {
    return this.http.get<Content>("api/contentList/" + id);
  }

  // getContentObs(): Observable<Content[]> {
  //   const content = of(CONTENTARRAY);
  //
  //   this.messageService.add('Content retrieved!');
  //
  //   return content;
  // }

  // getContentItem(id: number): Observable<Content>{
  //   const content = of(CONTENTARRAY);
  //
  //   return content.;
  // }
}
