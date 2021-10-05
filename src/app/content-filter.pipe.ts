import { Pipe, PipeTransform } from '@angular/core';
import {Content} from "../../helper-files/Content";



@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentList: Content[], type?: string) {
    return contentList.filter(c => c.type == type ? c : "Not Found");
  }
}
