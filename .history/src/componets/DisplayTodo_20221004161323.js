
const DisplayTodo = (props) => {
    const deleteTodoFromChild = (id) => {
        alert(id)
    }

    const ListTodo = props.chilData;
    return (
        <div>
            <div> ----------------List Todo ------------------------- </div>
            {ListTodo.map((item, index) => {
                // console.log("check item: ", item, " index: ", index, "id ", item.id)
                return (
                    <div id={item.id} key={item.id} onClick={() => deleteTodoFromChild(item.id)}>{item.name}</div>
                )
            })}
        </div>
    )
}

export default DisplayTodo;