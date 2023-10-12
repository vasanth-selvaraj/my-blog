"use strict";(self.webpackChunkmy_blog=self.webpackChunkmy_blog||[]).push([[490],{76:e=>{e.exports=JSON.parse('{"blogPosts":[{"id":"object-copying","metadata":{"permalink":"/my-blog/object-copying","source":"@site/blog/2023-10-11/object-copying.mdx","title":"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d","description":"In JavaScript, when you create a new object and assign it to a variable, the object is stored in memory and the variable points to the memory location where the object is stored.","date":"2023-10-11T00:00:00.000Z","formattedDate":"October 11, 2023","tags":[{"label":"React","permalink":"/my-blog/tags/react"},{"label":"JavaScript","permalink":"/my-blog/tags/java-script"},{"label":"Begginer","permalink":"/my-blog/tags/begginer"},{"label":"useState","permalink":"/my-blog/tags/use-state"},{"label":"state Management","permalink":"/my-blog/tags/state-management"},{"label":"React Hooks","permalink":"/my-blog/tags/react-hooks"}],"readingTime":4.135,"hasTruncateMarker":true,"authors":[{"name":"Vasanth Selvaraj","title":"Senior Full stack Developer","url":"https://vasanth-selvaraj.github.io/vasanth/","imageURL":"https://vasanth-selvaraj.github.io/vasanth/_next/static/media/memoji.396c05ff.png","key":"Vasanth"}],"frontMatter":{"slug":"object-copying","title":"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d","authors":"Vasanth","tags":["React","JavaScript","Begginer","useState","state Management","React Hooks"]},"nextItem":{"title":"Eliminating Prop Drilling with React Context, An In-Depth Guide","permalink":"/my-blog/react-context"}},"content":"In JavaScript, when you create a new object and assign it to a variable, the object is stored in memory and the variable points to the memory location where the object is stored. \\r\\n\\r\\nIn some cases, you may want to create a copy of an object, which can either be a shallow copy or a deep copy. Understanding the difference between these two types of copies is essential for making the right choice when working with objects in JavaScript.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\n### Shallow Copy\\r\\nA shallow copy is a copy of an object where only the reference to the object is copied, and not the object itself. This means that if you modify the original object, the changes will reflect in the shallow copy as well. Consider the following code:\\r\\n\\r\\n```jsx\\r\\nlet originalObject = { name: \'John\', age: 30 };\\r\\nlet shallowCopy = originalObject;\\r\\nshallowCopy.name = \'Jane\';\\r\\nconsole.log(originalObject.name); // Output: Jane\\r\\n```\\r\\n\\r\\nIn this code, the original object is assigned to the variable shallowCopy. Since shallowCopyis only a reference to the original object, changing the value of shallowCopy.name also changes the value of originalObject.name.\\r\\n\\r\\n### Deep Copy\\r\\nA deep copy, on the other hand, is a copy of an object where the object itself is copied, not just the reference. This means that changes made to the original object will not reflect in the deep copy. To create a deep copy, you can use a number of techniques, including JSON stringify and parse, `Object.assign()`, or the spread operator.\\r\\n\\r\\nHere is an example of creating a deep copy using `Object.assign()`, this method can be used to create a deep copy of an object in JavaScript. `Object.assign()` is a method on the Object constructor that creates a new object and copies the properties of one or more source objects to the newly created object.\\r\\n\\r\\n```jsx\\r\\nlet originalObject = { name: \'John\', age: 30 };\\r\\nlet deepCopy = Object.assign({}, originalObject);\\r\\ndeepCopy.name = \'Jane\';\\r\\nconsole.log(originalObject.name); // Output: John\\r\\n```\\r\\n\\r\\nIn this example, `Object.assign()` takes two arguments: an empty object {} and originalObject. The properties of originalObjectare copied to the newly created object, which is assigned to the variable deepCopy. As with the previous example, changes made to deepCopy will not reflect in originalObject.\\r\\n\\r\\nIt\u2019s worth noting that `Object.assign()` is a shallow copy method. This means that if the source object contains nested objects, the references to those nested objects will be copied, not the objects themselves. To create a deep copy of an object with nested objects, you would need to perform a deep copy on the nested objects as well. In which cases you can use `JSON.stringify()` and `JSON.parse()`\\r\\n\\r\\n### \\"Deep\\" Deep Copy\\r\\n\\r\\nHere is an example of creating a \u201cdeep\u201d deep copy using `JSON.stringify()` and `JSON.parse()`:\\r\\n\\r\\n```jsx\\r\\nlet originalObject = { name: \'John\', age: 30 };\\r\\nlet deepCopy = JSON.parse(JSON.stringify(originalObject));\\r\\ndeepCopy.name = \'Jane\';\\r\\nconsole.log(originalObject.name); // Output: John\\r\\n```\\r\\n\\r\\nIn this code, `JSON.stringify()` is used to convert the original object to a string, which is then parsed using `JSON.parse()` to create a new object that is assigned to the variable deepCopy. Since deepCopyis a new object, changes made to it will not reflect in the original object.\\r\\n\\r\\nBoth `JSON.parse()` and `Object.assign()` can be used to create a deep copy of an object in JavaScript. However, there are some advantages to using `JSON.parse()` over `Object.assign()` in certain situations.\\r\\n\\r\\n### Advantage\\r\\n\\r\\nOne advantage of using `JSON.parse()` is that it creates a true deep copy of the object, meaning that all the properties and values of the original object are copied to the new object, including any nested objects. This is particularly useful when working with complex objects that contain multiple nested objects, as it ensures that all of the nested objects are copied as well, and any changes made to the nested objects in the new object will not reflect in the original object.\\r\\n\\r\\nAnother advantage of `JSON.parse()` is that it provides a consistent way of creating a deep copy, regardless of the type of the original object. For example, if the original object is an array, a number, a string, or a boolean, `JSON.stringify()` can still be used to create a deep copy, as it will automatically convert the object to a JSON string, and `JSON.parse()` can then be used to convert it back to an object.\\r\\n\\r\\n### Comparison\\r\\n\\r\\nIn comparison, ``Object.assign()`` only works with objects, and if the original object is of a different type, it will not work. Additionally, `Object.assign()` only performs a shallow copy, so if the original object contains nested objects, the references to those nested objects will be copied, not the objects themselves.\\r\\n\\r\\n\\r\\n### Conclusion\\r\\nIn conclusion, ``JSON.parse()`` is a more flexible and reliable method for creating a deep copy of an object in JavaScript, especially when working with complex objects that contain multiple nested objects. While `Object.assign()` can be a useful tool for creating a shallow copy, it\'s important to be aware of its limitations and to choose the appropriate method for your specific use case."},{"id":"react-context","metadata":{"permalink":"/my-blog/react-context","source":"@site/blog/2023-10-11/react-conext.mdx","title":"Eliminating Prop Drilling with React Context, An In-Depth Guide","description":"React is uni-directional in the sense that data flows in a single direction, from the parent component to its children components, through the use of props.","date":"2023-10-11T00:00:00.000Z","formattedDate":"October 11, 2023","tags":[{"label":"React","permalink":"/my-blog/tags/react"},{"label":"JavaScript","permalink":"/my-blog/tags/java-script"},{"label":"Begginer","permalink":"/my-blog/tags/begginer"},{"label":"useContext","permalink":"/my-blog/tags/use-context"}],"readingTime":2.85,"hasTruncateMarker":true,"authors":[{"name":"Vasanth Selvaraj","title":"Senior Full stack Developer","url":"https://vasanth-selvaraj.github.io/vasanth/","imageURL":"https://vasanth-selvaraj.github.io/vasanth/_next/static/media/memoji.396c05ff.png","key":"Vasanth"}],"frontMatter":{"slug":"react-context","title":"Eliminating Prop Drilling with React Context, An In-Depth Guide","authors":"Vasanth","tags":["React","JavaScript","Begginer","useContext"]},"prevItem":{"title":"\ud83d\udca1 Mastering Object Duplication, The Shallow vs Deep Copy in JavaScript \ud83d\udd0d","permalink":"/my-blog/object-copying"},"nextItem":{"title":"Unlocking the Power of State Management in React \u269b\ufe0f with the useState Hook, A Beginner\'s Guide \ud83d\udd25","permalink":"/my-blog/state-management"}},"content":"React is uni-directional in the sense that data flows in a single direction, from the parent component to its children components, through the use of props. \\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nIn React, the parent component is responsible for providing the props to its child components, and the child components can access the props passed down to them but cannot modify them directly.\\r\\n\\r\\nThis uni-directional data flow makes it easier to understand the flow of data in a React application, especially in large and complex applications. It also helps to enforce the principle of separation of concerns, as each component only has access to the data it needs to render, and does not need to worry about the data in other components.\\r\\n\\r\\nWhile the uni-directional data flow in React has many benefits, there are also some potential drawbacks that should be considered, one of them is:\\r\\n\\r\\nLimited Flexibility: The uni-directional data flow can also limit the flexibility of an application. For example, if a child component needs to share data with a parent component, it must do so indirectly, typically by calling a callback function passed down from the parent.\\r\\n\\r\\nFor example, consider a scenario where you have a component that needs to access a value that is stored in a parent component several levels up in the component tree. To access that value, you need to pass it down the component tree as a prop at each level. This can result in a long chain of props that make it difficult to understand the flow of data through the component tree.\\r\\n\\r\\nHere\u2019s an example of prop drilling:\\r\\n\\r\\n```jsx\\r\\nfunction Grandparent(props) {\\r\\n  const [value, setValue] = React.useState(\\"Initial value\\");\\r\\n  return (\\r\\n    <Parent value={value} setValue={setValue} />\\r\\n  );\\r\\n}\\r\\nfunction Parent(props) {\\r\\n  return (\\r\\n    <Child value={props.value} setValue={props.setValue} />\\r\\n  );\\r\\n}\\r\\nfunction Child(props) {\\r\\n  return (\\r\\n    <div>\\r\\n      <p>{props.value}</p>\\r\\n      <button onClick={() => props.setValue(\\"New value\\")}>\\r\\n        Change value\\r\\n      </button>\\r\\n    </div>\\r\\n  );\\r\\n}\\r\\n```\\r\\nIn this example, the `value` and `setValue` functions are being passed down the component tree from the `Grandparent` component to the `Child` component, resulting in prop drilling. This makes it difficult to understand the flow of data through the component tree, especially in large applications where there are many levels of components.\\r\\n\\r\\n`React Context` can be used to prevent prop drilling by making data available throughout the component tree without having to pass it down as props. Here\'s an example of how to use React Context to avoid prop drilling:\\r\\n\\r\\n\\r\\n```jsx\\r\\nimport React from \\"react\\";const ValueContext = React.createContext({\\r\\n  value: \\"Initial value\\",\\r\\n  setValue: () => {}\\r\\n});\\r\\nfunction ValueProvider({ children }) {\\r\\n  const [value, setValue] = React.useState(\\"Initial value\\");\\r\\n  return (\\r\\n    <ValueContext.Provider value={{ value, setValue }}>\\r\\n      {children}\\r\\n    </ValueContext.Provider>\\r\\n  );\\r\\n}\\r\\nfunction Grandparent() {\\r\\n  return (\\r\\n    <ValueProvider>\\r\\n      <Parent />\\r\\n    </ValueProvider>\\r\\n  );\\r\\n}\\r\\nfunction Parent() {\\r\\n  return (\\r\\n    <Child />\\r\\n  );\\r\\n}\\r\\nfunction Child() {\\r\\n  const { value, setValue } = React.useContext(ValueContext);\\r\\n  return (\\r\\n    <div>\\r\\n      <p>{value}</p>\\r\\n      <button onClick={() => setValue(\\"New value\\")}>\\r\\n        Change value\\r\\n      </button>\\r\\n    </div>\\r\\n  );\\r\\n}\\r\\n```\\r\\n\\r\\nIn this example, the `ValueContext` is created using the `React.createContext` method, and the `ValueProvider` component is used to provide the context to the rest of the application. The Child component uses the `React.useContext` hook to access the `value` and `setValue` functions from the `ValueContext`.\\r\\n\\r\\nBy using React Context, the `value` and `setValue` functions are made available to any component in the application, without the need for prop drilling. This makes it easier to share data between components, and reduces the complexity of the application."},{"id":"state-management","metadata":{"permalink":"/my-blog/state-management","source":"@site/blog/2023-10-11/state-management.mdx","title":"Unlocking the Power of State Management in React \u269b\ufe0f with the useState Hook, A Beginner\'s Guide \ud83d\udd25","description":"The useState hook is a feature in React that allows you to manage state in your components. State is a way to store and manage data that can change over time, and it is an important aspect of any dynamic user interface.","date":"2023-10-11T00:00:00.000Z","formattedDate":"October 11, 2023","tags":[{"label":"React","permalink":"/my-blog/tags/react"},{"label":"JavaScript","permalink":"/my-blog/tags/java-script"},{"label":"Begginer","permalink":"/my-blog/tags/begginer"},{"label":"useState","permalink":"/my-blog/tags/use-state"},{"label":"state Management","permalink":"/my-blog/tags/state-management"},{"label":"React Hooks","permalink":"/my-blog/tags/react-hooks"}],"readingTime":3.41,"hasTruncateMarker":true,"authors":[{"name":"Vasanth Selvaraj","title":"Senior Full stack Developer","url":"https://vasanth-selvaraj.github.io/vasanth/","imageURL":"https://vasanth-selvaraj.github.io/vasanth/_next/static/media/memoji.396c05ff.png","key":"Vasanth"}],"frontMatter":{"slug":"state-management","title":"Unlocking the Power of State Management in React \u269b\ufe0f with the useState Hook, A Beginner\'s Guide \ud83d\udd25","authors":"Vasanth","tags":["React","JavaScript","Begginer","useState","state Management","React Hooks"]},"prevItem":{"title":"Eliminating Prop Drilling with React Context, An In-Depth Guide","permalink":"/my-blog/react-context"}},"content":"The `useState` hook is a feature in React that allows you to manage state in your components. State is a way to store and manage data that can change over time, and it is an important aspect of any dynamic user interface.\\r\\n\\r\\n\x3c!--truncate--\x3e\\r\\n\\r\\nThe `useState` hook is a simple way to add state to your React components. It is a hook that you can call from within your component, and it returns an array with two elements: the current state value, and a function that you can use to update the state.\\r\\n\\r\\nHere\u2019s an example of how you can use the `useState` hook in a React component:\\r\\n\\r\\n```jsx\\r\\nimport React, { useState } from \'react\';\\r\\n\\r\\nfunction Counter() {\\r\\n  const [count, setCount] = useState(0);\\r\\n\\r\\n  return (\\r\\n    <div>\\r\\n      <p>Count: {count}</p>\\r\\n      <button onClick={() => setCount(count + 1)}>\\r\\n        Increment\\r\\n      </button>\\r\\n    </div>\\r\\n  );\\r\\n}\\r\\n\\r\\nexport default Counter;\\r\\n```\\r\\n\\r\\nIn the example above, we import the `useState` hook from the react library. We then call the `useState` hook within our component and pass in an initial state value of 0. The hook returns an array with two elements, which we destructured into `count` and `setCount`.\\r\\n\\r\\nThe `count` variable holds the current state value, which we display in the component using curly braces. The `setCount` function is used to update the state value, in this case, by incrementing the count by `1` whenever the button is clicked.\\r\\n\\r\\n### Setting State for Arrays:\\r\\n\\r\\nTo set state for arrays, you can use the `useState` hook in the same way as for a simple value. Here\'s an example of how you can set state for an array in a React component:\\r\\n\\r\\n```jsx\\r\\nimport React, { useState } from \'react\';\\r\\n\\r\\nfunction List() {\\r\\n  const [items, setItems] = useState([]);\\r\\n\\r\\n  const addItem = () => {\\r\\n    setItems([...items, items.length + 1]);\\r\\n  };\\r\\n\\r\\n  return (\\r\\n    <div>\\r\\n      <ul>\\r\\n        {items.map((item) => (\\r\\n          <li key={item}>{item}</li>\\r\\n        ))}\\r\\n      </ul>\\r\\n      <button onClick={addItem}>Add Item</button>\\r\\n    </div>\\r\\n  );\\r\\n}\\r\\n\\r\\nexport default List;\\r\\n```\\r\\n\\r\\nIn the example above, we call the `useState` hook and pass in an initial state value of an empty array. The hook returns an array with two elements, which we destructured into `items` and `setItems`. The `items` variable holds the current state value, which is an array of items.\\r\\n\\r\\nWe also define a function named `addItem` that updates the state value by adding a new item to the end of the array. We use the spread operator `(...)` to create a new array with the new item, and we pass this new array to the `setItems` function.\\r\\n\\r\\n### Setting State for Nested Objects:\\r\\n\\r\\nTo set state for nested objects, you can use the `useState` hook in the same way as for a simple value or an array. Here\'s an example of how you can set state for a nested object in a React component:\\r\\n\\r\\n```jsx\\r\\nimport React, { useState } from \\"react\\";\\r\\n\\r\\nfunction Form() {\\r\\n  const [formData, setFormData] = useState({\\r\\n    name: \\"\\",\\r\\n    email: \\"\\",\\r\\n    password: \\"\\",\\r\\n  });\\r\\n\\r\\n  const handleChange = (event) => {\\r\\n    setFormData({\\r\\n      ...formData,\\r\\n      [event.target.name]: event.target.value,\\r\\n    });\\r\\n  };\\r\\n\\r\\n  return (\\r\\n    <form>\\r\\n      <label htmlFor=\\"name\\">Name:</label>\\r\\n      <input\\r\\n        type=\\"text\\"\\r\\n        name=\\"name\\"\\r\\n        id=\\"name\\"\\r\\n        value={formData.name}\\r\\n        onChange={handleChange}\\r\\n      />\\r\\n      <br />\\r\\n      <label htmlFor=\\"email\\">Email:</label>\\r\\n      <input\\r\\n        type=\\"email\\"\\r\\n        name=\\"email\\"\\r\\n        id=\\"email\\"\\r\\n        value={formData.email}\\r\\n        onChange={handleChange}\\r\\n      />\\r\\n      <br />\\r\\n      <label htmlFor=\\"password\\">Password:</label>\\r\\n      <input\\r\\n        type=\\"password\\"\\r\\n        name=\\"password\\"\\r\\n        id=\\"password\\"\\r\\n        value={formData.password}\\r\\n        onChange={handleChange}\\r\\n      />\\r\\n    </form>\\r\\n  );\\r\\n}\\r\\nexport default Form;\\r\\n```\\r\\n\\r\\nIn the example above, we call the `useState` hook and pass in an initial state value of an object with three properties: `name`, `email`, and `password`. The hook returns an array with two elements, which we destructured into `formData` and `setFormData`. The `formData` variable holds the current state value, which is an object representing the form data.\\r\\n\\r\\nWe also define a function named `handleChange` that updates the state value by changing the value of the form input that was changed. We use the spread operator (`...`) to create a new object with the updated value, and we pass this new object to the `setFormData` function.\\r\\n\\r\\nIn conclusion, the `useState` hook is a convenient way to manage state in your React components. Whether you are working with simple values, arrays, or nested objects, the `useState` hook makes it easy to keep your state up-to-date."}]}')}}]);