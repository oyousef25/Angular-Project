import {Content} from "./Content";

export class ContentList{
  static countItems = 0;
  private _items: Content[];

  //Constructor
  constructor(item: Content) {
    this._items = [];
    this._items[0] = item;
    this.increaseCount();
  }

  //A function that returns the content array
  get items(): Content[]{
    return this._items;
  }

  //A function that adds a new item to the end of the array
  set items(newItems:Content[]){
    this.items.push(newItems[0]);
  }

  //A function that keeps track of how many items we have
  increaseCount(){
    return ++ContentList.countItems;
  }

  //A function that takes an input of an index and returns a html output
  displayHtml(indexNum: number): string{
    //Locate the item object in the array
    let items = this.items
    let item = items[indexNum];

    //Create a clean html layout
    let htmlDisplay = "<h1>" + item.author + "</h1>\n" +
      "<h2>" + item.title + "</h2>\n" +
      "<p>" + item.body + "</p>";

    //Return the html display
    return htmlDisplay;
  }


}
