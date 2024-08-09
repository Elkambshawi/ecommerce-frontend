import { Container } from "@mui/material";
import { Link } from "react-router-dom";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import styles from "./styles.module.css"

const { errorSection } = styles;

function Error() {
    const error = useRouteError()
    
    let statusErrorText: string;
    let statusErrorCode: number

    if (isRouteErrorResponse(error)) {
        statusErrorText = error.statusText
        statusErrorCode = error.status
    } else {
        statusErrorText = "Not Found"
        statusErrorCode = 404
    }
    
    return (
        <Container className={errorSection}>
            <h2>{statusErrorCode}</h2>
            <h2>{statusErrorText}</h2>
            <Link to="/" replace={true}><p>Click here to return With safe mode</p></Link>
        </Container>
    )
}

export default Error;