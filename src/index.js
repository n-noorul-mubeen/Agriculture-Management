// // import React from 'react';
// // import ReactDOM from 'react-dom/client';
// // const Contact =({name,email,phone})=>{
// //   return (
// //     <>
// //     <h3>{name}</h3>
// //     <p><qoute>{email}</qoute></p>
// //     <p><bold>{phone}</bold><br></br></p>
// //     </>
// //   )
// // }

// // const ContactList =()=>{
// //   const Contacts=[

// //     {name: "Jason", email:"jason@gmail.com",phone:"9912345433"},
// //     {name: "Larry", email: "larry@hotmail.com", phone: "9234844287"},
// //     {name: "Mike", email: "mikev@yahoomail.com", phone: "4512697863"}
// //   ] ;
// //   return(
// //     <>
// //     <h1>CONTACTS:</h1>
// //     {Contacts.map((contact,index)=>(<Contact key={index} name={contact.name} email={contact.email}
// //      phone = {contact.phone}/>))}
// //     </>
// //   )
// // }


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<ContactList/>)

// // import React from 'react';
// // import ReactDOM from 'react-dom/client';

// // const Methon=()=>{
// //   const age = 12;
// //   const name = "Ashwin";
// //   return age+name;
// //   //document.getElementById('demo').innerHTML = this.age+this.name;
// // }
// // export default Methon;

// /*

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// const contactList = [
//   {name: 'pr',email:'pr@gmail.com', phone: 99239489},
//   {name: 'tr', email: 'tr@gmail.com', phone: 134444},
//   {name: 'gf', email: 'fg@gmail.com', phone: 123244}
// ];

// const contacts = contactList.map((contact)=>
//   (
//     <>
//     <h1>{contact.name}</h1>
//     <p>{contact.email}</p>
//     <code>{contact.phone}</code>
//     </>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(contacts);*/


// //Is this how it Ends?
// /*import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Car(props){
//   return <li>I am a {props.brand}</li>;
// }

// function Garage(){
//   const cars = [
//     {id: 1, brand: 'Ford'},
//     {id: 2, brand: 'BMW'},
//     {id: 3, brand: 'Audi'}
//   ];
//   return (
//     <>
//     <h1>Who lives in my garage?</h1>
//     <ul>
//       {cars.map((car) => (<Car key={car.id} brand={car.brand}/>))}
//     </ul>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage/>);//End this !

// */

// /*
// import { useState } from "react";
// import ReactDOM from 'react-dom/client';

// function MyForm(){
//   const [inputs, setInputs] = useState({});

//   const handleChange = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;              
//   }
   
// }*/

// // //Router with Maps
// // import React, { useState } from "react";
// // import ReactDOM from "react-dom/client";
// // import {BrowserRouter, Routes, Route, Link} from "react-router-dom";


// // const navigation = [
// //   {name: "Home", link: "/"},
// //   {name: "Calendar", link: "/calendar"},
// //   {name: "Todo", link: "/todo"}
// // ];



// // const Home = () => <p>Hello</p>;
// // const Calendar = () => <p>Calendar</p>;
// // const Todo = () => <p>Toddo</p>;

// // function Navs(props){
// //   return(
// //     <li><Link to={props.menu.link}>{props.menu.name}</Link></li>
// //   );
// // }


// // function Main(){
// //  return(
// //   <>
// //  <nav>
// //   <ul>

// //     {navigation.map((men)=>(<Navs menu={men}/>))}
// //   </ul>
// //  </nav>
// //   <Routes>
// //     <Route path = "/" element= {<Home/>} />
// //     <Route path = "/calendar" element = {<Calendar/>} />
// //     <Route path = "/Todo" element = {<Todo/>} />
// //   </Routes>
// //   </>
// //  );
// // }


// // const root=ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<BrowserRouter>
// // <Main/>
// // </BrowserRouter>);

// // // Forms

// // import React, { useState } from "react";
// // import ReactDOM from "react-dom/client";

// // function MyForm(){
// //   const [name, setName] = useState("");
// //   const handleSubmit = (event) =>{ 
// //     event.preventDefault();
// //     alert(`hi gig ${name}`);
// //   };
  
// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <label>Who are thou:::
// //         <input type="text" name="name" onChange={(e)=>(setName(e.target.value))}></input>
// //       </label>
// //       <input type="submit"></input>
// //     </form>
// //   )
// // }

// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<MyForm/>);

// // //////////////////////////////////////////////////////
// // import React, { useState } from 'react';
// // import ReactDOM from 'react-dom/client';

// // function Forms(){ 
// //   const [inputs, setInputs] = useState({name: "", age:0 });
// //   const handleChange = (event) => {
// //       const name = event.target.name;
// //       const value = event.target.value;
// //       setInputs(values => ({...values,[name]: value}))
// //   }

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     alert(inputs);
// //   }

