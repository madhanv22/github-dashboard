import { useState, useEffect } from "react";

const History = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem("searchHistory")) || [];
    setHistory(storedHistory);
  }, []);

  const clearAllSearches = () => {
    setHistory([]);
    localStorage.setItem("searchHistory", JSON.stringify([]));
  };


  return (
    <div className="p-8 bg-pink-50 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-6">Search History</h1>
      {history.length === 0 ? (
        <p>No search history available.</p>
      ) : (
        <div className="w-full lg:w-1/2">
          <ul className="">
            <ul className="flex bg-gray-200 justify-between items-start border py-4 px-8 w-auto mb-[0.5px]">
              <li className="text-gray-600 font-medium">Search Team</li>
              <li className="text-gray-600 font-medium">Search Results</li>
            </ul>
            {history.map((entry, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row justify-between items-start border gap-8 p-4 w-auto mb-[0.8px] bg-white"
              >
              <div className="mx-4">
                {entry.result ? (
                  <>
                    <p className="text-gray-600 text-lg">{entry.result.username}</p>
                  </>
                ) : (
                  <p className="text-gray-700 text-lg">{entry.term}</p>
                )}
              </div>
                <div className="flex items-start gap-4 px-10">
                  {entry.result && entry.result.avatar && (
                    <img
                      src={entry.result.avatar}
                      alt={entry.result.username}
                      className="w-20 h-20 rounded-full border-2 border-black"
                    />
                  )}
                  <div>
                    {entry.result ? (
                      <>
                        <p className="text-lg">{entry.result.username}</p>
                        <a
                          href={entry.result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 underline"
                        >
                          View Profile
                        </a>
                      </>
                    ) : (
                      <p className="text-gray-600">Search Result not found "{entry.term}"</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
      <button
        onClick={clearAllSearches}
        className="bg-green-400 hover:bg-green-800 text-white px-4 py-2 mb-6 w-60 mt-10"
      >
        Clear All
      </button>
    </div>
  );
};

export default History;


