/*If comments provent you from compiling the code into a Bookmarklet just remove them, they are only usefull when the code is still readable*\
/*Just a bit of code so you don't get draged onto Numwork's website by clicking it on accident*\
function WrongPage() {
  let Numworks = "https://my.numworks.com/apps";
    if (window.location.href == Numworks) {return}
    let dowanttogo = confirm("This Bookmarklet only works on Numwork's website, do you want to go there ?")
    if (dowanttogo == false) {return}
    window.location.href = Numworks
    return true
}
/*This Function has the same code as the nwagra.min.js file*\
function Patch() {
  var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
  if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
  {
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

  (function(){let e="https://my.numworks.com/apps";if(document.getElementById("nwagra")){alert("You should avoid prolonged exposure to Nwagra!");return}let t=document.querySelector("a.btn.btn-primary");if(t){let n=USBDevice.prototype.controlTransferIn;USBDevice.prototype.controlTransferIn=function(e,t){if(t!=40)return n.call(this,e,t);let s=this;return new Promise(function(o){n.call(s,e,t).then(function(e){e.data.getUint32()==4276994270&&e.data.setUint32(24,2424307712,!0),o(e)})})},document.querySelector("h1").innerHTML="Enlarged Extra Apps";let e=document.createElement("p");e.id="nwagra",e.className="text-center",e.style.marginTop="50px";let t=document.createElement("img");t.src="https://web.archive.org/web/20221008080116/https://www.nwagyu.com/nwagra.jpg",t.width="150",e.appendChild(t),document.querySelector("section").appendChild(e)}else alert("Please unplug your calculator and start over."),window.location.href=e})()
  }  
}

(function() {
    if (WrongPage() == true) {return}
    Patch()
}
)();
