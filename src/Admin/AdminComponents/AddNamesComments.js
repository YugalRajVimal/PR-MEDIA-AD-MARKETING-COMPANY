// import React, { useState, useEffect } from "react";
// import { useAdmin } from "../../context/AdminContext";

// const AddNamesComments = () => {
//   const [input, setInput] = useState("");
//   const [nameCommentList, setNameCommentList] = useState([]);
//   const [oldUploads, setOldUploads] = useState([]);
//   const { uploadNameComments, getAllNameComments, deleteAllNameComments } =
//     useAdmin();

//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchOldUploads = async () => {
//       const data = await getAllNameComments(currentPage, 50); // pass limit
//       setOldUploads(data.nameComments);
//       setTotalPages(data.totalPages);
//     };
//     fetchOldUploads();
//   }, [currentPage]);

//   const handlePageChange = (page) => {
//     if (page >= 1 && page <= totalPages) {
//       setCurrentPage(page);
//     }
//   };

//   // useEffect(() => {
//   //   const fetchOldUploads = async () => {
//   //     const oldUploads = await getAllNameComments();
//   //     setOldUploads(oldUploads);
//   //   };
//   //   fetchOldUploads();
//   // }, []);

//   const handleExtract = () => {
//     const lines = input
//       .split("\n")
//       .map((line) => line.trim())
//       .filter(Boolean);
//     const commentsArray = [];

//     for (let i = 0; i < lines.length; i++) {
//       const name = lines[i];
//       let comment = "";

//       // Collect all lines until a comma is found (indicating end of comment)
//       while (i + 1 < lines.length) {
//         i++;
//         comment += lines[i] + " ";
//         if (lines[i].endsWith(",")) break;
//       }

//       // Remove the trailing comma and trim spaces
//       comment = comment.replace(/,$/, "").trim();

//       // Remove the last comma from each line if it exists
//       comment = comment
//         .split("\n")
//         .map((line) => line.replace(/,$/, ""))
//         .join("\n")
//         .trim();

//       commentsArray.push({ name, comment });
//     }
//     setNameCommentList(commentsArray);
//     setInput("");
//   };

//   const handleSave = async () => {
//     // Upload the name and comments to the server
//     const uploadResult = await uploadNameComments(nameCommentList);
//   };

//   const handleDeleteAll = async () => {
//     // Delete all name and comments from the server
//     const deleteResult = await deleteAllNameComments();
//   };

//   return (
//     <div className="w-full flex justify-center items-center h-screen relative">
//       <div className="w-full h-full bg-white shadow-md rounded-lg p-2 md:p-6 w-1/2 overflow-y-auto">
//         <h2 className="text-2xl font-bold text-gray-800 mb-4">
//           Add Names and Comments
//         </h2>
//         <div className="flex flex-col gap-2 items-center mb-4">
//           <textarea
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Enter Input Text"
//             className="py-2 pl-2 min-h-[200px] border border-[1px] border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
//           />
//           <div className="flex gap-2">
//             <button
//               onClick={handleExtract}
//               className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
//             >
//               Extract
//             </button>
//             <button
//               onClick={handleSave}
//               className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
//             >
//               Save
//             </button>
//           </div>
//         </div>
//         <div className="overflow-y-auto max-h-96">
//           <h3 className="text-xl font-bold text-gray-800 mt-4">
//             Extracted Name-Comments:
//           </h3>
//           <ul>
//             {nameCommentList.map((item, index) => (
//               <li
//                 key={index}
//                 className="py-2 px-4 border-b border-gray-200 last:border-none"
//               >
//                 <span className="text-sm md:text-base font-bold text-gray-800">
//                   {item.name}
//                 </span>
//                 <span className="text-sm md:text-base text-gray-600">
//                   {" "}
//                   - {item.comment}
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <h3 className="text-xl font-bold text-gray-800 mt-4 flex justify-between items-center border-x-0 border-b-0 border-t-[2px] border-black pt-4">
//             <span>Old Uploads:</span>

//             <button
//               onClick={handleDeleteAll}
//               className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
//             >
//               Delete All
//             </button>
//           </h3>
//           <ul>
//             {oldUploads.map((item, index) => (
//               <li
//                 key={index}
//                 className="py-2 px-4 border-b border-gray-200 last:border-none"
//               >
//                 <span className="text-sm md:text-base font-bold text-gray-800">
//                   {item.name}
//                 </span>
//                 <span className="text-sm md:text-base text-gray-600">
//                   {" "}
//                   - {item.comment}
//                 </span>
//               </li>
//             ))}
//           </ul>
//           <div className="flex justify-center gap-2 mt-4">
//             <button
//               disabled={currentPage === 1}
//               onClick={() => handlePageChange(currentPage - 1)}
//               className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Prev
//             </button>

//             <span className="px-3 py-1">
//               {currentPage} / {totalPages}
//             </span>

