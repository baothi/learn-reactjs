import React, { useState } from 'react';

const TodoList = () => {
    const [name, setName] = useState("Bao Thi tu hoc lap trinh")
    return (
        <div className="container">
            <div className="row">

                <label>Your Name   </label>
                <input value={name} type="text" onChange={(event) => setName(event.target.value)} />
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