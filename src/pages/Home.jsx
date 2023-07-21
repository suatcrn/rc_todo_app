import React, { useEffect, useState } from 'react'
import TodoAdd from '../components/TodoAdd'
import TodoList from '../components/TodoList'
import axios from 'axios'

const Home = () => {
    const [todosItems, setTodosItems] = useState([])//Burada sadece todoItems in türünün [] dizi oldugu ifade edildi

    
    const getTodos=async()=>{
        const URL='https://64b022b9c60b8f941af54a36.mockapi.io/api/todo'
        try {
            const{data} = await axios (URL) //const resp = await axios (URL) const {data} =resp  burada her zaman data olarak verir key'i   {data: Array(6), status: 200, statusText: 'OK', headers: AxiosHeaders, config: {…}, …}
            setTodosItems(data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getTodos()   //Sayfa acildiginda sadece 1 kere gelir useEffect sebebiyle
    },[])
  return (
    <div>
        <TodoAdd getTodos={getTodos}/>
        <TodoList todoList={todosItems} getTodos={getTodos}/>
    </div>
  )
}

export default Home