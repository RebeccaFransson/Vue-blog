webpackJsonp([0],[,,,function(t,n,a){"use strict";var e=a(21),r=a(51);n.a={name:"app",components:{navigation:e.a,bottomBar:r.a}}},function(t,n,a){"use strict";var e=a(23);n.a={name:"navigation",components:{popup:e.a},data:function(){return{showPopup:!1,whichPopup:""}},methods:{openPopup:function(t,n){this.showPopup=!0,this.whichPopup=t,this.showSmallNavPictures(!0),this.addUnactiveToAllExceptOne(this.findActivePictureElement(n.target)),$("#popup").css("display","block"),$("body").addClass("freezeScroll"),setTimeout(function(){$("#popup").removeClass("hidden")},50),$("body, html").animate({scrollTop:0},550)},closePopup:function(){this.showPopup=!1,this.showSmallNavPictures(!1),$("#popup").addClass("hidden"),setTimeout(function(){$("#popup").css("display","none")},500)},showSmallNavPictures:function(t){t?$(".navPicture").addClass("small"):$(".navPicture").removeClass("small")},addUnactiveToAllExceptOne:function(t){var n=$(".navPicture");n.removeClass("unactive"),n.each(function(n,a){a!==t&&$(a).addClass("unactive")})},findActivePictureElement:function(t){return t.className.includes("navPicture")?t:t.parentElement}}}},function(t,n,a){"use strict";var e=a(25),r=a(28),i=a(31),s=a(34),l=a(37),o=a(40),c=a(46);n.a={name:"popup",components:{theFarm:e.a,rentBox:r.a,riding:i.a,breeding:s.a,horses:l.a,gallery:o.a,events:c.a},props:{whichPopup:{type:String},closePopup:{type:Function}},data:function(){return{popupName:"",rentBox:"rentBox",theFarm:"theFarm",riding:"riding",breeding:"breeding",horses:"horses",gallery:"gallery",events:"events"}},mounted:function(){$("#popup").css("display","none")},watch:{whichPopup:function(){console.log("watch popup")}}}},function(t,n,a){"use strict";n.a={name:"Inackodering"}},function(t,n,a){"use strict";var e=a(42),r=a.n(e);n.a={data:function(){return{index:0,images:["/static/gallery/farmDucks.jpg","/static/gallery/horseDioraAndCharlie.jpg","/static/gallery/horseMidori.jpg","/static/gallery/pastureEveningSun.jpg","/static/gallery/pastureEveningSunWithHorses.jpg","/static/gallery/pastureInTheTent.jpg","/static/gallery/pastureLotOfHorses.jpg","/static/gallery/pastureMist.jpg","/static/gallery/pastureMorningSun.jpg","/static/gallery/pastureMorningSun2.jpg","/static/gallery/pastureMorningSunWithHorses.jpg","/static/gallery/ridingArena.jpg","/static/gallery/stall.jpg","/static/gallery/trainingAlbinAndSonja.jpg","/static/gallery/trainingDioraAndSandra.jpg","/static/gallery/trainingEmilAndPernilla.jpg","/static/gallery/trainingErosAndTina.jpg","/static/gallery/trainingQubbe.jpg"]}},components:{gallery:r.a}}},,,function(t,n,a){"use strict";n.a={name:"bottomBar",data:function(){return{}},methods:{}}},function(t,n,a){a(12),t.exports=a(17)},function(t,n,a){window.Promise||(window.Promise=a(13)),Object.assign=a(16)},,,,,function(t,n,a){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=a(18),r=a(19);new e.a({el:"#app",render:function(t){return t(r.a)}})},,function(t,n,a){"use strict";function e(t){a(20)}var r=a(3),i=a(54),s=a(0),l=e,o=s(r.a,i.a,!1,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";function e(t){a(22)}var r=a(4),i=a(50),s=a(0),l=e,o=s(r.a,i.a,!1,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";function e(t){a(24)}var r=a(5),i=a(49),s=a(0),l=e,o=s(r.a,i.a,!1,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";function e(t){a(26)}var r=a(27),i=a(0),s=e,l=i(null,r.a,!1,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"garden"}},[a("div",{staticClass:"text"},[a("h2",[t._v("Libacka Gård")]),t._v(" "),a("p",[t._v("\n    Libacka Gård ligger strax söder om Vellinge, utanför Skegrie By. Vi finns endast 20min söder om Malmö och 8min från Trelleborg och Vellinge.\n    ")]),t._v(" "),a("p",[t._v("\n    Gården är över 100år gammal men själva hästbiten började byggas 2001 när vi flyttade hem från Portugal.\n    ")]),t._v(" "),a("p",[t._v("\n    Idag har vi 27 boxplatser och 2 lösdrifter med unghästar och avelsston.\n    ")]),t._v(" "),a("p",[t._v("\n    Det finns ett ridhus med måtten 22m*42m med bra underlag och mycket ljusinsläpp. Våran utebana är på hela 30m*60m och används flitigt under sommarhalvåret. Det finns mycket hindermaterial att tillgå och bra träningsmöjligheter då där är pågående träningar nästan varje dag.\n    ")]),t._v(" "),a("p",[t._v("\n    Trevliga ridvägar på både fält och grusvägar. Man kan rida ner till stranden i Skåre och ända bort till Fredshögs ryttarförening.\n    ")]),t._v(" "),a("p",[t._v("\n    Vi har 2 stallar med varsin sadelkammare som är uppvärmda på vinterhalvåret. Gott om uppbindningsplatser samt spolspilta.\n    ")]),t._v(" "),a("p",[t._v("\n    Vi har många hagar i olika storlekar och även sommarbete.\n    ")])]),t._v(" "),a("img",{staticClass:"popupImg",attrs:{src:"/static/emilhopp.jpg",alt:"Emil hoppar"}})])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(29)}var r=a(6),i=a(30),s=a(0),l=e,o=s(r.a,i.a,!1,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"inackodering"}},[a("div",{staticClass:"text"},[a("p",[t._v("Vi har ett antal boxplatser som vi hyr ut till Inackorderingar.")]),t._v("\n\n        Hos oss ingår fri tillgång till halm samt 10kg ensilage.\n        "),a("br"),t._v("\n        Vi släpper ut och tar in varje dag. På vinterhalvåret är de oftast ute mellan 09:00-ca:14:00 och om man vill ha ute dem längre på sommarhalvåret så är det inga problem och då får de lunch i hagen.\n        "),a("br"),t._v("\n        Vi morgonfodrar och lunchfodrar alla dagar i veckan. Kvällsfodringen delar vi på och blir ca 3-4 gånger per månad per person.\n        "),a("br"),t._v("\n        Man har tillgång till anläggningen och alla faciliteter. Det är bra tillgång till ridhuset då detta oftast endast är bokat ett par timmar om dagen.\n        "),a("br"),t._v("\n        Vi utför det mesta mot betalning om man vill vara ledig eller är sjuk.\n        "),a("br"),t._v(" "),a("p",{staticClass:"orange box"},[t._v("Boxplats 3300kr/mån för 9kvm")]),a("p"),a("h4",[t._v("Vi utför även")]),t._v(" "),a("ul",[a("li",[t._v("Mockning samt fixa foder 50kr/gång eller 1100kr/mån för fullservice.")]),t._v(" "),a("li",[t._v("Longering/tömkörning av häst 30min 300kr")]),t._v("\n                täckesbyten, benlindor av, skydd på och av i hagen 200kr/mån"),t._v(" "),a("li",[t._v("Extra hö 90kr/mån för varje extra kilo hö (30kg=90kr)")]),t._v(" "),a("li",[t._v("Vi har en kallhyra på 1500kr/mån och en uppsägningstid på 2 månader")])]),t._v(" "),a("p",{staticClass:"blue box"},[t._v("Hos oss är det en mycket trevlig stallstämning. \n            "),a("br"),t._v("\n            Vi hjälps åt att hålla snyggt och rent och har trevliga träffar med fika och stallsnack.\n            "),a("br"),t._v(" "),a("b",[t._v("Kom gärna och titta!")])])]),t._v(" "),a("img",{staticClass:"popupImg",attrs:{src:"/static/fol.jpg",alt:"Smiley face"}})])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(32)}var r=a(33),i=a(0),s=e,l=i(null,r.a,!1,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"popup",attrs:{id:"gallery"}},[t._v("\n  Information om att vara medryttare och lektioner?\n")])},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(35)}var r=a(36),i=a(0),s=e,l=i(null,r.a,!1,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"popup",attrs:{id:"gallery"}},[t._v("\n  Information om Camillas uppfödning\n")])},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(38)}var r=a(39),i=a(0),s=e,l=i(null,r.a,!1,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"hastar"}},[a("div",{staticClass:"text"},[a("h2",[t._v("Libacka Gård")]),t._v("\n    Libacka Gård ligger strax söder om Vellinge, utanför Skegrie By. Vi finns endast 20min söder om Malmö och 8min från Trelleborg och Vellinge.\n    "),a("br"),t._v("\n    Gården är över 100år gammal men själva hästbiten började byggas 2001 när vi flyttade hem från Portugal.\n    "),a("br"),t._v("\n    Idag har vi 27 boxplatser och 2 lösdrifter med unghästar och avelsston.\n    "),a("br"),t._v("\n    Det finns ett ridhus med måtten 22m*42m med bra underlag och mycket ljusinsläpp. Våran utebana är på hela 30m*60m och används flitigt under sommarhalvåret. Det finns mycket hindermaterial att tillgå och bra träningsmöjligheter då där är pågående träningar nästan varje dag.\n    "),a("br"),t._v("\n    Trevliga ridvägar på både fält och grusvägar. Man kan rida ner till stranden i Skåre och ända bort till Fredshögs ryttarförening.\n    "),a("br"),t._v("\n    Vi har 2 stallar med varsin sadelkammare som är uppvärmda på vinterhalvåret. Gott om uppbindningsplatser samt spolspilta.\n    "),a("br"),t._v("\n    Vi har många hagar i olika storlekar och även sommarbete.\n  ")]),t._v(" "),a("img",{staticClass:"popupImg",attrs:{src:"/static/alla.jpg",alt:"Everybody"}})])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(41)}var r=a(7),i=a(45),s=a(0),l=e,o=s(r.a,i.a,!1,l,null,null);n.a=o.exports},function(t,n){},,,,function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"gallery"}},[a("gallery",{attrs:{images:t.images,index:t.index},on:{close:function(n){t.index=null}}}),t._v(" "),t._l(t.images,function(n,e){return a("div",{key:e,staticClass:"image",style:{backgroundImage:"url("+n+")",width:"300px",height:"200px"},on:{click:function(n){t.index=e}}})})],2)},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(47)}var r=a(48),i=a(0),s=e,l=i(null,r.a,!1,s,null,null);n.a=l.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;return(t._self._c||n)("div",{staticClass:"popup",attrs:{id:"gallery"}},[t._v("\n  Här kommer vi publicera event senare\n")])},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"hidden",attrs:{id:"popup"}},[a("div",{staticClass:"topBar"},[a("div",{staticClass:"close",on:{click:t.closePopup}},[t._v("✖")])]),t._v(" "),t.whichPopup===t.rentBox?a("rentBox"):t._e(),t._v(" "),t.whichPopup===t.theFarm?a("theFarm"):t._e(),t._v(" "),t.whichPopup===t.riding?a("riding"):t._e(),t._v(" "),t.whichPopup===t.breeding?a("breeding"):t._e(),t._v(" "),t.whichPopup===t.horses?a("horses"):t._e(),t._v(" "),t.whichPopup===t.gallery?a("gallery"):t._e(),t._v(" "),t.whichPopup===t.events?a("events"):t._e()],1)},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"popup",attrs:{id:"navigation"}},[a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("theFarm",n)}}},[a("h3",[t._v("Gården")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("horses",n)}}},[a("h3",[t._v("Hästar")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("rentBox",n)}}},[a("h3",[t._v("Inackodering")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("riding",n)}}},[a("h3",[t._v("Medryttare")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("breeding",n)}}},[a("h3",[t._v("Uppfödning")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("gallery",n)}}},[a("h3",[t._v("Galleri")])])]),t._v(" "),a("div",{staticClass:"navColumn"},[a("div",{staticClass:"navPicture",on:{click:function(n){t.openPopup("events",n)}}},[a("h3",[t._v("Events")])])]),t._v(" "),a("popup",{attrs:{whichPopup:t.whichPopup,"close-popup":t.closePopup}})],1)},r=[],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";function e(t){a(52)}var r=a(10),i=a(53),s=a(0),l=e,o=s(r.a,i.a,!1,l,null,null);n.a=o.exports},function(t,n){},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"bottomBar"}},[a("div",{staticClass:"barItems"},[a("div",{staticClass:"item"},[a("p",[a("span",[t._v("Mail")])]),t._v(" "),a("div",[t._v("ckhorselife"),a("br"),t._v("@gmail.com")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[a("span",[t._v("Telefon")])]),t._v(" "),a("div",[t._v("0730-284544")])]),t._v(" "),a("div",{staticClass:"item"},[a("p",[a("span",[t._v("Adress")])]),t._v(" "),a("div",[t._v("Libacka gård, "),a("br"),t._v("\n        Liebacksvägen,"),a("br"),t._v("\n        231 93 Trelleborg")])])])])}],i={render:e,staticRenderFns:r};n.a=i},function(t,n,a){"use strict";var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{attrs:{id:"app"}},[a("navigation"),t._v(" "),a("bottomBar")],1)},r=[],i={render:e,staticRenderFns:r};n.a=i}],[11]);
//# sourceMappingURL=client.3053f493.js.map