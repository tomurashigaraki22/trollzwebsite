import React from "react";
import asset from '../assets/asset.png'

const Asset = () => {
    return(
        <div>
            <div>
                <img
                src={asset}
                alt="Asset"
                className="w-[1100px]"
                />
            </div>
        </div>
    );
}

export default Asset;