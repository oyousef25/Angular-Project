import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "../../helper-files/Content";

@Pipe({
  name: 'contentExist'
})
export class ContentExistPipe implements PipeTransform {

  transform(contentList: Content[], title?: string){
    return contentList.filter(c => c.title == title ? console.log("content item exists!") : console.log("Not Found"));
  }
}
