import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Post from './components/Post';

const App = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://api.api-ninjas.com/v1/animals?name=dog', {
            headers: { 'X-Api-Key': 'mR2uGt5NnvVWcwjvGFAEPg==ZZUHc1CiAQZgQoya' }
        })
        .then(response => response.json())
        .then(data => {
            const apiPosts = data.map((item, index) => ({
                id: index,
                username: 'API User',
                profilePic: 'https://via.placeholder.com/60', // Replace with actual profile pic URL if available
                date: new Date().toISOString(),
                image: 'https://via.placeholder.com/500', // Replace with item-specific image URL if available
                description: item.name,
                hashtags: ['Animal', 'Dog'],
                likes: 0
            }));
            setPosts(apiPosts);
        })
        .catch(error => console.error('Error:', error));
    }, []);

    return (
        <>
            <Header />
            <div className="posts">
                {posts.map(post => (
                    <Post key={post.id} post={post} />
                ))}
            </div>
        </>
    );
};

export default App;
