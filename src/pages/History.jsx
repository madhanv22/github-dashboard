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
    <div className="p-8 flex flex-col items-center">
      <h1 className="text-xl font-bold mb-6">Search History</h1>
      {history.length === 0 ? (
        <p>No search history available.</p>
      ) : (
        <div className="w-72">
          <ul className="space-y-4">
            {history.map((entry, index) => (
              <li
                key={index}
                className="flex justify-between items-center border gap-8 p-4 rounded-md w-72 shadow-sm"
              >
                <div className="flex items-center gap-4">
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
                        <p className="font-medium text-xl">{entry.result.username}</p>
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
        className="bg-red-600 text-white px-4 py-2 rounded-lg mb-6 w-60 mt-10"
      >
        Clear All
      </button>
    </div>
  );
};

export default History;