// //   return(
// //     <form onSubmit={handleSubmit}>
// //       <label>
// //         <input 
// //         type="text"
// //         name="username"
// //         value = {inputs.username || ''}
// //         onChange={handleChange}></input>
// //       </label>
// //       <label>
// //         <input
// //         type="number"
// //         name="age"
// //         value={inputs.age || 0}
// //         onChange = {handleChange}></input>
// //       </label>
// //       <input type='submit'></input>
// //     </form>
// //   )
// // };

// // const root = ReactDOM.createRoot(document.getElementById('root'))
// // root.render(<Forms/>);

// ////////////////////////////////////////////////////////
// // import React, { useState } from 'react';
// // import ReactDOM from 'react-dom/client';

// // function Form(){
// //   const [textArea, setTextArea] = useState("Whats up??");
// //   const handleChange = (event) => {
// //     setTextArea(event.target.value);
// //   }

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     alert(textArea);
// //   }

// //   return (
// //     <form onSubmit={handleSubmit}>
// //       <textarea value={textArea} onChange={handleChange} />
// //       <input type='submit'/>
// //     </form>
// //   )
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Form/>)


// // // Select

// // import React, { useState } from 'react';
// // import ReactDOM from 'react-dom/client';

// // function Form(){
// //   const [myCar, setMyCar] = useState("Volvo");

// //   const handleChange = (event) => {
// //     setMyCar(event.target.value);
// //   }

// //   const handleSubmit = (event) => {
// //     event.preventDefault();
// //     alert(myCar);
// //   }

// //   return(
// //     <form onSubmit={handleSubmit}>
// //       <select value = {myCar} onChange = {handleChange}>
// //         <option value="Ford">Ford</option>
// //         <option value="MG">MG</option>
// //         <option value="Toyota">Toyota</option>
// //       </select>
// //       <input type='submit'/>
// //     </form>
// //   )
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Form/>);

// // // This is Cinema
// // import React, { useState } from 'react';
// // import ReactDOM from 'react-dom/client';

// // function Products(){
// //   const [items, setItems] = useState([{name: "Iphone", quantity: 3, price: 1098},{name: "Ipad", quantity: 4, price: 3922}]);
// //   const [ cartItems, setCartItems] = useState([]);
  
// //   const addToCart = (item) => {
// //     const newlist = [...cartItems,item];
// //     setCartItems(newlist);}

// //   const removeFromCart = (cart) => {
// //     /*let newList = [];
// //     for(let j in cartItems){
// //       if(cartItems[j]!==cart){
// //         newList=[...newList, j];
// //       }
// //     }*/
// //     setCartItems(cartItems.filter(cartk=>cartk!==cart));
    

// //   }
  
// //     const Display=()=> {
// //     return (
// //       <>
// //         {items.map((item, index)=>(<div key={index}>
// //           <p>{item.name}</p> 
// //           <p>{item.quantity}</p>
// //           <p>{item.price}</p>
// //           <button onClick={()=>(addToCart(item))}>Add To Cart</button>
// //           </div>))}
// //         <hr></hr>
// //       </>
// //       )
// //   }
// //   const CartItems = () => {
// //     return cartItems.map((cartItem, index) => (
// //       <div key={index} className='item'>
// //         <p>{cartItem.name}</p>
// //         <p>{cartItem.quantity}</p>
// //         <p>{cartItem.price}</p>
// //         <button onClick={()=>removeFromCart(cartItem)}>Remove From Cart</button>
// //       </div>
// //     ));
// //  }

// //   return(
// //     <>
// //       <Display/>
// //       <CartItems/>
// //     </>
    
// //   )
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Products/>);


// /*
// import React, { useState } from 'react';
// import ReactDOM from 'react-dom/client';


// function Counter(){
//   const [count, setCounter] = useState(0);
//   const increment = () =>{setCounter(count+1) };
//   const decrement = () =>{setCounter(count-1) };
//   return(
//     <>
//     <button onClick={increment}>Increase Me!</button>
//     <p>{count}</p>
//     <button onClick={decrement}>Decrease Me!</button>
//     </>
//   )
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Counter/>)

// */

// // import React,{useState} from 'react';
// // import ReactDOM from 'react-dom/client';
// // import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// // /*function Form(){
// //   const [name, setName] = useState('');
// //   return (
// //     <>
// //     <form>
// //       <input type="text" onChange={e=>{setName(e.target.value)}}></input>
// //       <p>Your name is {name}</p>
// //     </form>
    
// //     </>
// //   )
// // }*/


// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Form/>)

// // import React, {useState} from 'react';
// // import ReactDOM from 'react-dom/client';

