(this["webpackJsonpmemory-card"]=this["webpackJsonpmemory-card"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),r=n(4),a=n.n(r),s=n(2),o=[{id:1,src:"/img/Ami.webp",name:"Ami",checked:!1},{id:2,src:"/img/Baby Coco.webp",name:"Baby Coco",checked:!1},{id:3,src:"/img/Baby Cortex.webp",name:"Baby Cortex",checked:!1},{id:4,src:"/img/Baby Crash.webp",name:"Baby Crash",checked:!1},{id:5,src:"/img/Baby N. Tropy.webp",name:"Baby N. Tropy",checked:!1},{id:6,src:"/img/Baby T.webp",name:"Baby T",checked:!1},{id:7,src:"/img/Big Norm.webp",name:"Big Norm",checked:!1},{id:8,src:"/img/Chick.webp",name:"Chick",checked:!1},{id:9,src:"/img/Coco Bandicoot.webp",name:"Coco Bandicoot",checked:!1},{id:10,src:"/img/Crash Bandicoot.webp",name:"Crash Bandicoot",checked:!1},{id:11,src:"/img/Crunch Bandicoot.webp",name:"Crunch Bandicoot",checked:!1},{id:12,src:"/img/Dingodile.webp",name:"Dingodile",checked:!1},{id:13,src:"/img/Dr. N. Brio.webp",name:"Dr. N. Brio",checked:!1},{id:14,src:"/img/Dr. N. Gin.webp",name:"Dr. N. Gin",checked:!1},{id:15,src:"/img/Dr. N. Trophy.webp",name:"Dr. N. Trophy",checked:!1},{id:16,src:"/img/Dr. Neo Cortex.webp",name:"Dr. Neo Cortex",checked:!1},{id:17,src:"/img/Ebenezer Von Clutch.webp",name:"Ebenezer Von Clutch",checked:!1},{id:18,src:"/img/Emperor Velo XXVII.webp",name:"Emperor Velo XXVII",checked:!1},{id:19,src:"/img/Fake Crash.webp",name:"Fake Crash",checked:!1},{id:20,src:"/img/Geary.webp",name:"Geary",checked:!1},{id:21,src:"/img/Gnasty.webp",name:"Gnasty",checked:!1},{id:22,src:"/img/Hasty.webp",name:"Hasty",checked:!1},{id:23,src:"/img/Hunter.webp",name:"Hunter",checked:!1},{id:24,src:"/img/Iron Checkpoint Crate.webp",name:"Iron Checkpoint Crate",checked:!1},{id:25,src:"/img/Isabella.webp",name:"Isabella",checked:!1},{id:26,src:"/img/King Chicken.webp",name:"King Chicken",checked:!1},{id:27,src:"/img/Koala Kong.webp",name:"Koala Kong",checked:!1},{id:28,src:"/img/Komodo Joe.webp",name:"Komodo Joe",checked:!1},{id:29,src:"/img/Komodo Moe.webp",name:"Komodo Moe",checked:!1},{id:30,src:"/img/Krunk.webp",name:"Krunk",checked:!1},{id:31,src:"/img/Lab Assistant.webp",name:"Lab Assistant",checked:!1},{id:32,src:"/img/Liz.webp",name:"Liz",checked:!1},{id:33,src:"/img/Megamix.webp",name:"Megamix",checked:!1},{id:34,src:"/img/Megumi.webp",name:"Megumi",checked:!1},{id:35,src:"/img/N. Trance.webp",name:"N. Trance",checked:!1},{id:36,src:"/img/Nash.webp",name:"Nash",checked:!1},{id:37,src:"/img/Nina Cortex.webp",name:"Nina Cortex",checked:!1},{id:38,src:"/img/Nitros Oxide.webp",name:"Nitros Oxide",checked:!1},{id:39,src:"/img/Papu Papu.webp",name:"Papu Papu",checked:!1},{id:40,src:"/img/Pasadena O'Possum.webp",name:"Pasadena O'Possum",checked:!1},{id:41,src:"/img/Penta Penguin.webp",name:"Penta Penguin",checked:!1},{id:42,src:"/img/Pinstripe.webp",name:"Pinstripe",checked:!1},{id:43,src:"/img/Polar.webp",name:"Polar",checked:!1},{id:44,src:"/img/Pura.webp",name:"Pura",checked:!1},{id:45,src:"/img/Real Velo.webp",name:"Real Velo",checked:!1},{id:46,src:"/img/Rilla Roo.webp",name:"Rilla Roo",checked:!1},{id:47,src:"/img/Ripper Roo.webp",name:"Ripper Roo",checked:!1},{id:48,src:"/img/Small Norm.webp",name:"Small Norm",checked:!1},{id:49,src:"/img/Spyro.webp",name:"Spyro",checked:!1},{id:50,src:"/img/Stew.webp",name:"Stew",checked:!1},{id:51,src:"/img/Tawna.webp",name:"Tawna",checked:!1},{id:52,src:"/img/Tiny Tiger.webp",name:"Tiny Tiger",checked:!1},{id:53,src:"/img/Yaya Panda.webp",name:"Yaya Panda",checked:!1},{id:54,src:"/img/Zam.webp",name:"Zam",checked:!1},{id:55,src:"/img/Zem.webp",name:"Zem",checked:!1}],d=n(0);var m=function(){return Object(d.jsx)("div",{className:"header",children:Object(d.jsx)("h1",{children:"Crash Team Racing Memory Game"})})};var l=function(e){var t=e.currentScore,n=e.bestScore;return Object(d.jsxs)("div",{className:"scoreContainer",children:[Object(d.jsx)("p",{children:"Current Score:"}),Object(d.jsx)("p",{className:"score",children:t}),Object(d.jsx)("p",{children:"Best Score:"}),Object(d.jsx)("p",{className:"score",children:n})]})};var h,b=function(e){var t=e.masterList,n=e.currentScore,c=e.bestScore,i=e.setBestScore,r=e.setCurrentScore,a=e.setMasterList,s=e.setCharacterList,o=e.getRandomList,m=e.characterList,l=function(e){t[e.target.id-1].checked?(n>c&&i(n),r(0),a((function(){return t.map((function(e){return e.checked=!1,e}))})),s(o())):(a((function(n){n[e.target.id-1].checked=!0;var c=t.filter((function(e){return!0===e.checked}));return r(c.length),n})),s(o()))};return Object(d.jsx)("div",{className:"main",children:Object(d.jsx)("div",{className:"cards",children:m.map((function(e){var t=e.id,n=e.src,c=e.name;return Object(d.jsxs)("div",{className:"individualCard",children:[Object(d.jsx)("span",{onClick:l,className:"screenOverCharacters",id:t}),Object(d.jsxs)("div",{className:"characterContainer",children:[Object(d.jsx)("input",{src:"".concat("/Memory-Card").concat(n),alt:"image of "+c,type:"image"}),Object(d.jsx)("p",{children:c})]})]},t)}))})})};function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function u(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function g(e,t){var n=e.title,i=e.titleId,r=u(e,["title","titleId"]);return c.createElement("svg",p({width:"256px",height:"250px",viewBox:"0 0 256 250",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":i},r),n?c.createElement("title",{id:i},n):null,h||(h=c.createElement("g",null,c.createElement("path",{d:"M128.00106,0 C57.3172926,0 0,57.3066942 0,128.00106 C0,184.555281 36.6761997,232.535542 87.534937,249.460899 C93.9320223,250.645779 96.280588,246.684165 96.280588,243.303333 C96.280588,240.251045 96.1618878,230.167899 96.106777,219.472176 C60.4967585,227.215235 52.9826207,204.369712 52.9826207,204.369712 C47.1599584,189.574598 38.770408,185.640538 38.770408,185.640538 C27.1568785,177.696113 39.6458206,177.859325 39.6458206,177.859325 C52.4993419,178.762293 59.267365,191.04987 59.267365,191.04987 C70.6837675,210.618423 89.2115753,204.961093 96.5158685,201.690482 C97.6647155,193.417512 100.981959,187.77078 104.642583,184.574357 C76.211799,181.33766 46.324819,170.362144 46.324819,121.315702 C46.324819,107.340889 51.3250588,95.9223682 59.5132437,86.9583937 C58.1842268,83.7344152 53.8029229,70.715562 60.7532354,53.0843636 C60.7532354,53.0843636 71.5019501,49.6441813 95.9626412,66.2049595 C106.172967,63.368876 117.123047,61.9465949 128.00106,61.8978432 C138.879073,61.9465949 149.837632,63.368876 160.067033,66.2049595 C184.49805,49.6441813 195.231926,53.0843636 195.231926,53.0843636 C202.199197,70.715562 197.815773,83.7344152 196.486756,86.9583937 C204.694018,95.9223682 209.660343,107.340889 209.660343,121.315702 C209.660343,170.478725 179.716133,181.303747 151.213281,184.472614 C155.80443,188.444828 159.895342,196.234518 159.895342,208.176593 C159.895342,225.303317 159.746968,239.087361 159.746968,243.303333 C159.746968,246.709601 162.05102,250.70089 168.53925,249.443941 C219.370432,232.499507 256,184.536204 256,128.00106 C256,57.3066942 198.691187,0 128.00106,0 Z M47.9405593,182.340212 C47.6586465,182.976105 46.6581745,183.166873 45.7467277,182.730227 C44.8183235,182.312656 44.2968914,181.445722 44.5978808,180.80771 C44.8734344,180.152739 45.876026,179.97045 46.8023103,180.409216 C47.7328342,180.826786 48.2627451,181.702199 47.9405593,182.340212 Z M54.2367892,187.958254 C53.6263318,188.524199 52.4329723,188.261363 51.6232682,187.366874 C50.7860088,186.474504 50.6291553,185.281144 51.2480912,184.70672 C51.8776254,184.140775 53.0349512,184.405731 53.8743302,185.298101 C54.7115892,186.201069 54.8748019,187.38595 54.2367892,187.958254 Z M58.5562413,195.146347 C57.7719732,195.691096 56.4895886,195.180261 55.6968417,194.042013 C54.9125733,192.903764 54.9125733,191.538713 55.713799,190.991845 C56.5086651,190.444977 57.7719732,190.936735 58.5753181,192.066505 C59.3574669,193.22383 59.3574669,194.58888 58.5562413,195.146347 Z M65.8613592,203.471174 C65.1597571,204.244846 63.6654083,204.03712 62.5716717,202.981538 C61.4524999,201.94927 61.1409122,200.484596 61.8446341,199.710926 C62.5547146,198.935137 64.0575422,199.15346 65.1597571,200.200564 C66.2704506,201.230712 66.6095936,202.705984 65.8613592,203.471174 Z M75.3025151,206.281542 C74.9930474,207.284134 73.553809,207.739857 72.1039724,207.313809 C70.6562556,206.875043 69.7087748,205.700761 70.0012857,204.687571 C70.302275,203.678621 71.7478721,203.20382 73.2083069,203.659543 C74.6539041,204.09619 75.6035048,205.261994 75.3025151,206.281542 Z M86.046947,207.473627 C86.0829806,208.529209 84.8535871,209.404622 83.3316829,209.4237 C81.8013,209.457614 80.563428,208.603398 80.5464708,207.564772 C80.5464708,206.498591 81.7483088,205.631657 83.2786917,205.606221 C84.8005962,205.576546 86.046947,206.424403 86.046947,207.473627 Z M96.6021471,207.069023 C96.7844366,208.099171 95.7267341,209.156872 94.215428,209.438785 C92.7295577,209.710099 91.3539086,209.074206 91.1652603,208.052538 C90.9808515,206.996955 92.0576306,205.939253 93.5413813,205.66582 C95.054807,205.402984 96.4092596,206.021919 96.6021471,207.069023 Z",fill:"#161614"}))))}var C,j=c.forwardRef(g);n.p;function w(){return(w=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function k(e,t){if(null==e)return{};var n,c,i=function(e,t){if(null==e)return{};var n,c,i={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){var n=e.title,i=e.titleId,r=k(e,["title","titleId"]);return c.createElement("svg",w({width:"256px",height:"209px",viewBox:"0 0 256 209",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",preserveAspectRatio:"xMidYMid",ref:t,"aria-labelledby":i},r),n?c.createElement("title",{id:i},n):null,C||(C=c.createElement("g",null,c.createElement("path",{d:"M256,25.4500259 C246.580841,29.6272672 236.458451,32.4504868 225.834156,33.7202333 C236.678503,27.2198053 245.00583,16.9269929 248.927437,4.66307685 C238.779765,10.6812633 227.539325,15.0523376 215.57599,17.408298 C205.994835,7.2006971 192.34506,0.822 177.239197,0.822 C148.232605,0.822 124.716076,24.3375931 124.716076,53.3423116 C124.716076,57.4586875 125.181462,61.4673784 126.076652,65.3112644 C82.4258385,63.1210453 43.7257252,42.211429 17.821398,10.4359288 C13.3005011,18.1929938 10.710443,27.2151234 10.710443,36.8402889 C10.710443,55.061526 19.9835254,71.1374907 34.0762135,80.5557137 C25.4660961,80.2832239 17.3681846,77.9207088 10.2862577,73.9869292 C10.2825122,74.2060448 10.2825122,74.4260967 10.2825122,74.647085 C10.2825122,100.094453 28.3867003,121.322443 52.413563,126.14673 C48.0059695,127.347184 43.3661509,127.988612 38.5755734,127.988612 C35.1914554,127.988612 31.9009766,127.659938 28.694773,127.046602 C35.3777973,147.913145 54.7742053,163.097665 77.7569918,163.52185 C59.7820257,177.607983 37.1354036,186.004604 12.5289147,186.004604 C8.28987161,186.004604 4.10888474,185.75646 0,185.271409 C23.2431033,200.173139 50.8507261,208.867532 80.5109185,208.867532 C177.116529,208.867532 229.943977,128.836982 229.943977,59.4326002 C229.943977,57.1552968 229.893412,54.8901664 229.792282,52.6381454 C240.053257,45.2331635 248.958338,35.9825545 256,25.4500259",fill:"#55acee"}))))}var O=c.forwardRef(f);n.p;var v=function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{children:"Created by TJ"}),Object(d.jsxs)("div",{className:"logo",children:[Object(d.jsx)("a",{href:"https://github.com/timjacksonm",children:Object(d.jsx)(j,{})}),Object(d.jsx)("a",{href:"https://twitter.com/timjacksonm",children:Object(d.jsx)(O,{})})]})]})},x=n(5),y=n(6),N=n(9),S=n(8),I=n(7),M=n.n(I);var B={position:"fixed",pointerEvents:"none",width:"100%",height:"100%",top:0,left:0},P=function(e){Object(N.a)(n,e);var t=Object(S.a)(n);function n(e){var c;return Object(x.a)(this,n),(c=t.call(this,e)).nextTickAnimation=function(){c.animationInstance&&c.animationInstance(c.getAnimationSettings(.1,.3)),c.animationInstance&&c.animationInstance(c.getAnimationSettings(.7,.9))},c.getInstance=function(e){c.animationInstance=e},c.isAnimationEnabled=!1,c.animationInstance=null,c.intervalId=null,c}return Object(y.a)(n,[{key:"getAnimationSettings",value:function(e,t){return{startVelocity:30,spread:360,ticks:60,zIndex:0,particleCount:150,origin:{x:(n=e,c=t,Math.random()*(c-n)+n),y:Math.random()-.2}};var n,c}},{key:"startAnimation",value:function(){var e=this;this.isAnimationEnabled||(this.isAnimationEnabled=!0,this.intervalId=setInterval(this.nextTickAnimation,400),setTimeout((function(){e.pauseAnimation()}),6e3))}},{key:"pauseAnimation",value:function(){return this.isAnimationEnabled=!1,this.intervalId&&clearInterval(this.intervalId)}},{key:"render",value:function(){return this.startAnimation(),Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(M.a,{refConfetti:this.getInstance,style:B})})}}]),n}(i.a.Component);n(16);var E=function(){var e=Object(c.useState)(o),t=Object(s.a)(e,2),n=t[0],i=t[1],r=Object(c.useState)(0),a=Object(s.a)(r,2),h=a[0],p=a[1],u=Object(c.useState)(0),g=Object(s.a)(u,2),C=g[0],j=g[1],w=Object(c.useState)(!1),k=Object(s.a)(w,2),f=k[0],O=k[1],x=Object(c.useState)(null),y=Object(s.a)(x,2),N=y[0],S=y[1],I=function(){for(var e=[];12!==e.length;){var t=Math.round(54*Math.random()+1);(e.length<11&&!1===e.includes(t)||e.length<12&&!1===e.includes(t)&&!1===o[t-1].checked)&&e.push(t)}for(var n=[],c=function(t){var c=o.find((function(n){return n.id===e[t]}));n.push(c)},i=0;i<e.length;i++)c(i);return n},M=Object(c.useState)(I),B=Object(s.a)(M,2),E=B[0],T=B[1];return Object(c.useEffect)((function(){0!==C&&(O(!0),S((function(){return Object(d.jsx)("div",{className:"announcement",children:"New Best Score!"})})),setTimeout((function(){O(!1),S(null)}),7500))}),[C]),Object(d.jsxs)("div",{className:"content",children:[f&&Object(d.jsx)(P,{}),Object(d.jsx)(m,{}),N,Object(d.jsx)(l,{currentScore:h,bestScore:C}),Object(d.jsx)(b,{masterList:n,characterList:E,currentScore:h,bestScore:C,setMasterList:i,setCharacterList:T,setCurrentScore:p,setBestScore:j,getRandomList:I}),Object(d.jsx)(v,{})]})};a.a.render(Object(d.jsx)(i.a.StrictMode,{children:Object(d.jsx)(E,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.92433de5.chunk.js.map