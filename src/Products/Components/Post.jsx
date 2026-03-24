import { useState,useEffect } from "react";
import { getPost } from "../../services/PostService";

function Posts() {
  //1. Store  2.Load 3 .Error

  const [posts, setPost] = useState([]);
  const [Loading, SetLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    SetLoading(true);
    const fetchData = async () => {
      try {
        const response = await getPost();
        setPost(response);
      } catch (err) {
        setError("Something Went Wrong");
      } finally {
        SetLoading(false);
      }
    };

    fetchData();
  }, []);

  //Loading State

  if (Loading) return <p>Loading...</p>;

  //Error
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h2>Post Table</h2>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default Posts;