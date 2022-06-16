function TodoItem({ todo }) {
    return (
        <article className="flex items-start space-x-6 p-6">
            <div className="min-w-0 relative flex-auto border p-2">
                <h2 className="font-semibold text-slate-900 truncate pr-20 text-2xl">{todo.title}</h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                    <div className="flex-none w-full mt-2 font-small">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">Emre ÖZTÜRK</dd>
                    </div>
                    <div className="flex-none w-full font-small">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">12:35 - 24:08:2022</dd>
                    </div>


                    <div className="absolute top-6 right-12 flex items-center space-x-1">
                        <dt className="text-sky-500">
                            <button className="bg-sky-400 hover:bg-sky-500 text-white p-3 rounded-lg">Yapıldı olarak işaretle</button>
                        </dt>
                    </div>

                    <div className="absolute top-6 right-60 flex items-center space-x-1">
                        <dt className="text-red-500">
                            <button className="bg-red-400 hover:bg-red-500 text-white p-3 rounded-lg">Sil</button>
                        </dt>
                    </div>
                </dl>
            </div>
        </article>
    )
}

export default TodoItem;