import React, { useEffect, useState } from "react";

const ClientName = () => {
  const [name, setName] = useState();
  useEffect(() => {
    const n = localStorage.getItem("name");
    if (n) setName(n);
  }, []);

  return (
    name && (
      <div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 text-center">
          {name}
        </h1>
      </div>
    )
  );
};

export default ClientName;
