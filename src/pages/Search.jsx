import { useState } from "react";

const Search = () => {
  const [username, setUsername] = useState("");
  const [searchHistory, setSearchHistory] = useState(
    JSON.parse(localStorage.getItem("searchHistory")) || []
  );
  const [error, setError] = useState(null);

  const handleSearch = async () => {
    if (!username.trim()) return;

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) throw new Error("User not found");
      const data = await response.json();

      const newHistory = [
        ...searchHistory,
        { term: username, result: { username: data.login, avatar: data.avatar_url, url: data.html_url } }
      ];

      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));

      setError(null);
    } catch (err) {
      const newHistory = [
        ...searchHistory,
        { term: username, result: null }
      ];
      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));

      setError("User not found");
    }

    setUsername(""); 
  };

  const handleRemoveUser = (index) => {
    const updatedHistory = [...searchHistory];
    updatedHistory[index].isClosed = true; 
    setSearchHistory(updatedHistory);
    localStorage.setItem("searchHistory", JSON.stringify(updatedHistory));
  };

  return (
    <div className="flex flex-col bg-pink-50 items-center p-8 h-screen">
      <h1 className="text-xl font-bold mb-6">Search GitHub User</h1>
      <div className="flex gap-6 items-center flex-col mb-6">
        <input
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 w-72"
        />
        <button
          onClick={handleSearch}
          className="bg-green-500 hover:bg-green-800 text-white px-4 py-2 w-72"
        >
          Search
        </button>
      </div>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {searchHistory.length > 0 && (
        <div className="mt-6 w-full lg:w-1/2">
          <h2 className="text-lg font-bold mb-4 md:mx-24">Search Results</h2>
          {searchHistory.map((user, index) => (
            !user.isClosed && (
              <div key={index} className="border bg-white py-6 px-4 w-full gap-x-6 md:gap-x-12 mb-[0.8px] flex justify-between items-start">
                <div className="flex justify-between items-start gap-x-6 md:gap-x-12">
                  {user.result ? (
                    <>
                      <img
                        src={user.result.avatar}
                        alt={user.result.username}
                        className="w-12 h-12 md:w-20 md:h-20 rounded-full border-2 border-black"
                      />
                      <div>
                        <p className="text-sm md:text-lg">Github User</p>
                        <p className="font-medium text-base md:text-lg">{user.result.username}</p>
                        <a
                          href={user.result.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-800 underline"
                        >
                          View Profile
                        </a>
                      </div>
                    </>
                  ) : (
                    <div className="text-gray-600">
                      <p>User not found "{user.term}"</p>
                    </div>
                  )}
                </div>
                <button
                  onClick={() => handleRemoveUser(index)}
                  className="text-orange-400 hover:text-orange-800 font-bold text-3xl"
                >
                  &times;
                </button>
              </div>
            )
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;




