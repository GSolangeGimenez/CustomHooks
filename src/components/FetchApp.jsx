import { useEffect } from "react"
import { useFetch } from "../hooks/useFetch"

export const FetchApp = () => {
    const url = 'https://jsonplaceholder.typicode.com/users/'

    const { data, isLoading, error, fetchData } = useFetch()

    useEffect(() => {
        fetchData(url, 'GET')
    }, [])

    return (
        <>
            <h2>Lista de usuarios:</h2>
            {isLoading ? 
                <h4>Cargando...</h4>
             : error ? 
                <h4>Ha ocurrido un error: {error}</h4>
             : 
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data && data.map(elem => (
                            <tr key={elem.id}>
                                <th scope="row">{elem.id}</th>
                                <td>{elem.name}</td>
                                <td>{elem.email}</td>
                                <td>{elem.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
        </>
    )
}
