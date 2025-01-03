"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[769],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||i;return n?a.createElement(f,r(r({ref:t},p),{},{components:n})):a.createElement(f,r({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6110:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),o=(n(7294),n(3905));const i={title:"Understanding React Lifecycle Methods in Functional and Class Components",description:"A comprehensive guide to React lifecycle methods in both functional and class components.",slug:"react-lifecycle-methods-functional-class",authors:"Vasanth",tags:["React","JavaScript","Begginer","React Lifecycle"],enableComments:!0},r="Understanding React Lifecycle Methods in Functional and Class Components",l={permalink:"/my-blog/react-lifecycle-methods-functional-class",source:"@site/blog/2023-11-21/react-lifecycle-methods-functional-class.mdx",title:"Understanding React Lifecycle Methods in Functional and Class Components",description:"A comprehensive guide to React lifecycle methods in both functional and class components.",date:"2023-11-21T00:00:00.000Z",formattedDate:"November 21, 2023",tags:[{label:"React",permalink:"/my-blog/tags/react"},{label:"JavaScript",permalink:"/my-blog/tags/java-script"},{label:"Begginer",permalink:"/my-blog/tags/begginer"},{label:"React Lifecycle",permalink:"/my-blog/tags/react-lifecycle"}],readingTime:1.69,hasTruncateMarker:!0,authors:[{name:"Vasanth Selvaraj",title:"Full Stack Developer | Agile | MERN | DevOps",url:"https://vasanth-selvaraj.github.io/portfolio/",imageURL:"https://vasanth-selvaraj.github.io/portfolio/_next/static/media/memoji.396c05ff.png",key:"Vasanth"}],frontMatter:{title:"Understanding React Lifecycle Methods in Functional and Class Components",description:"A comprehensive guide to React lifecycle methods in both functional and class components.",slug:"react-lifecycle-methods-functional-class",authors:"Vasanth",tags:["React","JavaScript","Begginer","React Lifecycle"],enableComments:!0},prevItem:{title:"Optimizing Performance in React Applications",permalink:"/my-blog/optimizing-performance-in-react-applications"},nextItem:{title:"Eliminating Prop Drilling with React Context, An In-Depth Guide",permalink:"/my-blog/Eliminating-Prop-Drilling-with-React-Context--An-In-Depth-Guide"}},s={authorsImageUrls:[void 0]},c=[{value:"Lifecycle Methods in Class Components",id:"lifecycle-methods-in-class-components",level:2},{value:"Mounting Phase",id:"mounting-phase",level:3},{value:"Updating Phase",id:"updating-phase",level:3},{value:"Unmounting Phase",id:"unmounting-phase",level:3},{value:"Lifecycle Methods in Functional Components (Hooks)",id:"lifecycle-methods-in-functional-components-hooks",level:2},{value:"Practical Usage and Best Practices",id:"practical-usage-and-best-practices",level:2},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"React provides a series of lifecycle methods that allow developers to hook into different stages of a component's lifecycle. These methods vary between functional and class components due to the differences in their nature."),(0,o.kt)("h2",{id:"lifecycle-methods-in-class-components"},"Lifecycle Methods in Class Components"),(0,o.kt)("h3",{id:"mounting-phase"},"Mounting Phase"),(0,o.kt)("p",null,"In class components, the lifecycle methods are as follows:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"constructor()")),": The first method called when a component is initialized. Used for state initialization and method binding.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"render()")),": Renders the UI based on the current state and props.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"componentDidMount()")),": Invoked after the component is mounted in the DOM. Suitable for side effects like data fetching or setting up subscriptions."))),(0,o.kt)("h3",{id:"updating-phase"},"Updating Phase"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"static getDerivedStateFromProps()")),": Used to update the state based on changes in props. Returns an object to update the state or null if no update is required.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"shouldComponentUpdate()")),": Determines whether the component should re-render after receiving new props or state.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"render()")),": Re-renders the component with updated state or props.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"getSnapshotBeforeUpdate()")),": Captures information before changes are made to the DOM, commonly used for preserving user interactions.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"componentDidUpdate()")),": Executes after the component is updated in the DOM. Suitable for post-update actions like network requests."))),(0,o.kt)("h3",{id:"unmounting-phase"},"Unmounting Phase"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"componentWillUnmount()")),": Called just before a component is unmounted. Used for cleanup operations.")),(0,o.kt)("h2",{id:"lifecycle-methods-in-functional-components-hooks"},"Lifecycle Methods in Functional Components (Hooks)"),(0,o.kt)("p",null,"Functional components utilize React Hooks to handle lifecycle behavior:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"useEffect()")),": Combines functionality of ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidMount()"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"componentDidUpdate()"),", and ",(0,o.kt)("inlineCode",{parentName:"li"},"componentWillUnmount()"),". Handles side effects by specifying cleanup logic when the component unmounts.")),(0,o.kt)("h2",{id:"practical-usage-and-best-practices"},"Practical Usage and Best Practices"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Class Components"),": Utilize lifecycle methods in class components for fine-grained control and deeper integration with lifecycle phases."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Functional Components with Hooks"),": Embrace the simplicity and reusability of functional components with hooks, using ",(0,o.kt)("inlineCode",{parentName:"li"},"useEffect()")," for side effects and lifecycle management.")),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"Understanding React lifecycle methods in both class and functional components is crucial for managing component behavior, optimizing performance, and ensuring proper cleanup. Whether using class components or functional components with hooks, React provides mechanisms to handle various stages of a component's lifecycle effectively."))}d.isMDXComponent=!0}}]);