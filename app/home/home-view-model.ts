import { ObservableProperty } from "../observable-property-decorator";  
import { getJSON } from "@nativescript/core/http";
import { Observable, ObservableArray } from "@nativescript/core";
import { ListViewEventData }from  "nativescript-ui-listview";
import { TodoRep } from "~/todoRepo";
import { SnackBar, SnackBarOptions } from "@nstudio/nativescript-snackbar";

 
export class HomeViewModel extends Observable {
   @ObservableProperty()isBusy:   boolean = true;
     snackbar = new SnackBar();

   @ObservableProperty() isLoading :Boolean = true;
    
   toDoRepo = TodoRep.getInstance()

    myObservableArray = new ObservableArray<string>();
    
    onItemTap(args): void {
        this.onItemTaped(this.myObservableArray.getItem(args.index))

    }

    

    @ObservableProperty() textFieldValue: string = "";

    onButtonTap(): void {
        console.log("Button was pressed");
        if (isBlank(this.textFieldValue)){
            this.snackbar.simple('TODO should be not blank', 'white', 'black', 3, false)
        }else{
            this.toDoRepo.saveTodo(this.textFieldValue)
            this.isBusy=true
            this.textFieldValue=""
            this.load(null)
        }
        
    }
    onItemTaped : (item:string)=> void
    constructor(onItemTaped:(item:string)=> void) {
        super();
        this.load(null)
        this.isLoading=true
        this.onItemTaped=onItemTaped
    }

    load(args:ListViewEventData): void {
        console.log("this loading")

        this.myObservableArray.splice(0)
        this.myObservableArray.push(TodoRep.getInstance().todoList)
         
         this.isBusy=false
        if (args){
            const listView = args.object;
            listView.notifyPullToRefreshFinished();
        }
          
    }

    onPullToRefreshInitiated(args:ListViewEventData){
        const that = new WeakRef(this);
        this.load(args)
    }

     
}
class Country {
    name: String
    flag: String
    constructor(name: String, flag: String) {
        this.name = name
        this.flag = flag
    }
}

export function isBlank(str:string):Boolean {
    return (!str || /^\s*$/.test(str));
}