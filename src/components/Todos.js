import TodoItem from "./TodoItem";
import { useTodo } from "../contexts/TodoContext";

function Todos() {
    const { state } = useTodo();

    return (
        <>
            {
                state.todos.length > 0 ? (
                    <ul className="bg-white dark:bg-transparent">
                        {
                            state.todos.map((todo, index) => <TodoItem todo={todo} key={index} index={index} />)
                        }
                    </ul>
                ) : (
                    <div className="p-5">
                        <div className="bg-blue-100 p-5 rounded text-sm text-blue-800">
                            Henüz hiç todo eklemediniz!
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Todos;