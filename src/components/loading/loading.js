import React from "react";
import ReactLoading from "react-loading";

import { LoadingContainer } from './loading.style';

const Loading = () => {
    return(
        <LoadingContainer>
            <ReactLoading type="spin" color="#05C7F2" />
        </LoadingContainer>
    )
}

export default Loading;