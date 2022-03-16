import React from "react";
import ContentLoader from "react-content-loader";

function ProductLoading(){
    return(
        <ContentLoader  height={500} width={350}  speed={2} foregroundColor={'#adadad'}  className="w-full">
            <rect x="0" y="0" rx="4" ry="4" width="350" height="380" />
            <rect x="0" y="400" rx="4" ry="4" width="350" height="10" />
            <rect x="0" y="420" rx="4" ry="4" width="350" height="10" />
            <rect x="0" y="440" rx="4" ry="4" width="350" height="30" />
        </ContentLoader>)
}export default ProductLoading
