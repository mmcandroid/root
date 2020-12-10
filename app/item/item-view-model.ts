import { Observable, ObservableArray } from "@nativescript/core";
import { ObservableProperty } from "~/observable-property-decorator";

export class ItemViewModel extends Observable{
 @ObservableProperty() item :string = ""
 constructor(item:string){
     super();
     this.item=item
 }
}