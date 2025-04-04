import { useState } from "react";
import { useEffect } from "react";

const Fetch = () => {
  //   const [posts, setPosts] = useState([]); // Starts empty
  //   const [counter, setCounter] = useState(1); // Tracks next post ID

  //   const handleGenerate = () => {
  //     fetch(`https://jsonplaceholder.typicode.com/posts/${counter}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setPosts([...posts, data]); // Add new post to array
  //         setCounter(counter + 1); // Increment for next click
  //       });
  //   };

  const [posts, setPosts] = useState([]); // Starts empty
  const [counter, setCounter] = useState(1); // Starts at 1

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data)); // Fetch initial 4 posts
  }, []); // Empty dependency array to run once on mount

  const handleGenerate = () => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)
      .then((response) => response.json())
      .then((data) => {
        const newPost = {
          id: data.id,
          title: data.name, // Use Pokémon name as title
          body: `Height: ${data.height}, Weight: ${data.weight}`, // Use height and weight as body
          image: data.sprites.front_default, // Add Pokémon image
        };
        setPosts([...posts, newPost]); // Add new post to array
        setCounter(counter + 1); // Increment for next click
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <button
        onClick={handleGenerate}
        className="mb-6 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-black transition duration-300"
      >
        Generate
      </button>
      <div className="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4">
        {posts.map((post) => (
          <div
            className="card bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
            key={post.id}
          >
            <h3 className="text-lg font-bold text-gray-700 mb-2">
              ID: {post.id}
            </h3>
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {post.title}
            </h2>
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-32 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fetch;
