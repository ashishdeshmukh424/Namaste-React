import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.log("error==>>>", error);
    return (
        <div className="error">
            <h1>Ooops!!!!</h1>
            <h2> Something Went Wrong!!</h2>
            <h3> {error.status}: {error.statusText}</h3>
            <h4> message: {error.error.message}</h4>
        </div>
    );
}

export default Error;