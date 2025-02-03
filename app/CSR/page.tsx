'use client'

import { useEffect, useState } from "react"


export default function CSR(){
    const [message, setMessages] = useState<{message: string} | null>(null);

    useEffect(() => {
        fetch('http://192.168.1.35:3000/api/hello')
        .then((res) => res.json())
        .then((data) => setMessages(data));
    }, []);

    return (
        <div className="container">
            <h1>{message?.message ?? 'Loading...'}</h1>
            <button>{message?.message ?? 'Loading Button...'}</button>
        </div>
    )
}