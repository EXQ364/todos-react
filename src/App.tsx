import React, { MutableRefObject, useEffect, useRef, useState } from 'react'
import { Header } from './components/Header/Header'
import './App.css'
import Wrapper from './components/UI/Wrapper/Wrapper'
import InlineFlex from './components/UI/Layout/InlineFlex/InlineFlex'
import { ITodo } from './types/interfaces'
import { TodoContext } from './hooks/TodoContext'
import Count from './components/Count/Count'
import ListColumn from './components/Count/ListColumn/ListColumn'
import TodoCard from './components/TodoCard/TodoCard'
import axios from 'axios'




export default function App() {


  const [todos, setTodos] = useState<ITodo[]>
    ([
      {
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
      },
      {
        "id": 2,
        "title": "quis ut nam facilis et officia qui",
        "completed": false
      },
      {
        "id": 3,
        "title": "fugiat veniam minus",
        "completed": false
      },
      {
        "id": 4,
        "title": "et porro tempora",
        "completed": true
      },
      {
        "id": 5,
        "title": "laboriosam mollitia et enim quasi adipisci quia provident illum",
        "completed": false
      },

    ]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=100').then((res)=>
        {setTodos(res.data);}
    );
  }, []);

  function computeHeight(){

  }

  return (
    <Wrapper>
      <Header/>
      <TodoContext.Provider value={todos}>
        <Count/>
      </TodoContext.Provider>
      <InlineFlex style={{maxHeight:'85vh'}}>
        <ListColumn>
          {
            todos.map(todo =>
              <TodoCard key={todo.id} todo={todo} />
            )
          }
        </ListColumn>
      </InlineFlex>
    </Wrapper>

  )
}

