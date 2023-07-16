import { useRouteError } from "react-router-dom";


const Error = ()=>{

    const err = useRouteError();

    return (
        <div>
            Opps!!
             <div>
                Something went wrong!!
             </div>
             <span>{err.status} : {err.statusText}</span>
        </div>
    );
}

export default Error; 