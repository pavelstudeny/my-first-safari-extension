# my-first-safari-extension
Safari extension template/prototype

## Building and running

You'll want to change the Xcode project settings for code signing to use your own certificate, or to not sign.  To use an unsigned extension in Safari, you must check "Allow Unsigned Extensions" from Safari's "Develop" menu.  If you don't have the "Develop" menu, you can enable it in the Advanced tab of Safari's prefs.

Change your development team on all projects.

Build and run the app at least once so Safari notices it.  The app does nothing except present a blank window.  If all is well, you should now see a new item called "The Actual Extension" in the Extensions tab of Safari's prefs.  That's our guy, enable him.  The button should get added to Safari's toolbar.

When you make changes to the extension, it may sometimes require some combination of relaunching Safari, toggling the extension off and on, or relaunching the container app to get Safari to notice the changes.

## What it shows

1. Navigate to an HTTP page - the extension injects an iframe that is displayed correctly.

2. Navigate to an HTTPS page

Result: depending on Content Security Policy, the iframe is blocked with either
{code}[blocked] The page at about:blank was not allowed to display insecure content from safari-extension://com.stevenf.My-First-Safari-Extension.The-Actual-Extension-6H4HRTU5E3/2b8f7871/dialog.html.{code}
or
{code}[Error] Refused to load safari-extension://com.stevenf.My-First-Safari-Extension.The-Actual-Extension-6H4HRTU5E3/2b8f7871/dialog.html because it appears in neither the child-src directive nor the default-src directive of the Content Security Policy.{code}

Expected: iframe is displayed as in 1.
