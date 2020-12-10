/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/

import { Application ,AndroidApplication,AndroidActivityBundleEventData} from '@nativescript/core';

declare var android;

Application.run({ moduleName: 'app-root' });
Application.android.on(AndroidApplication.activityCreatedEvent, function (args: AndroidActivityBundleEventData) {
    console.log("Event: " + args.eventName + ", Activity: " + args.activity + ", Bundle: " + args.bundle);
    let activity =args.activity
    args.activity.getWindow().clearFlags(android.view.WindowManager.LayoutParams.FLAG_TRANSLUCENT_STATUS);
});


/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
