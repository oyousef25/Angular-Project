import { Injectable } from '@angular/core';
import {Content} from "../../../helper-files/Content";
import {Observable, of} from "rxjs";
import {contents} from "../../../helper-files/contentDB";
import {MessageService} from "../message.service";
import {HttpClient, HttpClientModule, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(private http: HttpClient) {
  }

  getContent(): Observable<Content[]> {
    return this.http.get<Content[]>("api/contents");
  }

  addContent(content: Content): Observable<Content> {
    return this.http.post<Content>("api/contents", content, this.httpOptions);
  }
  updateContent(content: Content): Observable<any> {
    return this.http.put("api/contents", content, this.httpOptions);
  }
}
