"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[577],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=s(a),g=o,u=h["".concat(c,".").concat(g)]||h[g]||d[g]||i;return a?n.createElement(u,r(r({ref:t},p),{},{components:a})):n.createElement(u,r({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[h]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=a[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4892:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={slug:"object-copying",title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",authors:"Vasanth",tags:["React","JavaScript","Begginer","useState","state Management","React Hooks"]},r=void 0,l={permalink:"/object-copying",source:"@site/blog/2023-10-11/object-copying.mdx",title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",description:"In JavaScript, when you create a new object and assign it to a variable, the object is stored in memory and the variable points to the memory location where the object is stored.",date:"2023-10-11T00:00:00.000Z",formattedDate:"October 11, 2023",tags:[{label:"React",permalink:"/tags/react"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"Begginer",permalink:"/tags/begginer"},{label:"useState",permalink:"/tags/use-state"},{label:"state Management",permalink:"/tags/state-management"},{label:"React Hooks",permalink:"/tags/react-hooks"}],readingTime:4.135,hasTruncateMarker:!0,authors:[{name:"Vasanth Selvaraj",title:"Senior Full stack Developer",url:"https://vasanth.tech",imageURL:"https://vasanth.tech/_next/static/media/memoji.396c05ff.png",key:"Vasanth"}],frontMatter:{slug:"object-copying",title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",authors:"Vasanth",tags:["React","JavaScript","Begginer","useState","state Management","React Hooks"]},nextItem:{title:"Eliminating Prop Drilling with React Context, An In-Depth Guide",permalink:"/react-context"}},c={authorsImageUrls:[void 0]},s=[{value:"Shallow Copy",id:"shallow-copy",level:3},{value:"Deep Copy",id:"deep-copy",level:3},{value:"&quot;Deep&quot; Deep Copy",id:"deep-deep-copy",level:3},{value:"Advantage",id:"advantage",level:3},{value:"Comparison",id:"comparison",level:3},{value:"Conclusion",id:"conclusion",level:3}],p={toc:s},h="wrapper";function d(e){let{components:t,...a}=e;return(0,o.kt)(h,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"In JavaScript, when you create a new object and assign it to a variable, the object is stored in memory and the variable points to the memory location where the object is stored. "),(0,o.kt)("p",null,"In some cases, you may want to create a copy of an object, which can either be a shallow copy or a deep copy. Understanding the difference between these two types of copies is essential for making the right choice when working with objects in JavaScript."),(0,o.kt)("h3",{id:"shallow-copy"},"Shallow Copy"),(0,o.kt)("p",null,"A shallow copy is a copy of an object where only the reference to the object is copied, and not the object itself. This means that if you modify the original object, the changes will reflect in the shallow copy as well. Consider the following code:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"let originalObject = { name: 'John', age: 30 };\nlet shallowCopy = originalObject;\nshallowCopy.name = 'Jane';\nconsole.log(originalObject.name); // Output: Jane\n")),(0,o.kt)("p",null,"In this code, the original object is assigned to the variable shallowCopy. Since shallowCopyis only a reference to the original object, changing the value of shallowCopy.name also changes the value of originalObject.name."),(0,o.kt)("h3",{id:"deep-copy"},"Deep Copy"),(0,o.kt)("p",null,"A deep copy, on the other hand, is a copy of an object where the object itself is copied, not just the reference. This means that changes made to the original object will not reflect in the deep copy. To create a deep copy, you can use a number of techniques, including JSON stringify and parse, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()"),", or the spread operator."),(0,o.kt)("p",null,"Here is an example of creating a deep copy using ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()"),", this method can be used to create a deep copy of an object in JavaScript. ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," is a method on the Object constructor that creates a new object and copies the properties of one or more source objects to the newly created object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"let originalObject = { name: 'John', age: 30 };\nlet deepCopy = Object.assign({}, originalObject);\ndeepCopy.name = 'Jane';\nconsole.log(originalObject.name); // Output: John\n")),(0,o.kt)("p",null,"In this example, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," takes two arguments: an empty object {} and originalObject. The properties of originalObjectare copied to the newly created object, which is assigned to the variable deepCopy. As with the previous example, changes made to deepCopy will not reflect in originalObject."),(0,o.kt)("p",null,"It\u2019s worth noting that ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," is a shallow copy method. This means that if the source object contains nested objects, the references to those nested objects will be copied, not the objects themselves. To create a deep copy of an object with nested objects, you would need to perform a deep copy on the nested objects as well. In which cases you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")),(0,o.kt)("h3",{id:"deep-deep-copy"},'"Deep" Deep Copy'),(0,o.kt)("p",null,"Here is an example of creating a \u201cdeep\u201d deep copy using ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"let originalObject = { name: 'John', age: 30 };\nlet deepCopy = JSON.parse(JSON.stringify(originalObject));\ndeepCopy.name = 'Jane';\nconsole.log(originalObject.name); // Output: John\n")),(0,o.kt)("p",null,"In this code, ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," is used to convert the original object to a string, which is then parsed using ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," to create a new object that is assigned to the variable deepCopy. Since deepCopyis a new object, changes made to it will not reflect in the original object."),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," can be used to create a deep copy of an object in JavaScript. However, there are some advantages to using ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," over ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," in certain situations."),(0,o.kt)("h3",{id:"advantage"},"Advantage"),(0,o.kt)("p",null,"One advantage of using ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," is that it creates a true deep copy of the object, meaning that all the properties and values of the original object are copied to the new object, including any nested objects. This is particularly useful when working with complex objects that contain multiple nested objects, as it ensures that all of the nested objects are copied as well, and any changes made to the nested objects in the new object will not reflect in the original object."),(0,o.kt)("p",null,"Another advantage of ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," is that it provides a consistent way of creating a deep copy, regardless of the type of the original object. For example, if the original object is an array, a number, a string, or a boolean, ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.stringify()")," can still be used to create a deep copy, as it will automatically convert the object to a JSON string, and ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," can then be used to convert it back to an object."),(0,o.kt)("h3",{id:"comparison"},"Comparison"),(0,o.kt)("p",null,"In comparison, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," only works with objects, and if the original object is of a different type, it will not work. Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," only performs a shallow copy, so if the original object contains nested objects, the references to those nested objects will be copied, not the objects themselves."),(0,o.kt)("h3",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"In conclusion, ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON.parse()")," is a more flexible and reliable method for creating a deep copy of an object in JavaScript, especially when working with complex objects that contain multiple nested objects. While ",(0,o.kt)("inlineCode",{parentName:"p"},"Object.assign()")," can be a useful tool for creating a shallow copy, it's important to be aware of its limitations and to choose the appropriate method for your specific use case."))}d.isMDXComponent=!0}}]);