import {createContext} from "react";
import axios from "axios";

export const NewsApiContext = createContext();

export const fetchNewsData = async () => {
    try{
        const newsData = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        return (newsData.data.articles);
    }catch(err){
        console.log(err);
    }
}

export const searchNews = async (query) => {
    try{
        const searchData = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        return(searchData.data.articles)
    }catch(err){
        console.log(err)
    }
}

export const beautyNews = async () => {
    try{
        const searchData = await axios.get(`https://newsapi.org/v2/everything?q=beauty&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        console.log(searchData.data)
        return(searchData.data.articles)
    }catch(err){
        console.log(err)
    }
}
export const sportsNews = async () => {
    try{
        const searchData = await axios.get(`https://newsapi.org/v2/everything?q=sports&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        console.log(searchData.data)
        return(searchData.data.articles)
    }catch(err){
        console.log(err)
    }
}

export const technologyNews = async () => {
    try{
        const searchData = await axios.get(`https://newsapi.org/v2/everything?q=technology&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        console.log(searchData.data)
        return(searchData.data.articles)
    }catch(err){
        console.log(err)
    }
}

export const financeNews = async () => {
    try{
        const searchData = await axios.get(`https://newsapi.org/v2/everything?q=finance&sortBy=popularity&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`)
        console.log(searchData.data)
        return(searchData.data.articles)
    }catch(err){
        console.log(err)
    }
}