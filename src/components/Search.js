import React, { useState, useEffect } from "react";

const URL = "https://api.github.com/users/";

function Search() {
    const [inputText, setInputText] = useState("");

    const fetchingData = async () => {
        const res = await fetch(URL + inputText);
        const data = await res.json();
        console.log(data);
    };

    // useEffect(() => {
    //     fetchingData();
    //     console.log("chiamo api");
    // }, [URLOK]);

    function handleSubmit(e) {
        e.preventDefault();
    }

    function handleChange(e) {
        setInputText(e.target.value);
    }

    function handleClick() {
        fetchingData();
        setInputText("");
    }

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <input
                    value={inputText}
                    onChange={handleChange}
                    type="text"
                    name=""
                    id=""
                />
                <button onClick={handleClick} type="submit">
                    Search
                </button>
            </form>
        </div>
    );
}

export default Search;
