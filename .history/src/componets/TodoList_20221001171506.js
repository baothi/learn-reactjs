import React from 'react';

// const TodoList = () => {
//     return (
//         <div className="container">
//             <div className="row">heloo TodoList nè mọi người ơi </div>
//         </div>
//     )
// }

class TodoList extends React.Component {
    state = {
        name: 'todoList'
    }
    render() {
        return (
            <div className="container">
                <div className="row">

                    <label>Your Name</label>
                    <input type="text" />
                    <br /><br />
                    helo Todo list with name {this.state.name}
                </div>
            </div>
        )
    }
}

export default TodoList;