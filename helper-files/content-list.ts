import {Content} from "./Content";

export class ContentList{
  static countItems = 0;
  _items: Content[];

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
  addItemToContents(item:Content): void{
    this.items.push(item);
  }

  //A function that keeps track of how many items we have
  increaseCount(){
    return ++ContentList.countItems;
  }

  //Optional: A function that takes an input of an index and returns a html output



}
