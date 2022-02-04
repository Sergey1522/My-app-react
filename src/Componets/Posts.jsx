import React from "react";
import './Posts.css';

const Posts = (props) => {
    return (
        <div className="posts">
                <div className="post__1">
                    <img src="http://www.smailikai.com/avatar/skelet/avatar_4348.gif" alt="" />
                    {props.name}    {props.messages}
                    
                </div>
                {/* <div className="post__2">{props.name}</div> */}
                {/* <div className="post__3">{props.messages}</div> */}
            </div>
    );
}

export default Posts;