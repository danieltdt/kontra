var kontra=function(){"use strict";let t,e,i={};function s(t,e){i[t]=i[t]||[],i[t].push(e)}function n(t,...e){i[t]&&i[t].map(t=>t(...e))}function h(){return t}function r(){return e}class o{constructor({spriteSheet:t,frames:e,frameRate:i,loop:s=!0}={}){this.spriteSheet=t,this.frames=e,this.frameRate=i,this.loop=s;let{width:n,height:h,margin:r=0}=t.frame;this.width=n,this.height=h,this.margin=r,this._f=0,this._a=0}clone(){return a(this)}reset(){this._f=0,this._a=0}update(t=1/60){if(this.loop||this._f!=this.frames.length-1)for(this._a+=t;this._a*this.frameRate>=1;)this._f=++this._f%this.frames.length,this._a-=1/this.frameRate}render({x:t,y:e,width:i=this.width,height:s=this.height,context:n=r()}={}){let h=this.frames[this._f]/this.spriteSheet._f|0,o=this.frames[this._f]%this.spriteSheet._f|0;n.drawImage(this.spriteSheet.image,o*this.width+(2*o+1)*this.margin,h*this.height+(2*h+1)*this.margin,this.width,this.height,t,e,i,s)}}function a(t){return new o(t)}a.prototype=o.prototype,a.class=o;let c=/(jpeg|jpg|gif|png)$/,l=/(wav|mp3|ogg|aac)$/,d=/^\//,u=/\/$/,f=new WeakMap,g="",p="",m="";function _(t,e){return new URL(t,e).href}function w(t,e){return[t.replace(u,""),t?e.replace(d,""):e].filter(t=>t).join("/")}function y(t){return t.split(".").pop()}function x(t){let e=t.replace("."+y(t),"");return 2==e.split("/").length?e.replace(d,""):e}let b={},v={},j={};function A(){window.__k||(window.__k={dm:f,u:_,d:j,i:b})}function S(t){return A(),new Promise((e,i)=>{let s,h,r;if(s=w(g,t),b[s])return e(b[s]);(h=new Image).onload=function(){r=_(s,window.location.href),b[x(t)]=b[s]=b[r]=this,n("assetLoaded",this,t),e(this)},h.onerror=function(){i(s)},h.src=s})}function O(t){return new Promise((e,i)=>{let s,h,r,o;return s=new Audio,h=function(t){return{wav:"",mp3:t.canPlayType("audio/mpeg;"),ogg:t.canPlayType('audio/ogg; codecs="vorbis"'),aac:t.canPlayType("audio/aac;")}}(s),(t=[].concat(t).reduce((t,e)=>t||(h[y(e)]?e:null),0))?(r=w(p,t),v[r]?e(v[r]):(s.addEventListener("canplay",function(){o=_(r,window.location.href),v[x(t)]=v[r]=v[o]=this,n("assetLoaded",this,t),e(this)}),s.onerror=function(){i(r)},s.src=r,void s.load())):i(t)})}function P(t){let e,i;return A(),e=w(m,t),j[e]?Promise.resolve(j[e]):fetch(e).then(t=>{if(!t.ok)throw t;return t.clone().json().catch(()=>t.text())}).then(s=>(i=_(e,window.location.href),"object"==typeof s&&f.set(s,i),j[x(t)]=j[e]=j[i]=s,n("assetLoaded",s,t),s))}const E=()=>{};function L(){let t=h();r().clearRect(0,0,t.width,t.height)}let k={},M={},I={13:"enter",27:"esc",32:"space",37:"left",38:"up",39:"right",40:"down"};function z(t){let e=I[t.which];M[e]=!0,k[e]&&k[e](t)}function D(t){M[I[t.which]]=!1}function W(){M={}}function C(t){let e=t.substr(t.search(/[A-Z]/));return e[0].toLowerCase()+e.substr(1)}function R(t,e){let i=t.indexOf(e);-1!==i&&t.splice(i,1)}let T=[],N=[],X={},Y=[],U={},q={0:"left",1:"middle",2:"right"},F={x:0,y:0,radius:5};function K(t){let e=t.x,i=t.y;t.anchor&&(e-=t.width*t.anchor.x,i-=t.height*t.anchor.y);let s=F.x-Math.max(e,Math.min(F.x,e+t.width)),n=F.y-Math.max(i,Math.min(F.y,i+t.height));return s*s+n*n<F.radius*F.radius}function $(){let t,e,i=N.length?N:T;for(let s=i.length-1;s>=0;s--)if(e=(t=i[s]).collidesWithPointer?t.collidesWithPointer(F):K(t))return t}function B(t){let e=void 0!==t.button?q[t.button]:"left";U[e]=!0,Q(t,"onDown")}function H(t){let e=void 0!==t.button?q[t.button]:"left";U[e]=!1,Q(t,"onUp")}function J(t){Q(t,"onOver")}function G(){U={}}function Q(t,e){let i,s,n=h();if(!n)return;-1!==["touchstart","touchmove","touchend"].indexOf(t.type)?(i=(t.touches[0]||t.changedTouches[0]).clientX,s=(t.touches[0]||t.changedTouches[0]).clientY):(i=t.clientX,s=t.clientY);let r=n.height/n.offsetHeight,o=n.getBoundingClientRect(),a=(i-o.left)*r,c=(s-o.top)*r;F.x=a,F.y=c,t.preventDefault();let l=$();l&&l[e]&&l[e](t),X[e]&&X[e](t,l)}class V{constructor({create:t,maxSize:e=1024}={}){this._c=t,this._i=0,this.objects=[t()],this.size=1,this.maxSize=e}get(t={}){if(this.objects.length==this._i){if(this.size===this.maxSize)return;for(let t=0;t<this.size&&this.objects.length<this.maxSize;t++)this.objects.unshift(this._c());this.size=this.objects.length}let e=this.objects.shift();return e.init(t),this.objects.push(e),this._i++,e}getAliveObjects(){return this.objects.slice(this.objects.length-this._i)}clear(){this._i=this.objects.length=0,this.size=1,this.objects.push(this._c())}update(t){let e,i=this.size-1,s=Math.max(this.objects.length-this._i,0);for(;i>=s;)(e=this.objects[i]).update(t),e.isAlive()?i--:(this.objects=this.objects.splice(i,1).concat(this.objects),this._i--,s++)}render(){let t=Math.max(this.objects.length-this._i,0);for(let e=this.size-1;e>=t;e--)this.objects[e].render()}}function Z(t){return new V(t)}function tt(t,e){let i=[],s=e.x+e.width/2,n=e.y+e.height/2,h=t.y<n&&t.y+t.height>=e.y,r=t.y+t.height>=n&&t.y<e.y+e.height;return t.x<s&&t.x+t.width>=e.x&&(h&&i.push(0),r&&i.push(2)),t.x+t.width>=s&&t.x<e.x+e.width&&(h&&i.push(1),r&&i.push(3)),i}Z.prototype=V.prototype,Z.class=V;class et{constructor({maxDepth:t=3,maxObjects:e=25,bounds:i}={}){this.maxDepth=t,this.maxObjects=e;let s=h();this.bounds=i||{x:0,y:0,width:s.width,height:s.height},this._b=!1,this._d=0,this._o=[],this._s=[],this._p=null}clear(){this._s.map(function(t){t.clear()}),this._b=!1,this._o.length=0}get(t){let e,i,s=new Set;for(;this._s.length&&this._b;){for(e=tt(t,this.bounds),i=0;i<e.length;i++)this._s[e[i]].get(t).forEach(t=>s.add(t));return Array.from(s)}return this._o.filter(e=>e!==t)}add(){let t,e,i,s;for(e=0;e<arguments.length;e++)if(i=arguments[e],Array.isArray(i))this.add.apply(this,i);else if(this._b)this._a(i);else if(this._o.push(i),this._o.length>this.maxObjects&&this._d<this.maxDepth){for(this._sp(),t=0;s=this._o[t];t++)this._a(s);this._o.length=0}}_a(t,e,i){for(e=tt(t,this.bounds),i=0;i<e.length;i++)this._s[e[i]].add(t)}_sp(t,e,i){if(this._b=!0,!this._s.length)for(t=this.bounds.width/2|0,e=this.bounds.height/2|0,i=0;i<4;i++)this._s[i]=it({bounds:{x:this.bounds.x+(i%2==1?t:0),y:this.bounds.y+(i>=2?e:0),width:t,height:e},maxDepth:this.maxDepth,maxObjects:this.maxObjects}),this._s[i]._d=this._d+1}}function it(t){return new et(t)}it.prototype=et.prototype,it.class=et;class st{constructor(t=0,e=0){this._x=t,this._y=e}add(t,e=1){return nt(this.x+(t.x||0)*e,this.y+(t.y||0)*e,this)}clamp(t,e,i,s){this._c=!0,this._a=t,this._b=e,this._d=i,this._e=s}get x(){return this._x}get y(){return this._y}set x(t){this._x=this._c?Math.min(Math.max(this._a,t),this._d):t}set y(t){this._y=this._c?Math.min(Math.max(this._b,t),this._e):t}}function nt(t,e,i={}){let s=new st(t,e);return i._c&&(s.clamp(i._a,i._b,i._d,i._e),s.x=t,s.y=e),s}nt.prototype=st.prototype,nt.class=st;class ht{constructor(t){this.init(t)}init(t={}){let{x:e,y:i,dx:s,dy:n,ddx:h,ddy:o,width:a,height:c,image:l}=t;this.position=nt(e,i),this.velocity=nt(s,n),this.acceleration=nt(h,o),this._fx=this._fy=1,this.width=this.height=this.rotation=0,this.ttl=1/0,this.anchor={x:0,y:0},this.context=r();for(let e in t)this[e]=t[e];l&&(this.width=void 0!==a?a:l.width,this.height=void 0!==c?c:l.height),this.sx=0,this.sy=0}get x(){return this.position.x}get y(){return this.position.y}get dx(){return this.velocity.x}get dy(){return this.velocity.y}get ddx(){return this.acceleration.x}get ddy(){return this.acceleration.y}get animations(){return this._a}get viewX(){return this.x-this.sx}get viewY(){return this.y-this.sy}get width(){return this._w}get height(){return this._h}set x(t){this.position.x=t}set y(t){this.position.y=t}set dx(t){this.velocity.x=t}set dy(t){this.velocity.y=t}set ddx(t){this.acceleration.x=t}set ddy(t){this.acceleration.y=t}set animations(t){let e,i;for(e in this._a={},t)this._a[e]=t[e].clone(),i=i||this._a[e];this.currentAnimation=i,this.width=this.width||i.width,this.height=this.height||i.height}set viewX(t){}set viewY(t){}set width(t){let e=t<0?-1:1;this._fx=e,this._w=t*e}set height(t){let e=t<0?-1:1;this._fy=e,this._h=t*e}isAlive(){return this.ttl>0}collidesWith(t){return!1}update(t){this.advance(t)}render(){this.draw()}playAnimation(t){this.currentAnimation=this.animations[t],this.currentAnimation.loop||this.currentAnimation.reset()}advance(t){this.velocity=this.velocity.add(this.acceleration,t),this.position=this.position.add(this.velocity,t),this.ttl--,this.currentAnimation&&this.currentAnimation.update(t)}draw(){let t=-this.width*this.anchor.x,e=-this.height*this.anchor.y;if(this.context.save(),this.context.translate(this.viewX,this.viewY),this.rotation&&this.context.rotate(this.rotation),-1==this._fx||-1==this._fy){let i=this.width/2+t,s=this.height/2+e;this.context.translate(i,s),this.context.scale(this._fx,this._fy),this.context.translate(-i,-s)}this.image?this.context.drawImage(this.image,0,0,this.image.width,this.image.height,t,e,this.width,this.height):this.currentAnimation?this.currentAnimation.render({x:t,y:e,width:this.width,height:this.height,context:this.context}):(this.context.fillStyle=this.color,this.context.fillRect(t,e,this.width,this.height)),this.context.restore()}}function rt(t){return new ht(t)}function ot(t){if(+t===t)return t;let e=[],i=t.split(".."),s=+i[0],n=+i[1],h=s;if(s<n)for(;h<=n;h++)e.push(h);else for(;h>=n;h--)e.push(h);return e}rt.prototype=ht.prototype,rt.class=ht;class at{constructor({image:t,frameWidth:e,frameHeight:i,frameMargin:s,animations:n}={}){this.animations={},this.image=t,this.frame={width:e,height:i,margin:s},this._f=t.width/e|0,this.createAnimations(n)}createAnimations(t){let e,i;for(i in t){let{frames:s,frameRate:n,loop:h}=t[i];e=[],[].concat(s).map(t=>{e=e.concat(ot(t))}),this.animations[i]=a({spriteSheet:this,frames:e,frameRate:n,loop:h})}}}function ct(t){return new at(t)}return ct.prototype=at.prototype,ct.class=at,{Animation:a,imageAssets:b,audioAssets:v,dataAssets:j,setImagePath:function(t){g=t},setAudioPath:function(t){p=t},setDataPath:function(t){m=t},loadImage:S,loadAudio:O,loadData:P,load:function(...t){return A(),Promise.all(t.map(t=>{let e=y([].concat(t)[0]);return e.match(c)?S(t):e.match(l)?O(t):P(t)}))},spriteCollidesWith:function(t,e){if(t.rotation||e.rotation)return null;let i=t.x-t.width*t.anchor.x,s=t.y-t.height*t.anchor.y,n=e.x,h=e.y;return e.anchor&&(n-=e.width*e.anchor.x,h-=e.height*e.anchor.y),i<n+e.width&&i+t.width>n&&s<h+e.height&&s+t.height>h},init:function(i){return t=document.getElementById(i)||i||document.querySelector("canvas"),(e=t.getContext("2d")).imageSmoothingEnabled=!1,n("init"),{canvas:t,context:e}},getCanvas:h,getContext:r,on:s,off:function(t,e){let s;!i[t]||(s=i[t].indexOf(e))<0||i[t].splice(s,1)},emit:n,GameLoop:function({fps:t=60,clearCanvas:e=!0,update:i,render:s}={}){let h,r,o,a,c,l=0,d=1e3/t,u=1/t,f=e?L:E;function g(){if(r=requestAnimationFrame(g),o=performance.now(),a=o-h,h=o,!(a>1e3)){for(n("tick"),l+=a;l>=d;)c.update(u),l-=d;f(),c.render()}}return c={update:i,render:s,isStopped:!0,start(){h=performance.now(),this.isStopped=!1,requestAnimationFrame(g)},stop(){this.isStopped=!0,cancelAnimationFrame(r)}}},keyMap:I,initKeys:function(){let t;for(t=0;t<26;t++)I[65+t]=(10+t).toString(36);for(t=0;t<10;t++)I[48+t]=""+t;window.addEventListener("keydown",z),window.addEventListener("keyup",D),window.addEventListener("blur",W)},bindKeys:function(t,e){[].concat(t).map(t=>k[t]=e)},unbindKeys:function(t){[].concat(t).map(t=>k[t]=0)},keyPressed:function(t){return!!M[t]},registerPlugin:function(t,e){let i=t.prototype;i&&(i._inc||(i._inc={},i._bInc=function(t,e,...i){return this._inc[e].before.reduce((e,i)=>{let s=i(t,...e);return s||e},i)},i._aInc=function(t,e,i,...s){return this._inc[e].after.reduce((e,i)=>{let n=i(t,e,...s);return n||e},i)}),Object.getOwnPropertyNames(e).forEach(t=>{let s=C(t);i[s]&&(i["_o"+s]||(i["_o"+s]=i[s],i[s]=function(...t){let e=this._bInc(this,s,...t),n=i["_o"+s].call(this,...e);return this._aInc(this,s,n,...t)}),i._inc[s]||(i._inc[s]={before:[],after:[]}),t.startsWith("before")?i._inc[s].before.push(e[t]):t.startsWith("after")&&i._inc[s].after.push(e[t]))}))},unregisterPlugin:function(t,e){let i=t.prototype;i&&i._inc&&Object.getOwnPropertyNames(e).forEach(t=>{let s=C(t);t.startsWith("before")?R(i._inc[s].before,e[t]):t.startsWith("after")&&R(i._inc[s].after,e[t])})},extendObject:function(t,e){let i=t.prototype;i&&Object.getOwnPropertyNames(e).forEach(t=>{i[t]||(i[t]=e[t])})},initPointer:function(){let t=h();t.addEventListener("mousedown",B),t.addEventListener("touchstart",B),t.addEventListener("mouseup",H),t.addEventListener("touchend",H),t.addEventListener("blur",G),t.addEventListener("mousemove",J),t.addEventListener("touchmove",J),s("tick",()=>{N.length=0,T.map(t=>{N.push(t)}),T.length=0})},pointer:F,track:function(t){[].concat(t).map(t=>{t._r||(t._r=t.render,t.render=function(){T.push(this),this._r()},Y.push(t))})},untrack:function(t){[].concat(t).map(t=>{t.render=t._r,t._r=0;let e=Y.indexOf(t);-1!==e&&Y.splice(e,1)})},pointerOver:function(t){return!!Y.includes(t)&&$()===t},onPointerDown:function(t){X.onDown=t},onPointerUp:function(t){X.onUp=t},pointerPressed:function(t){return!!U[t]},Pool:Z,Quadtree:it,Sprite:rt,SpriteSheet:ct,setStoreItem:function(t,e){void 0===e?localStorage.removeItem(t):localStorage.setItem(t,JSON.stringify(e))},getStoreItem:function(t){let e=localStorage.getItem(t);try{e=JSON.parse(e)}catch(t){}return e},TileEngine:function(t={}){let{width:e,height:i,tilewidth:s,tileheight:n,context:o=r(),tilesets:a,layers:c}=t,l=e*s,d=i*n,u=document.createElement("canvas"),f=u.getContext("2d");u.width=l,u.height=d;let g={},p={},m=[],_=Object.assign({context:o,mapwidth:l,mapheight:d,_sx:0,_sy:0,_d:!1,get sx(){return this._sx},get sy(){return this._sy},set sx(t){this._sx=Math.min(Math.max(0,t),l-h().width),m.forEach(t=>t.sx=this._sx)},set sy(t){this._sy=Math.min(Math.max(0,t),d-h().height),m.forEach(t=>t.sy=this._sy)},render(){this._d&&(this._d=!1,this._p()),b(u)},renderLayer(t){let e=p[t],i=g[t];e||((e=document.createElement("canvas")).width=l,e.height=d,p[t]=e,_._r(i,e.getContext("2d"))),b(e)},layerCollidesWith(t,e){let i=e.x,s=e.y;e.anchor&&(i-=e.width*e.anchor.x,s-=e.height*e.anchor.y);let n=w(s),h=y(i),r=w(s+e.height),o=y(i+e.width),a=g[t];for(let t=n;t<=r;t++)for(let e=h;e<=o;e++)if(a.data[e+t*this.width])return!0;return!1},tileAtLayer(t,e){let i=e.row||w(e.y),s=e.col||y(e.x);return g[t]?g[t].data[s+i*_.width]:-1},setTileAtLayer(t,e,i){let s=e.row||w(e.y),n=e.col||y(e.x);g[t]&&(this._d=!0,g[t].data[n+s*_.width]=i)},setLayer(t,e){g[t]&&(this._d=!0,g[t].data=e)},addObject(t){m.push(t),t.sx=this._sx,t.sy=this._sy},removeObject(t){let e=m.indexOf(t);-1!==e&&(m.splice(e,1),t.sx=t.sy=0)},_r:function(t,e){e.save(),e.globalAlpha=t.opacity,t.data.map((t,i)=>{if(!t)return;let s;for(let e=_.tilesets.length-1;e>=0&&(s=_.tilesets[e],!(t/s.firstgid>=1));e--);let n=s.tilewidth||_.tilewidth,h=s.tileheight||_.tileheight,r=s.margin||0,o=s.image,a=t-s.firstgid,c=s.columns||o.width/(n+r)|0,l=i%_.width*n,d=(i/_.width|0)*h,u=a%c*(n+r),f=(a/c|0)*(h+r);e.drawImage(o,u,f,n,h,l,d,n,h)}),e.restore()},_p:x},t);function w(t){return t/_.tileheight|0}function y(t){return t/_.tilewidth|0}function x(){_.layers&&_.layers.map(t=>{g[t.name]=t,!1!==t.visible&&_._r(t,f)})}function b(t){const{width:e,height:i}=h(),s=Math.min(t.width,e),n=Math.min(t.height,i);_.context.drawImage(t,_.sx,_.sy,s,n,0,0,s,n)}return _.tilesets.map(e=>{let i=(window.__k?window.__k.dm.get(t):"")||window.location.href;if(e.source){let t=window.__k.d[window.__k.u(e.source,i)];Object.keys(t).map(i=>{e[i]=t[i]})}if(""+e.image===e.image){let t=window.__k.i[window.__k.u(e.image,i)];e.image=t}}),x(),_},Vector:nt}}();