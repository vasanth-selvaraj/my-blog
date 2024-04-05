"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[684],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=o,m=u["".concat(p,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=h;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7702:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=n(7462),o=(n(7294),n(3905));const i={slug:"Eliminating-Prop-Drilling-with-React-Context--An-In-Depth-Guide",title:"Eliminating Prop Drilling with React Context, An In-Depth Guide",authors:"Vasanth",tags:["React","JavaScript","Begginer","useContext"],enableComments:!0},r=void 0,l={permalink:"/Eliminating-Prop-Drilling-with-React-Context--An-In-Depth-Guide",source:"@site/blog/2023-10-11/Eliminating-Prop-Drilling-with-React-Context--An-In-Depth-Guide.mdx",title:"Eliminating Prop Drilling with React Context, An In-Depth Guide",description:"React is uni-directional in the sense that data flows in a single direction, from the parent component to its children components, through the use of props.",date:"2023-10-11T00:00:00.000Z",formattedDate:"October 11, 2023",tags:[{label:"React",permalink:"/tags/react"},{label:"JavaScript",permalink:"/tags/java-script"},{label:"Begginer",permalink:"/tags/begginer"},{label:"useContext",permalink:"/tags/use-context"}],readingTime:2.85,hasTruncateMarker:!0,authors:[{name:"Vasanth Selvaraj",title:"Full Stack Developer | Agile | MERN | DevOps",url:"https://vasanth.tech",imageURL:"https://vasanth.tech/_next/static/media/memoji.396c05ff.png",key:"Vasanth"}],frontMatter:{slug:"Eliminating-Prop-Drilling-with-React-Context--An-In-Depth-Guide",title:"Eliminating Prop Drilling with React Context, An In-Depth Guide",authors:"Vasanth",tags:["React","JavaScript","Begginer","useContext"],enableComments:!0},prevItem:{title:"Understanding React Lifecycle Methods in Functional and Class Components",permalink:"/react-lifecycle-methods-functional-class"},nextItem:{title:"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d",permalink:"/Mastering-Object-Duplication--The-Shallow-vs-Deep-Copy-in-JavaScript"}},p={authorsImageUrls:[void 0]},s=[],c={toc:s},u="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React is uni-directional in the sense that data flows in a single direction, from the parent component to its children components, through the use of props. "),(0,o.kt)("p",null,"In React, the parent component is responsible for providing the props to its child components, and the child components can access the props passed down to them but cannot modify them directly."),(0,o.kt)("p",null,"This uni-directional data flow makes it easier to understand the flow of data in a React application, especially in large and complex applications. It also helps to enforce the principle of separation of concerns, as each component only has access to the data it needs to render, and does not need to worry about the data in other components."),(0,o.kt)("p",null,"While the uni-directional data flow in React has many benefits, there are also some potential drawbacks that should be considered, one of them is:"),(0,o.kt)("p",null,"Limited Flexibility: The uni-directional data flow can also limit the flexibility of an application. For example, if a child component needs to share data with a parent component, it must do so indirectly, typically by calling a callback function passed down from the parent."),(0,o.kt)("p",null,"For example, consider a scenario where you have a component that needs to access a value that is stored in a parent component several levels up in the component tree. To access that value, you need to pass it down the component tree as a prop at each level. This can result in a long chain of props that make it difficult to understand the flow of data through the component tree."),(0,o.kt)("p",null,"Here\u2019s an example of prop drilling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'function Grandparent(props) {\n  const [value, setValue] = React.useState("Initial value");\n  return (\n    <Parent value={value} setValue={setValue} />\n  );\n}\nfunction Parent(props) {\n  return (\n    <Child value={props.value} setValue={props.setValue} />\n  );\n}\nfunction Child(props) {\n  return (\n    <div>\n      <p>{props.value}</p>\n      <button onClick={() => props.setValue("New value")}>\n        Change value\n      </button>\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue")," functions are being passed down the component tree from the ",(0,o.kt)("inlineCode",{parentName:"p"},"Grandparent")," component to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Child")," component, resulting in prop drilling. This makes it difficult to understand the flow of data through the component tree, especially in large applications where there are many levels of components."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"React Context")," can be used to prevent prop drilling by making data available throughout the component tree without having to pass it down as props. Here's an example of how to use React Context to avoid prop drilling:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},'import React from "react";const ValueContext = React.createContext({\n  value: "Initial value",\n  setValue: () => {}\n});\nfunction ValueProvider({ children }) {\n  const [value, setValue] = React.useState("Initial value");\n  return (\n    <ValueContext.Provider value={{ value, setValue }}>\n      {children}\n    </ValueContext.Provider>\n  );\n}\nfunction Grandparent() {\n  return (\n    <ValueProvider>\n      <Parent />\n    </ValueProvider>\n  );\n}\nfunction Parent() {\n  return (\n    <Child />\n  );\n}\nfunction Child() {\n  const { value, setValue } = React.useContext(ValueContext);\n  return (\n    <div>\n      <p>{value}</p>\n      <button onClick={() => setValue("New value")}>\n        Change value\n      </button>\n    </div>\n  );\n}\n')),(0,o.kt)("p",null,"In this example, the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValueContext")," is created using the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.createContext")," method, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValueProvider")," component is used to provide the context to the rest of the application. The Child component uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"React.useContext")," hook to access the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue")," functions from the ",(0,o.kt)("inlineCode",{parentName:"p"},"ValueContext"),"."),(0,o.kt)("p",null,"By using React Context, the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setValue")," functions are made available to any component in the application, without the need for prop drilling. This makes it easier to share data between components, and reduces the complexity of the application."))}d.isMDXComponent=!0}}]);