
const AddTodo = () => {
    return (
        <div>
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
        </div>
    )
}
export default AddTodo