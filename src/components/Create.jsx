import { nanoid } from "nanoid";
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todoContext } from "../wrapper";
import { useContext } from "react";

const Create = () => {
  // const todos = props.todos;
  // const settodos = props.settodos;
  const [todos, settodos] = useContext(todoContext);

  const { register, handleSubmit, reset, formState:{errors}} = useForm();

  const submitHandler = (data) => {
    data.id = nanoid();
    data.isCompleted=false;
    settodos([...todos, data]);
    reset();
    toast.success("Todo Added successfully.");
  };

  return (
    <>
      <div className="flex flex-col m-5 p-5">
        <h1 className="text-2xl font-medium text-gray-500 mb-5 md:text-6xl">
          Set Reminders for your<br /> <span className="text-blue-500">Daily </span>
          Tasks.
        </h1>
        <form onSubmit={handleSubmit(submitHandler)}>
          <input
            className="border-b-4 border-gray-500 text-white text:2xl md:text-3xl w-full focus:border-indigo-500 focus:outline-none mb-5 p-4"
            {...register("title",{required:true})}
            type="text"
            placeholder="Title"
            // onChange={(e) => setTitle(e.target.value)}
            // value={title}
          />
          <br />
          {errors.title && <span className="font-medium text-orange-500 mb-5">Title cannot be empty</span>}
          <br />

          <button className="text-sky-400 bg-black font-medium border-2 border-gray-500 rounded-sm text-lg md:text-2xl px-5 py-2.5 text-center hover:text-indigo-700">
            Create Todo
          </button>
        </form>
      </div>
    </>
  );
};

export default Create;
