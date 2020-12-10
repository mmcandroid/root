import { EventData, ItemEventData, Page ,NavigationEntry} from '@nativescript/core';
import { HomeViewModel } from './home-view-model';


export function pageLoaded(args: EventData) {
    let page = <Page>args.object;
    page.bindingContext = new HomeViewModel((todo:string):void=>{
        console.log(todo)
        const navigationEntry: NavigationEntry = {
            moduleName: "item/item-page",
            context: { item: todo },
            animated: true
        };
        page.frame.navigate(navigationEntry);
    });
}
