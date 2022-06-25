import React from 'react';

function MyAccount() {
    return (
        <article className="flex items-start space-x-6 p-6">
            <div className="min-w-0 relative flex-auto border p-2">

                <h2 className="font-semibold text-slate-900 truncate pr-20 text-2xl line-through">{localStorage.getItem('name')}</h2>
                <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">

                    <div className="flex-none w-full mt-2 font-small">
                        <dt className="sr-only">Cast</dt>
                        <dd className="text-slate-400">{localStorage.getItem('name')}</dd>
                    </div>

                    <div className="absolute top-4 right-10 flex items-center space-x-1">
                        <dt className="text-red-500">
                            <button className="bg-red-400 hover:bg-red-500 text-white p-3 rounded-lg" onClick={localStorage.setItem('isAuthenticated', false)}>Çıkış Yap</button>
                        </dt>
                    </div>
                </dl>
            </div>
        </article>
    );
}

export default MyAccount;

