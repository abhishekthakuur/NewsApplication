import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";
import LoadingBar from 'react-top-loading-bar';
import img from '../pexels-photomix-company-242492.jpg'

export default function News(props) {
    let [articles, setArticles] = useState([]);
    let [totalResults, setTotalResults] = useState(0);
    let [page, setPage] = useState(1);
    let [loading, setLoading] = useState(false);
    const [progress, setProgress] = useState(0)
 
    let resultNews = async () => {
        setProgress(0);
        const url =`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=6e2ce606efe4462da9239d119629111e&page=${page}&pageSize=${props.pageSize}`;
        setProgress(30);
        setLoading(true);
        let data = await fetch(url);
        setProgress(60);
        let parsedData = await data.json();
        setArticles(parsedData.articles);
        setTotalResults(parsedData.totalResults);
        setProgress(100);
        setLoading(false)
    };

    const fetchMoreData = async () => {   
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=6e2ce606efe4462da9239d119629111e&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1) 
        let data = await fetch(url);
        let parsedData = await data.json()
        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
        
      };

    const captialize = (word) =>{
        let newStr = word.charAt(0).toUpperCase() + word.slice(1);
        return newStr;
    }
 
    useEffect(() => {
        document.title = `Headlineharbour - ${captialize(props.category)}`;
        resultNews();
    }, []);

    
    return (
        <>
        <LoadingBar
        color='#f11946'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
    <div className="container my-4">
        <h2 className="text-center my-3">HeadlineHarbour - Top Headlines -{captialize(props.category)}</h2>
        <InfiniteScroll
            dataLength={articles.length} //This is important field to render the next data
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner/>}
        >
        <div className="row" style={{"margin-right":"0px"}}>
            {articles.map((element) => {
                return <div className=" col-md-4">
                    <NewsItem key={element.url}  title={element.title ? element.title : ""} desc={element.description} imgUrl = {element.urlToImage ? element.urlToImage : img}  author={element.author} url={element.url} time={element.publishedAt} source={element.name}/>
                </div> 
            })}
        </div>
        </InfiniteScroll>
    </div>
    </>
  )
}
