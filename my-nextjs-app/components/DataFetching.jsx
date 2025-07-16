async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

import React from "react";

const DataFetching = async () => {

  const data = await getData();
  console.log(data);
  

  return (
    <div>
      <h1>Data Fetching Example</h1>
        <ul>
            {data.map((item) => (
            <li key={item.id}>
                <h2 className="text-cyan-400" >{item.title}</h2>
                <p>{item.body}</p>
                <hr />
            </li>
            ))}
        </ul>
      <p>Total Posts: {data.length}</p>
    </div>
  );
};

export default DataFetching;
