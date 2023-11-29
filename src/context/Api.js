import { createContext } from "react";
import axios from "axios";

export const NewsApiContext = createContext();

export const fetchNewsData = async () => {
    try {
        const newsData = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY
            }`
        );
        return newsData.data.articles;
    } catch (err) {
        console.log(err);
    }
};

export const searchNews = async (query) => {
    try {
        const searchData = await axios.get(
            `https://newsapi.org/v2/top-headlines?country=us&category=${query}&apiKey=${import.meta.env.VITE_NEWS_API_KEY
            }`
        );
        return searchData.data.articles;
    } catch (err) {
        console.log(err);
    }
};
