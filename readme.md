# Numworks memory extender revival

Since the Nwagyu Website got deleted the memory extender Bookmarklet has stopped working.
This is why I created this Repo, to try and make an accessible and working remake of the memory extender.

# Attempt 1:
## Changing the source of the Script in the bookmarklet.
This at first seemed the easiest option, because it is if it wasn't for your online security. This is why I have a copy of the Nwagra script in this repo, but when I came to test the resulting Bookmarklet that is right here :
```
javascript: and (function()%7B!function()%7Blet%20t%3Ddocument.createElement(%22script%22)%3Bt.type%3D%22text%2Fjavascript%22%2Ct.src%3D%22https%3A%2F%2Fraw.githubusercontent.com%2Fbenchatondev%2Fnumworksmempatch%2Fmain%2Fnwagra.min.js%22%2Cdocument.head.appendChild(t)%7D()%3B%7D)()%3B
```
I got a kind message from Chrome in the console that the script was blocked by CORB which is a good thing for your security but in our case provents us from going the easy route.

# Attempt 2:
## Remaking the Bookmarklet from "Scratch"
