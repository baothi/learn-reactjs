import React, { useState } from 'react';

const TodoList = () => {
    // const [name, setName] = useState("")
    const [todo, setTodo] = useState("")
    // const hankdleClickBtn = (event, mgs) => {
    //     // console.log(" >> run Hankdle Click ", event.target, " -> ", mgs)
    // }
    const [ListTodo, setListTodo] = useState([
        { id: 'todo1', name: 'Whatchanging youtube' },
        { id: 'todo2', name: 'Using youtube' },
        { id: 'todo3', name: 'Reading book' }
    ])

    const hankdleClickBtn = () => {
        let todoItem = {
            id: 'abc', name: todo
        }
    }
    // console.log(">> run ListTodo ", ListTodo)
    return (
        <div className="container">
            <div className="row">

                <label>Todo's Name   </label>
                {/* <input value={name} type="text"
                    onChange={(event) => {
                        // console.log("event.target : ", event)
                        setName(event.target.value)
                    }
                    } /> */}

                <input value={todo} type="text"
                    onChange={(event) => {
                        // console.log("event.target : ", event)
                        setTodo(event.target.value)
                    }
                    } />
                {/* <button type="button" onClick={() => {
                    hankdleClickBtn("event", 'buttonClick')
                }}>Submit</button> */}
                <button type="button" onClick={() => {
                    hankdleClickBtn()
                }}>Submit</button>



                <br /><br />
                {/* helo Todo list with name */}
                <div> ----------------List Todo ------------------------- </div>
                {ListTodo.map((item, index) => {
                    // console.log("check item: ", item, " index: ", index, "id ", item.id)
                    return (
                        <div id={item.id} key={item.id}>{item.name}</div>
                    )
                })}
            </div>
        </div>
    )
}

// class TodoList extends React.Component {

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

export default TodoList;