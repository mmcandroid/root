import { android } from "@nativescript/core/application";
import {
    getBoolean,
    setBoolean,
    getNumber,
    setNumber,
    getString,
    setString,
    hasKey,
    remove,
    clear
} from "@nativescript/core/application-settings";
export class TodoRep {
    private static instance: TodoRep;
    TODO_KEY="todo_key_nativescript" 
    todoList :Array<String> = []
    private constructor() { 
        if (hasKey(this.TODO_KEY)){
            console.log(getString(this.TODO_KEY))
            this.todoList=getString(this.TODO_KEY).split("::")
        }

    }
    public static getInstance(): TodoRep {
        if (!TodoRep.instance) {
            TodoRep.instance = new TodoRep();
        }
        return TodoRep.instance;
    }

    saveTodo(todo:String){
        console.log("todo saved")
        this.todoList.push(todo)
        let storedValue = setString(this.TODO_KEY,this.todoList.join("::"))
         console.log(getString(this.TODO_KEY))
    }
    

}