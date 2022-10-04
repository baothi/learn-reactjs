import React, { useState } from 'react';
import _ from 'lodash';
import AddTodo from './AddTodo';
import DisplayTodo from './DisplayTodo';

const Home = () => {
    // const [name, setName] = useState("")
    const [todo, setTodo] = useState("")
    // const hankdleClickBtn = (event, mgs) => {
    //     // console.log(" >> run Hankdle Click ", event.target, " -> ", mgs)
    // }
    const [ListTodo, setListTodo] = useState([
        { id: 'todo1', name: 'https://github.com/konigle/fs-task 0908257287' },
        { id: 'todo2', name: 'Using youtube' },
        { id: 'todo3', name: 'Reading book' }
    ])

    const randomIntFromInterval = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min
    }


    const hankdleClickBtn = () => {
        if (!todo) {
            alert("Todo's name is not empty")
            return;
        }
        let todoId = randomIntFromInterval(4, 99)
        let todoItem = {
            id: `todo${todoId}`,   // string template
            name: todo
        }
        // cach 1
        let curentTodoList = _.clone(ListTodo);
        curentTodoList.push(todoItem)
        // console.log(" check curentTodoList : ", curentTodoList)
        setListTodo(curentTodoList)
        setTodo("")
        // cach 2
        //setListTodo([...ListTodo, todoItem]) // toan tử ... này là spread operator đây là toán tử copy 
    }

    const handleDeleteTodo = (id) => {
        let curentTodoList = _.clone(ListTodo);
        curentTodoList = curentTodoList.filter(item => item.id !== id);
        // curentTodoList = curentTodoList.filter(item => {
        //     if (item.id !== id) return item;
        // });
        setListTodo(curentTodoList);
    }
    const myInfor = { channel: "hoc lap trinh reactjs", age: 25 }

    return (
        <div className="container">

            <div className="row">
                <AddTodo
                    todo={todo}
                    setTodo={setTodon}
                    hankdleClickBtn={hankdleClickBtn}
                />
                <DisplayTodo
                    chilData={ListTodo} // x=u => x <- y
                    name={"bao thi"} // x=u => x <- y
                    myInfor={myInfor} // x=u => x <- y
                    deleteTodoInParent={handleDeleteTodo}
                />

            </div>
        </div>
    )
}

// class Home extends React.Component {

//     // khai báo state
//     state = {
//         name: 'todoList'
//     }
//     render() {
//         return (
//             <div className="container">
//                 <div className="row">

//                     <label>Your Name   </label>
//                     <input type="text" onChange={(event) => this.setState({ name: event.target.value })} />
//                     <br /><br />
//                     helo Todo list with name = {this.state.name}
//                 </div>
//             </div>
//         )
//     }
// }

export default Home;