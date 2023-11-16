import React, { useState } from "react";
import Data from "./Data.json";

function Emoji() {
    const [data, setData] = useState(Data);

    // const data = Data

    return (

        <>
            <center>
                <input
                    style={{ border: "2px solid black" }}
                    type="text"
                    onChange={(e) =>
                        setData(Data.filter((item) =>
                            item.title.toLowerCase().includes(e.target.value.toLowerCase())
                        ))
                    }
                />
                {/* <button onClick={onSearch}>Search</button> */}
                <div>
                    {data.map((d) => {
                        const { title, symbol, keywords } = d;
                        return (

                            <div key={title}>
                                <div>{title}</div>
                                <div>{symbol}</div>
                                <div>{keywords}</div>
                            </div>

                        );
                    })}
                </div>
            </center>
        </>
    );
}

export default Emoji;