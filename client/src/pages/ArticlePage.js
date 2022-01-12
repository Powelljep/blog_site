import React from "react";
import { useParams } from 'react-router-dom';

const ArticlePage = ({ match }) => {
    const {name} = useParams();
    return(<>
        <h1>Article Page {name} </h1>
    </>
    );
}

export default ArticlePage;