// // function MyForm(){
// //   const [inputs, setInputs] = useState({});
// //   const handleChange = (event) => {
// //     const name =event.target.name;
// //     const value = event.target.value;
// //     setInputs(values=>({...values,[name]:value}));
// //   }
  
// //   const handleSubmit = (event)=>
// //   {
// //     alert(`username: ${inputs.username}, age: ${inputs.age}`);
// //   }

// //   return (
// //     <>
// //       <form onSubmit={handleSubmit}>
// //         <label>Enter the username:
// //           <input type = 'text'
// //           name='username' 
// //           value = {inputs.username||""}
// //           onChange={handleChange}
// //           />
// //         </label>

// //         <label>Enter age:
// //           <input type='number'
// //           name='age'
// //           value = {inputs.age||""}
// //           onChange={handleChange}
// //           />
// //         </label>
// //         <input type='submit'/>
// //       </form>
// //     </>
// //   )
// // }

// // const root = ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<MyForm/>);

// // /*import React, {useState} from "react";
// // import ReactDOM from 'react-dom/client';
// // import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// // const navDetail = [
// //   {name: "Home", path:"/"},
// //   {name: "Todo", path: "/todo"},
// //   {name: "Calendar", path: "/calendar"}
// // ];

// // const Home =() => <p>Hey Chittappu</p>;
// // const Todo =()=> <p>Enna inda pakkam</p>;
// // const Calendar = () => <p>Epdi poguthu</p>;

// // function Navigation(props){
// //   return(
// //     <li><Link to={props.det.path}>{props.det.name}</Link></li>
// //   )
// // }

// // function Main(){
// //   return(
// //     <>
// //     <ul>
// //       {navDetail.map((menu)=>(<Navigation det={menu}/>))}
// //     </ul>
// //     <Routes>
// //       <Route path='/' element={<Home/>}/>
// //       <Route path='/calendar' element={<Calendar/>}/>
// //       <Route path='/todo' element={<Todo/>}/>
// //     </Routes>
// //     </>
// //   )
// // }


// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(
// //   <BrowserRouter>
// //   <Main/>  
// //   </BrowserRouter>
// // );
// // */


// // 


// //import React,{useState, useEffect} from 'react';
// //import ReactDOM from 'react-dom/client';

// /*function Counter(){
//   const [count,setCount] = useState(0);
//   const [calculation, setCalculator] = useState(0);

//   useEffect(()=>
//   {
//     setTimeout(()=>
//     setCount(count+1),1000
//     )
//   }
//   );
//   return(
//     <p>I am {count}</p>
//   )
// }*/

// // function Counter(){
// //   const [count,setCount] = useState(0);
// //   const [calculation, setCalculator] = useState(1);

// //   useEffect(()=>{setCalculator(count*2)},[count]);
// //   return(
// //     <>
// //     <p>I am {count}</p>
// //     <button onClick={()=>setCount((c)=>c+1)}>Increase me there!</button>
// //     <p>Calculation: {calculation}</p>
// //     </>
    
// //   )

// // }

// // const root=ReactDOM.createRoot(document.getElementById('root'));
// // root.render(<Counter/>)


// // import React, {useState, useEffect, createContext, useContext} from 'react';
// // import ReactDOM from 'react-dom/client';

// // const userContext = createContext();

// // function Component1(){
// //   const [user,setUser] = useState("Walter White");
// //   return(
// //     <userContext.Provider value={user}>
// //       <h1>How are you {user} Senpai</h1>
// //       <Component2/>
// //     </userContext.Provider>
// //   )
// // }

// // function Component2(){
// //   return(
// //     <>
// //       <h1>Welcome component2</h1>
// //       <Component3/>
// //     </>
// //   )
// // }


// // function Component3(){
// //   return(
// //     <>
// //     <h1>Welcome component3</h1>
// //     <Component4/>
// //     </>
// //   )
// // }


// // function Component4(){
// //   return(
// //     <>
// //     <h1>Welcome component4</h1>
// //     <Component5/>
// //     </>
// //   )
// // }


// // function Component5(){
// //   const user = useContext(userContext);
// //   return(
// //     <>
// //     <h1>Welcome my {user} senpai</h1>
// //     </>
// //   )
// // }


// // const root = ReactDOM.createRoot(document.getElementById("root"));
// // root.render(<Component1/>);

// import React, {useState} from 'react';
// import ReactDOM from 'react-dom/client';

// function Display(){
//   const [dark, setDark] = useState(false);
//   const theme = {
//     backgroundColor: dark?"black":"white",
//     color: dark?"white":"black"
//   };
//   return(
//     <>
//     <div style={theme}>this is the sample to test theme</div>
//     <button onClick={()=>setDark(!dark)}>Theme Change</button>
//     </>
//   )

// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<Display    />);

// src/index.js

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
