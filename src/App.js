import React, { createContext, useState, useEffect } from 'react';
import Header from './Component/Header';
import Body from './Component/Body';
import './App.css';
import Additems from './Component/addItems';
import Cart from './Component/Cart';
import NoPage from './Component/Nopage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Layout from './Component/Layout';
import axios from "axios"


const baseURL = "https://jsonplaceholder.typicode.com/posts/1";
export const itemContext = createContext();
function App() {

  const [post, setPost] = useState(null);

  async function showData() {
    function getData() {

      console.log("a")
      return axios.get(baseURL)
    }
    const data = await getData
    console.log(data)


  }
  // useEffect(() => {
  //   axios.get(baseURL).then((response) => {
  //     setPost(response.data);
  //   });
  // }, []);
  async function updateData() {
    axios
      .put(`${baseURL}`, {
        title: "Hello World!",
      })
      .then((response) => {
        setPost(response.data)
      })
  }
  async function deleteData() {
    axios
      .delete(`${baseURL}`)
    console.log("a")
  }


  const intro = {
    color: "white",
    backgroundColor: "black",
    textAlign: "center",
    border: "2px solid"
  }
  const router = {
    textAlign: "left",
    color: "white",
    border: "1px solid",
    borderColor: "orange"
  }
  const [items, setItems] = useState([
    {
      name: " Quần đùi ",
      price: 10000,
      des: " Quần đùi đi biển cho mùa hè ",
      amount: 0,
    },
    {
      name: " Áo sơ mi ",
      price: 330000,
      des: " Áo sơ mi sang trọng phù hợp đi làm, đi chơi ",
      amount: 0,
    },
    {
      name: " Áo dù ",
      price: 20000,
      des: " Áo khoác chống nắng phù hợp cho những người có nhu cầu di chuyển nhiều ",
      amount: 0
    },

  ])


  function bookService(index) {
    const clonedItem = [...items];
    clonedItem[index].amount += 1;
    setItems(clonedItem);
  }


  return (
    <>
      <h1 style={intro}> Chào mừng bạn đến với cửa hàng quần áo ABC</h1>
      <div className="App" >

        <itemContext.Provider value={{ items, bookService, setItems }}>
          <BrowserRouter style={router} >
            <Layout />
            {/* <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<App />} />
              <Route path="Additems" element={<Additems />} />
              <Route path="Cart" element={<Cart />} />
              <Route path="*" element={<NoPage />} />
            </Route>
          </Routes> */}
            <Routes>
              <Route path="/" element={<Body />} />
              <Route path="cart" element={<Header />} />
              <Route path="additems" element={<Additems />} />
              <Route path="*" element={<NoPage />} />
            </Routes>

          </BrowserRouter>


          {/* <Body /> */}


        </itemContext.Provider>

      </div>
      <h1> {post?.title} </h1>
      <button onClick={showData}>Click me</button>
      <button onClick={deleteData}>Click me</button>
    </>
  );
}



export default App;