//             <button
//               disabled={currentPage === totalPages}
//               onClick={() => handlePageChange(currentPage + 1)}
//               className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
//             >
//               Next
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddNamesComments;
import React, { useState, useEffect } from "react";
import { useAdmin } from "../../context/AdminContext";

const AddNamesComments = () => {
  const [input, setInput] = useState("");
  const [nameCommentList, setNameCommentList] = useState([]);
  const [oldUploads, setOldUploads] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [limit] = useState(50); // fixed 50 per your requirement
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [deletingDuplicates, setDeletingDuplicates] = useState(false); // Added to track deletion process

  const {
    uploadNameComments,
    getAllNameComments,
    deleteAllNameComments,
    deleteDuplicateComments,
  } = useAdmin();

  useEffect(() => {
    let active = true;
    (async () => {
      setLoading(true);
      const data = await getAllNameComments({ page: currentPage, limit });
      if (!active) return;
      setOldUploads(data.nameComments);
      setTotalPages(data.totalPages);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, [currentPage, limit, getAllNameComments]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleExtract = () => {
    const lines = input
      .split("\n")
      .map((line) => line.trim())
      .filter(Boolean);
    const commentsArray = [];

    for (let i = 0; i < lines.length; i++) {
      const name = lines[i];
      let comment = "";

      // Collect all lines until a comma is found (indicating end of comment)
      while (i + 1 < lines.length) {
        i++;
        comment += lines[i] + " ";
        if (lines[i].endsWith(",")) break;
      }

      // Remove the trailing comma and trim spaces
      comment = comment.replace(/,$/, "").trim();

      // Remove the last comma from each line if it exists
      comment = comment
        .split("\n")
        .map((line) => line.replace(/,$/, ""))
        .join("\n")
        .trim();

      commentsArray.push({ name, comment });
    }
    setNameCommentList(commentsArray);
    setInput("");
  };

  const handleSave = async () => {
    await uploadNameComments(nameCommentList);
  };
  const handleDeleteAll = async () => {
    await deleteAllNameComments();
    setCurrentPage(1); // reset and refetch page 1
  };

  const handleDeleteDuplicates = async () => {
    setDeletingDuplicates(true); // Start deletion process indicator
    await deleteDuplicateComments();
    setDeletingDuplicates(false); // End deletion process indicator
  };

  return (
    <div className="w-full flex justify-center items-center h-screen relative">
      <div className="w-full h-full bg-white shadow-md rounded-lg p-2 md:p-6 w-1/2 overflow-y-auto">
        {/* ... your top UI unchanged ... */}
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Add Names and Comments
        </h2>
        <div className="flex flex-col gap-2 items-center mb-4">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter Input Text"
            className="py-2 pl-2 min-h-[200px] border border-[1px] border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-600 w-full"
          />
          <div className="flex gap-2">
            <button
              onClick={handleExtract}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
            >
              Extract
            </button>
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
            >
              Save
            </button>
          </div>
        </div>

        <div className="overflow-y-auto max-h-96">
          <h3 className="text-xl font-bold text-gray-800 mt-4">
            Extracted Name-Comments:
          </h3>
          <ul>
            {nameCommentList.map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 border-b border-gray-200 last:border-none"
              >
                <span className="text-sm md:text-base font-bold text-gray-800">
                  {item.name}
                </span>
                <span className="text-sm md:text-base text-gray-600">
                  {" "}
                  - {item.comment}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <h3 className="text-xl font-bold text-gray-800 mt-4 flex justify-between items-center border-x-0 border-b-0 border-t-[2px] border-black pt-4">
          <span>Old Uploads:</span>
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
          >
            Delete All
          </button>
        </h3>

        {loading ? (
          <p className="text-center py-4">Loading page {currentPage}…</p>
        ) : (
          <ul>
            {oldUploads.map((item, index) => (
              <li
                key={index}
                className="py-2 px-4 border-b border-gray-200 last:border-none"
              >
                <span className="text-sm md:text-base font-bold text-gray-800">
                  {item.name}
                </span>
                <span className="text-sm md:text-base text-gray-600">
                  {" "}
                  - {item.comment}
                </span>
              </li>
            ))}
          </ul>
        )}

        <div className="flex justify-center gap-2 mt-4">
          <button
            disabled={currentPage === 1 || loading}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Prev
          </button>

          <span className="px-3 py-1">
            {currentPage} / {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages || loading}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-3 py-1 bg-gray-300 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>

        <div className="flex flex-col items-end justify-end pb-4 pt-10">
          <button
            onClick={handleDeleteDuplicates}
            className="bg-red-500 text-sm hover:bg-red-700 text-white font-bold py-1 px-4 rounded-lg ml-2 transition duration-300 ease-in-out"
          >
            Delete Duplicate Name-Comments
          </button>

          {deletingDuplicates && (
            <p className="text-center py-4">Deleting duplicate comments...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddNamesComments;
