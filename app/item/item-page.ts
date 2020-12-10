import { EventData, NavigatedData, Page } from "@nativescript/core";
import { ItemViewModel } from "./item-view-model";

 

export function onNavigatedTo(args: NavigatedData) {
    console.log("Page navigatedTo");
    const page = args.object as Page;
    console.log("Page reference from navigatedTo event: ", args.context);
    let extra : {"item":string} = args.context
    console.log("Page reference from navigatedTo event: ", extra.item);

    page.bindingContext = new ItemViewModel(extra.item);
}