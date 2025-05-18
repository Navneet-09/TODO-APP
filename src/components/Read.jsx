import { toast } from 'react-toastify';

const Read = (props) => {
    const todos = props.todos;
    const settodos = props.settodos;

    const DeleteHandler=(id)=>{
        const newTodo = todos.filter((todo)=> todo.id != id);
        settodos(newTodo);
        toast.error("Todo deleted successfully!");
    }

    const renderTodos = todos.map((todo)=>{
        return <>
            <div className='w-full bg-gray-700 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-5 border border-gray-600 text-center mb-2'>
                <li key={todo.id} className='flex flex-row justify-between p-4'>
                <span className='text-gray-200'>{todo.title}</span>
                <span className='text-orange-500 font-bold' onClick={()=>DeleteHandler(todo.id)}>DELETE</span>
            </li>
            </div>
        </>
      });

  return (
    <>
         <div className='flex flex-col m-5 p-5'>
            <h1 className="text:2xl md:text-6xl font-medium text-gray-500 mb-5"><span style={{color:'tomato'}}>Pending</span> Todos</h1>
            <ol>{renderTodos}</ol>
         </div>
    </>
  )
}

export default Read