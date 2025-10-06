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
        <h1 className="text-lg md:text-xl w-fit bg-[#dab998] py-1 px-6 mx-auto rounded-md   text-gray-900 text-center font-serif">
          {name}
        </h1>
      </div>
    )
  );
};

export default ClientName;
