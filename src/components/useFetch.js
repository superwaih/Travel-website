import { useState, useEffect } from "react";

const useFetch = (url) =>{
    const [isPending, setIsPending] = useState(false)
    const [data, setData] = useState(null)
    const [error, setError]= useState(null)

    useEffect(() =>{
        setTimeout(()=>{
            fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('could not fectch data from that resource')
                }
                return res.json()
            })
            .then(data =>{
                setError(null)
                setData(data)
                setIsPending(false)
            })
            .catch(err => {
                setIsPending(false)
                setError(err.message)
            })
        }, 1000)
    }, [url])
    return {data, isPending, error}
}
export default useFetch;