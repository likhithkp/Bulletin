import React, { useContext, useEffect, useState } from "react";
import { NewsApiContext } from "../context/Api";
import Image from "../assets/ImageNotFound.png";

const Home = () => {
  const { fetchNewsData } = useContext(NewsApiContext);
  const { searchNews } = useContext(NewsApiContext);

  const [newsData, setNewsData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [searchResultData, setSearchResultData] = useState([]);

  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: true,
    };
    return new Date(dateString).toLocaleString("en-US", options);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchNewsData();
        setNewsData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [fetchNewsData]);

  const fetchData = async () => {
    try {
      const searchData = await searchNews(searchInput);
      setSearchResultData(searchData);
      console.log(searchData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="mt-6 flex flex-col gap-3">
      <div className="flex items-center justify-center gap-3">
        <input
          className="w-96 py-2 outline-none border-b-2 text-black"
          type="text"
          placeholder="Search news..."
          onChange={(e) => {
            setSearchInput(e.target.value);
          }}
        />
        <button
          onClick={fetchData}
          className="bg-[#d4ecff] text-black font-medium px-7 py-2 rounded-sm hover:bg-[#d4e8f8]"
        >
          Search
        </button>
      </div>
      <div className="flex items-center justify-center mt-[2rem] h-full">
        <div className="grid grid-cols-3 gap-6 max-w-6xl">
          {(searchResultData.length > 0 ? searchResultData : newsData).map(
            (news, index) => {
              return (
                <div
                  className="w-[360px] min-h-[400px] flex flex-col items-start gap-3 border border-black-100 rounded-md overflow-hidden cursor-pointer box-bg-[#d4ecff] hover:shadow-lg hover:bg-[#f9fdff] hover:-translate-y-2 transition-all"
                  key={index}
                >
                  <a href={news?.url} target="_blank" rel="noopener noreferrer">
                    <img
                      className="object-cover h-[180px] w-full"
                      src={news?.urlToImage || Image}
                      alt={news?.title}
                    />
                    <div className="flex flex-col items-start gap-3 p-3">
                      <h2 className="text-lg font-bold text-[#1b456c]">
                        {news?.title}
                      </h2>
                      <div className="flex gap-4">
                        <p className="text-sm">{news?.source.name}</p>
                        <p className="text-sm">
                          {formatDate(news?.publishedAt)}
                        </p>
                      </div>
                      <p className=" text-base text-[#577592]">
                        {news?.description}
                      </p>
                    </div>
                  </a>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
