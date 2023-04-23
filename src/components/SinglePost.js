import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const SinglePost = () => {
  const { id } = useParams();
  const [about, setAbout] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (!data.id) {
          navigate("/Posts");
          return;
        }
        setAbout(data);
      });
  }, [id, navigate]);

  return (
    <div>
      {about && (
        <>
          <h1>{about.title}</h1>
          <p>{about.body}</p>
        </>
      )}
    </div>
  );
};

export default SinglePost;
