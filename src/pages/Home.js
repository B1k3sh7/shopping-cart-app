import React, { useEffect, useState } from "react";
import Product from "../components/Product";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_URL = "https://fakestoreapi.com/products";

  async function fetchProductData() {
    setLoading(true);

    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      console.log(data);
      setPosts(data);
    } catch (error) {
      console.log("Error 404 products Not Found");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div>
      {loading ? (
        <p className="ml-5 mt-3">Loading...</p>
      ) : posts.length > 0 ? (
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mb-5 mx-auto space-x-5 space-y-10 min-h-[80vh]">
          {
            // post defines the single post which is going to map
            posts.map((post) => (
              <Product key={post.id} post={post} />
            ))
          }
        </div>
      ) : (
        <div className="flex justify-center items-center">
          <p>No data found</p>
        </div>
      )}
    </div>
  );
};

export default Home;
