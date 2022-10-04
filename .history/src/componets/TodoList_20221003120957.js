import React, { useState } from 'react';

const TodoList = () => {
    const [name, setName] = useState("")
    const hankdleClickBtn = () => {

    }
    return (
        <div className="container">
            <div className="row">

                <label>Your Name   </label>
                <input value={name} type="text"
                    onChange={(event) => {
                        // console.log("event.target : ", event)
                        setName(event.target.value)
                    }
                    } />
                <button type="button" onClick={() => hankdleClickBtn()}>Submit</button>
                <br /><br />
                helo Todo list with name = {name}
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