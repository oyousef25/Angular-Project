import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { ContentService } from '../services/content.service';

@Component({
  selector: 'app-content-detail',
  templateUrl: './content-detail.component.html',
  styleUrls: ['./content-detail.component.css']
})
export class ContentDetailComponent implements OnInit {

  id: number = 0;
  contentItem: any = {};

  constructor(private route: ActivatedRoute, private content: ContentService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(parameters => {
      this.id = Number(parameters.get("id"));

      this.content.getContentItem(this.id).subscribe(returnedContent => this.contentItem = returnedContent);
    });
  }

}
