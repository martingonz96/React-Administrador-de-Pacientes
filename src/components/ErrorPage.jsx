import { useRouteError } from "react-router-dom";


export default function ErrorPage () {

    const error = useRouteError()

    console.log(error.message)

    return(
        <div className=" space-y-8">
        <h1 className=" text-center text-blue-900 text-6xl font-bold">Error</h1>
        <p className=" text-center">Hubo un error</p>
        <p className=" text-center">{error.statusText || error.message}</p>
        </div>
        
    )
}