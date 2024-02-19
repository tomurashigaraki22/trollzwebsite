import React from "react";
import SearchRes from "../components/SearchRes";
import { useLocation, useParams } from "react-router-dom";
import NavHome from "../components/NavHome";

const Search = () => {
    const location = useLocation();
    const items = location.state?.items; // Adding optional chaining to handle potential null or undefined

    if (!items) {
        // Handle case where items is null or undefined
        return <div>No items found</div>;
    }

    console.log('Ite: ', items);

    return (
        <div>
            <NavHome/>
            <div>
                <SearchRes item={items} />
            </div>
        </div>
    );
}


export default Search;