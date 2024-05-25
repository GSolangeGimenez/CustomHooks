import {useState } from "react";

export const useFetch = () => {
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        error: null
    });

    const { data, isLoading, error} = state

    const fetchData = async (url, method, bodyData = null) => {
        if (!url) return;
        try {
            const options = {
                method: method,  //que nos van a estar pasando por afuera
                headers: {
                    'Content-type': 'application/json; charset=UTF-8' //el header lo sacamos jsonplaceholder en el apartado de "Creating Resource"
                },
                body: method=='GET'||method=='DELETE'? null: JSON.stringify(bodyData) //Aca le pasamos el bodyData que nos hayan pasado y en el caso que venga null,body no se va a enviar. 
            }
            const res = await fetch(url,options)
            const data = await res.json()
            console.log(data)
            setState({
                data,
                isLoading: false,
                error: null
            });
        } catch (error) {
            setState({
                data: null,
                error: error,
                isLoading: false,
            })
        }
    }

    return {
        data,
        isLoading,
        error,
        fetchData
    }
}