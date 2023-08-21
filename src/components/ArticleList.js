import React from "react";
import Article from "./Article";
import blogData from "../data/blog";


function ArticleList (props){
const post = blogData.posts
const myPost = post.map((j)=>(
    <Article 
        key = {j.id}
        title = {j.title}
        date = {j.date}
        preview = {j.preview}
        minutes = {j.minutes}
    />
)
)
    return(
<main>{myPost}</main>
    )
}
export default ArticleList;