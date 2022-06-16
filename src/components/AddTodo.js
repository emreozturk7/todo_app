function AddTodo() {
    return (
        <form className="p-4 flex gap-x-4 items-center border-b bg-white dark:bg-gray-700 dark:border-gray-800" >
            <input className="flex-1 h-10 rounded-md border border-gray-300 px-4 text-sm dark:bg-gray-500 dark:border-white/20 dark:placeholder:text-white"
                placeholder="Bir todo yazın"
                type="text" />
            <button className="h-10 rounded-lg bg-orange-500 text-white text-sm px-8 disabled:opacity-20 disabled:cursor-not-allowed"
                type="submit">
                Ekle
            </button>
        </form>
    )
}

export default AddTodo;