import { useEffect, useState } from "react";

interface Data {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
  followers: number;
  following: number;
  public_repos: number;
}

const FetchingDataState = () => {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState<Data>();
  const [fetchData, setFetchData] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (fetchData) {
      setLoading(true);
      fetch("https://api.github.com/users/hukoFpt")
        .then((response) => response.json())
        .then((data) => {
          setTimeout(() => {
            setData(data);
            setLoading(false);
            setFetchData(false);
          }, 2000);
        });
    }
  }, [fetchData]);

  return (
    <div>
      <input
        className="mt-2 w-1/4 mr-3 border border-slate-400 rounded-md px-2 py-1"
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter a GitHub username"
      />
      <button 
        onClick={() => setFetchData(true)}
        className="px-2 py-1 border border-slate-400 rounded-md"    
    >Fetch Data</button>
      {loading && <p>Fetching...</p>}
      {!loading && data && (
        <div className="flex">
          <div>
            <img
              src={data.avatar_url}
              alt={`${data.login}'s avatar`}
              width="95"
            />
            <h1 className="text-center font-semibold">{data.login}</h1>
          </div>
          <div className="px-2">
            <p>ID: {data.id}</p>
            <p>
              URL: <a href={data.html_url}>{data.html_url}</a>
            </p>
            <p>Followers: {data.followers}</p>
            <p>Following: {data.following}</p>
            <p>Public Repos: {data.public_repos}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchingDataState;
