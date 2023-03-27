(()=>{"use strict";var n={406:(n,e,r)=>{r.d(e,{Z:()=>s});var t=r(81),o=r.n(t),i=r(645),a=r.n(i)()(o());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Alegreya+Sans+SC:wght@500;800&family=Great+Vibes&display=swap);"]),a.push([n.id,"*,\r\n*::before,\r\n*::after {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nhtml,\r\nbody {\r\n  display: flex;\r\n  flex-direction: column;\r\n  font-size: 62.5%;\r\n  height: 100%;\r\n}\r\n\r\nmain {\r\n  flex-grow: 1;\r\n}\r\n\r\n.date {\r\n  display: flex;\r\n  justify-content: end;\r\n  font-size: 1.6rem;\r\n  padding: 1rem;\r\n}\r\n\r\n.contentSection.hidden {\r\n  display: none;\r\n}\r\n\r\n/* header section */\r\nheader {\r\n  display: flex;\r\n  justify-content: end;\r\n  align-items: center;\r\n  background-color: #c7d6d8;\r\n  padding: 1rem;\r\n}\r\n\r\n.logo {\r\n  font-family: 'Great Vibes', cursive;\r\n  font-size: 3rem;\r\n  margin-right: auto;\r\n}\r\n\r\nul li {\r\n  display: inline-block;\r\n  margin: 0 1rem;\r\n  font-size: 1.2rem;\r\n  outline: 0.2rem solid black;\r\n  outline-offset: 0.4rem;\r\n  cursor: pointer;\r\n}\r\n\r\nul li:hover {\r\n  color: white;\r\n  transform: scale(1.4);\r\n}\r\n\r\nh1,\r\nh2 {\r\n  font-size: 3rem;\r\n}\r\n\r\nhr {\r\n  width: 50%;\r\n}\r\n\r\n/* Books section */\r\n.container {\r\n  font-family: 'Great Vibes', cursive;\r\n  text-align: center;\r\n  width: 50%;\r\n  margin: 1rem auto;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n\r\n.booksContainer {\r\n  font-size: 1.5rem;\r\n  width: 90%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  margin: auto;\r\n  border: solid black 3px;\r\n}\r\n\r\n.books-section__h1 {\r\n  font-size: 5rem;\r\n  margin: 1rem;\r\n  text-align: center;\r\n}\r\n\r\n.book {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  height: 4rem;\r\n}\r\n\r\n.book:nth-child(even) {\r\n  background-color: #c7d6d8;\r\n}\r\n\r\n.bookTitleAuthor {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.bookTitleAuthor > * {\r\n  margin: 0 0.3rem;\r\n}\r\n\r\nbutton {\r\n  height: 2.5rem;\r\n  width: 7rem;\r\n  margin: 0 1rem;\r\n  background-color: white;\r\n  box-shadow: 5px 4px black;\r\n}\r\n\r\n/* Add book section */\r\n.add-books__h2 {\r\n  font-size: 5rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.addBookForm input,\r\ninput:focus {\r\n  width: 85%;\r\n  border: solid black 3px;\r\n  color: black;\r\n  background-color: rgba(0, 0, 0, 0.1);\r\n  box-shadow: none;\r\n  padding: 1rem;\r\n  cursor: pointer;\r\n  margin: 1.2rem 0 2.2rem;\r\n}\r\n\r\n.addBookForm button {\r\n  margin: auto;\r\n}\r\n\r\n/* Contact section */\r\n.contactSection {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  height: 100%;\r\n}\r\n\r\n.contact-section__h2 {\r\n  font-size: 5rem;\r\n  margin: 1rem;\r\n}\r\n\r\n.contact-section__p {\r\n  font-size: 3rem;\r\n  margin: 1rem;\r\n}\r\n\r\n/* Footer section */\r\nfooter {\r\n  font-size: 2.2rem;\r\n  text-align: center;\r\n  padding: 1rem;\r\n  background-color: #c7d6d8;\r\n  height: 8rem;\r\n}\r\n\r\n#error-message {\r\n  color: red;\r\n  margin-top: 5rem;\r\n  font-size: 3rem;\r\n}\r\n\r\n#success-message {\r\n  color: green;\r\n  margin-top: 2rem;\r\n  font-size: 3rem;\r\n}\r\n",""]);const s=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var r="",t=void 0!==e[5];return e[4]&&(r+="@supports (".concat(e[4],") {")),e[2]&&(r+="@media ".concat(e[2]," {")),t&&(r+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),r+=n(e),t&&(r+="}"),e[2]&&(r+="}"),e[4]&&(r+="}"),r})).join("")},e.i=function(n,r,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var d=0;d<n.length;d++){var l=[].concat(n[d]);t&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),r&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=r):l[2]=r),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function r(n){for(var r=-1,t=0;t<e.length;t++)if(e[t].identifier===n){r=t;break}return r}function t(n,t){for(var i={},a=[],s=0;s<n.length;s++){var c=n[s],d=t.base?c[0]+t.base:c[0],l=i[d]||0,u="".concat(d," ").concat(l);i[d]=l+1;var m=r(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==m)e[m].references++,e[m].updater(f);else{var p=o(f,t);t.byIndex=s,e.splice(s,0,{identifier:u,updater:p,references:1})}a.push(u)}return a}function o(n,e){var r=e.domAPI(e);return r.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;r.update(n=e)}else r.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var s=r(i[a]);e[s].references--}for(var c=t(n,o),d=0;d<i.length;d++){var l=r(i[d]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=c}}},569:n=>{var e={};n.exports=function(n,r){var t=function(n){if(void 0===e[n]){var r=document.querySelector(n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(n){r=null}e[n]=r}return e[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(r)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,r)=>{n.exports=function(n){var e=r.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(r){!function(n,e,r){var t="";r.supports&&(t+="@supports (".concat(r.supports,") {")),r.media&&(t+="@media ".concat(r.media," {"));var o=void 0!==r.layer;o&&(t+="@layer".concat(r.layer.length>0?" ".concat(r.layer):""," {")),t+=r.css,o&&(t+="}"),r.media&&(t+="}"),r.supports&&(t+="}");var i=r.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(t,n,e.options)}(e,n,r)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function r(t){var o=e[t];if(void 0!==o)return o.exports;var i=e[t]={id:t,exports:{}};return n[t](i,i.exports,r),i.exports}r.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return r.d(e,{a:e}),e},r.d=(n,e)=>{for(var t in e)r.o(e,t)&&!r.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},r.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),r.nc=void 0,(()=>{const n=n=>""!==n.trim()&&/^[a-zA-Z0-9\s(),.\\-]+$/.test(n),e=()=>{const n=document.querySelector(".live-date"),e=DateTime.local().toLocaleString(DateTime.DATETIME_MED);n.textContent=e},t=(e,r)=>{document.getElementById("addBookButton").addEventListener("click",(t=>{t.preventDefault();const o=document.getElementById("bookTitle"),i=document.getElementById("bookAuthor"),a=o.value,s=i.value,c=document.getElementById("error-message"),d=document.getElementById("success-message");if(c.textContent="",d.textContent="",!n(a)||!n(s))return c.textContent="Please enter a valid title and author name (letters and numbers only).",void setTimeout((()=>{c.textContent=""}),2e3);const l=new class{constructor(n,e){this.title=n,this.author=e}}(a,s);e.addBook(l),r.render(),o.value="",i.value="",d.textContent="Book successfully created.",setTimeout((()=>{d.textContent=""}),2e3)}))};var o=r(379),i=r.n(o),a=r(795),s=r.n(a),c=r(569),d=r.n(c),l=r(565),u=r.n(l),m=r(216),f=r.n(m),p=r(589),h=r.n(p),g=r(406),v={};v.styleTagTransform=h(),v.setAttributes=u(),v.insert=d().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=f(),i()(g.Z,v),g.Z&&g.Z.locals&&g.Z.locals,document.addEventListener("DOMContentLoaded",(()=>{const n=new class{constructor(){this.booksInfo=JSON.parse(localStorage.getItem("books")||"[]")}renderBooks=n=>{this.booksInfo.forEach(((e,r)=>{n(e,(()=>{this.removeBook(r)}))}))};removeBook=n=>{this.booksInfo.splice(n,1),this.updateStorage()};addBook=n=>{this.booksInfo.push(n),this.updateStorage()};updateStorage=()=>{localStorage.setItem("books",JSON.stringify(this.booksInfo))}},r=new class{constructor(n){this.bookList=n,this.bookTemplate=document.getElementById("bookInfoTemplate"),this.booksContainer=document.querySelector(".booksContainer")}render=()=>{this.booksContainer.innerHTML="",this.bookList.renderBooks(((n,e)=>{const r=this.bookTemplate.content.cloneNode(!0);r.querySelector("h4").textContent=n.title,r.querySelector("p").textContent=n.author,r.querySelector(".removeButton").addEventListener("click",(()=>{e(),this.render()})),this.booksContainer.appendChild(r)}))}}(n);t(n,r),(()=>{const n=document.getElementById("navBooks"),e=document.getElementById("navAddBook"),r=document.getElementById("navContact"),t=document.getElementById("booksSection"),o=document.getElementById("addBookSection"),i=document.getElementById("contactSection"),a=n=>{t.classList.add("hidden"),o.classList.add("hidden"),i.classList.add("hidden"),n.classList.remove("hidden")};n.addEventListener("click",(()=>{a(t)})),e.addEventListener("click",(()=>{a(o)})),r.addEventListener("click",(()=>{a(i)}))})(),r.render(),e(),setInterval(e,3e4)}))})()})();