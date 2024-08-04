import React, { useState } from 'react';
import '../App.css'; // Adjust the import path if necessary

const Post = ({ post }) => {
    const [likes, setLikes] = useState(post.likes);

    const handleLike = () => {
        setLikes(likes + 1);
    };

    return (
        <div className="post">
            <div className="post-header">
                <img src={post.profilePic} alt="User Profile" className="profile-pic" />
                <div className="user-info">
                    <h2>{post.username}</h2>
                    <p>{new Date(post.date).toLocaleString()}</p>
                </div>
            </div>
            <img src={post.image} alt="Post" className="post-image" />
            <p>{post.description}</p>
            <div className="hashtags">
                {post.hashtags.map((tag, index) => (
                    <a href={`#${tag}`} key={index}>#{tag}</a>
                ))}
            </div>
            <div className="actions">
                <button className="like-btn" onClick={handleLike}>Like</button>
                <span className="likes-counter">{likes} Likes</span>
            </div>
            <div className="comments">
                <input type="text" placeholder="Add a comment..." />
                <button className="comment-btn">Comment</button>
            </div>  
        </div>
    );
};

export default Post;
