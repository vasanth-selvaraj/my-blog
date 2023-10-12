"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[943],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),s=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(a),g=r,h=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},204:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const o={slug:"object-copying",title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",authors:"Vasanth",tags:["React","JavaScript","Begginer","useState","state Management","React Hooks"]},i=void 0,c={permalink:"/object-copying",source:"@site/blog/2023-10-11/object-copying.mdx",title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",description:"In JavaScript, when you create a new object and assign it to a variable, the object is stored in memory and the variable points to the memory location where the object is stored.",date:"2023-10-11T00:00:00.000Z",formattedDate:"October 11, 2023",tags:[{label:"React",permalink:"/tags/react"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"Begginer",permalink:"/tags/begginer"},{label:"useState",permalink:"/tags/use-state"},{label:"state Management",permalink:"/tags/state-management"},{label:"React Hooks",permalink:"/tags/react-hooks"}],readingTime:4.135,hasTruncateMarker:!0,authors:[{name:"Vasanth Selvaraj",title:"Senior Full stack Developer",url:"https://vasanth.tech",imageURL:"https://vasanth.tech/_next/static/media/memoji.396c05ff.png",key:"Vasanth"}],frontMatter:{slug:"object-copying",title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",authors:"Vasanth",tags:["React","JavaScript","Begginer","useState","state Management","React Hooks"]},nextItem:{title:"Eliminating Prop Drilling with React Context, An In-Depth Guide",permalink:"/react-context"}},l={authorsImageUrls:[void 0]},s=[],p={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In JavaScript, when you create a new object and assign it to a variable, the object is stored in memory and the variable points to the memory location where the object is stored. "),(0,r.kt)("p",null,"In some cases, you may want to create a copy of an object, which can either be a shallow copy or a deep copy. Understanding the difference between these two types of copies is essential for making the right choice when working with objects in JavaScript."))}m.isMDXComponent=!0}}]);