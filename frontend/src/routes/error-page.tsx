import {isRouteErrorResponse, useRouteError} from 'react-router-dom';

export default function ErrorPage() {
    const error = useRouteError();
    let errorMessage = isRouteErrorResponse(error) ? error.statusText : 'Unknown Error';

    return (
        <div id="error-page">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{errorMessage}</i>
            </p>
        </div>
    );
}
