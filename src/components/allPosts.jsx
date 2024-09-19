import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Typography, CardActionArea, Grid2 } from "@mui/material";
import CardContent from "@mui/material/CardContent";

export default function AllPosts() {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    const fetchAllPosts = async () => {
      const response = await axios.get("http://localhost:8080/jobPosts");
      setPosts(response.data);
    };
    fetchAllPosts();
  }, []);

  return (
    <>
      <div className="bg-blue-700 h-20 flex items-center justify-center border rounded-lg mx-32 my-10">
        <h1 className="text-3xl text-white">All Posts</h1>
      </div>

      <div className="mx-32">
        <Grid2 container className="ml-10" spacing={2}>
          {posts.map((post) => {
            return (
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardContent className="bg-gray-400 text-white">
                    <Typography gutterBottom variant="h5" component="div">
                      {post.id}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.postProfile}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.postDesc}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.reqExperience}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="div">
                      {post.postTechStack.map((postTech) => {
                        return <Typography>{postTech}</Typography>;
                      })}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            );
          })}
        </Grid2>
      </div>
    </>
  );
}
