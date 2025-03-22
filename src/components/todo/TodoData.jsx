const TodoData = (props) => {
    // props là một biến object
    // {
    //     name: "Sang"
    //     age: 23
    //     data:{}
    // }
    const { name, age, data } = props;
    console.log("Check log ==>", props);
    return (

        <div className='todo-data'>
            <div>My name is  {name}</div>
            <div>Learn React</div>
            <div>Learn React</div>
        </div>
    );
}

export default TodoData;