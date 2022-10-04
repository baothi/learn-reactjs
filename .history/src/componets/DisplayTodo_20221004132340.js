
const DisplayTodo = () => {
    return (
        <div> ----------------List Todo ------------------------- </div>
                {
        ListTodo.map((item, index) => {
            // console.log("check item: ", item, " index: ", index, "id ", item.id)
            return (
                <div id={item.id} key={item.id} onClick={() => handleDeleteTodo(item.id)}>{item.name}</div>
            )
        })
    }
    )
}

export default DisplayTodo;