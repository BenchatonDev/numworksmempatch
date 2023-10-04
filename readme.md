# Numworks memory extender revival

Since the Nwagyu Website got deleted the memory extender Bookmarklet has stopped working.
This is why I created this Repo, to try and make an accessible and working remake / modification of the memory extender.

# Attempt 1:
**Changing the source of the Script in the bookmarklet.**

This at first seemed the easiest option, because it is if it wasn't for your online security. This is why I have a copy of the Nwagra script in this repo, but when I came to test the resulting Bookmarklet that is right here :
```
javascript:(function()%7B!function()%7Blet%20t%3Ddocument.createElement(%22script%22)%3Bt.type%3D%22text%2Fjavascript%22%2Ct.src%3D%22https%3A%2F%2Fraw.githubusercontent.com%2Fbenchatondev%2Fnumworksmempatch%2Fmain%2Fnwagra.min.js%22%2Cdocument.head.appendChild(t)%7D()%3B%7D)()%3B
```
I got a kind message from Chrome in the console that the script was blocked by CORB which is a good thing for your security but in our case provents us from going the easy route.

# Attempt 2:

**Remaking the Bookmarklet from "Scratch".**

I didn't really remade itfrom scratch, I basicly just embeded the Nwagra.min.js into the Bookmarklet which completely removes our CORB issue as no requests are made to an external server, this also makes it so the always work until Numwork somehow patches this, anyway I also added a simple check that asks you if you want to go to Numwork's apps page or not if you are not already on it so you don't get sent to the page if you clicked on it by accident :). So here is the resulting Bookmarklet :
```
javascript:function%20WrongPage()%7Bif(%22https%3A%2F%2Fmy.numworks.com%2Fapps%22!%3Dwindow.location.href%26%260!%3Dconfirm(%22This%20Bookmarklet%20only%20works%20on%20Numwork's%20website%2C%20do%20you%20want%20to%20go%20there%20%3F%22))return%20window.location.href%3D%22https%3A%2F%2Fmy.numworks.com%2Fapps%22%2C!0%7Dfunction%20Patch()%7Bvar%20a%3Dfunction(b)%7Breturn%20self._wb_wombat%26%26self._wb_wombat.local_init%26%26self._wb_wombat.local_init(b)%7C%7Cself%5Bb%5D%7D%3Bself.__WB_pmw%7C%7C(self.__WB_pmw%3Dfunction(b)%7Bthis.__WB_source%3Db%3Breturn%20this%7D)%3Bvar%20k%3Da(%22window%22)%3Ba(%22self%22)%3Bvar%20c%3Da(%22document%22)%3Ba(%22location%22)%3Ba(%22top%22)%3Ba(%22parent%22)%3Ba(%22frames%22)%3Ba(%22opener%22)%3B(function()%7Bif(c.getElementById(%22nwagra%22))alert(%22You%20should%20avoid%20prolonged%20exposure%20to%20Nwagra!%22)%3Belse%20if(c.querySelector(%22a.btn.btn-primary%22))%7Bvar%20b%3DUSBDevice.prototype.controlTransferIn%3BUSBDevice.prototype.controlTransferIn%3Dfunction(h%2Ce)%7Bif(40!%3De)return%20b.call(this%2Ch%2Ce)%3Bvar%20l%3Dthis%3Breturn%20new%20Promise(function(m)%7Bb.call(l%2Ch%2Ce).then(function(f)%7B4276994270%3D%3Df.data.getUint32()%26%26f.data.setUint32(24%2C2424307712%2C!0)%3Bm(f)%7D)%7D)%7D%3Bc.querySelector(%22h1%22).innerHTML%3D%22Enlarged%20Extra%20Apps%22%3Bvar%20d%3Dc.createElement(%22p%22)%3Bd.id%3D%22nwagra%22%3Bd.className%3D%22text-center%22%3Bd.style.marginTop%3D%2250px%22%3Bvar%20g%3Dc.createElement(%22img%22)%3Bg.src%3D%22https%3A%2F%2Fweb.archive.org%2Fweb%2F20221008080116%2Fhttps%3A%2F%2Fwww.nwagyu.com%2Fnwagra.jpg%22%3Bg.width%3D%22150%22%3Bd.appendChild(g)%3Bc.querySelector(%22section%22).appendChild(d)%7Delse%20alert(%22Please%20unplug%20your%20calculator%20and%20start%20over.%22)%2Ck.location.href%3D%22https%3A%2F%2Fmy.numworks.com%2Fapps%22%7D)()%3Balert(%22Enlarged%20apps%20Successfully%20enabled%22)%7D(function()%7B1!%3DWrongPage()%26%26Patch()%7D)()%3Bvoid+0
```
Hope you enjoy this simple fix that only took me 10-5mins to make and if you don't trust the bookmarklet here you can "compile" it your self

# Credits and stuff
I might be the owner of this repo but most if not all of the code here is from the [Nwagyu team / The Orginal](https://web.archive.org/web/20230606155008/https://www.nwagyu.com/) creator and I don't have near enough skill to do what they did so they deserve credit, the work I did is something anyone with a bit of knowledge would be able to do so I don't deserve any credits for this but I'll still thank you for coming by and using my very simple "fix".
