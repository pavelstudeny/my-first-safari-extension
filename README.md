# my-first-safari-extension
Safari extension template/prototype

## Building and running

You'll want to change the Xcode project settings for code signing to use your own certificate, or to not sign.  To use an unsigned extension in Safari, you must check "Allow Unsigned Extensions" from Safari's "Develop" menu.  If you don't have the "Develop" menu, you can enable it in the Advanced tab of Safari's prefs.

Change your development team on all projects.

Build and run the app at least once so Safari notices it.  The app does nothing except present a blank window.  If all is well, you should now see a new item called "The Actual Extension" in the Extensions tab of Safari's prefs.  That's our guy, enable him.  The button should get added to Safari's toolbar.

When you make changes to the extension, it may sometimes require some combination of relaunching Safari, toggling the extension off and on, or relaunching the container app to get Safari to notice the changes.

## What it shows

Open JS console. Navigate to http://htmlpreview.github.io/?https://github.com/avast/topee/blob/master/api.html.
The page changes its body by the parameter.

Result: script.js is injected twice, as demonstrated by console.log()s

Expected: script.js is injected once.
