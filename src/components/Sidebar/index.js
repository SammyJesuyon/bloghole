import React, { useState, useEffect } from 'react';
import Card from '../UI/Card';
import './style.css'
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {

    const [posts, setPosts] = useState([]);
    
    
    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);



  return(
      <div className="sidebarContainer right z-depth-5 container right" style={{
          width: props.width,
          marginTop: '0px',
          marginRight: '0px',
          marginLeft: '20px'
      }}>
            <Card className = "" style={{ marginBottom: '30px', padding: '30px', boxSizing: 'border-box' }}>
                <div className="cardHeader">
                  <span><h5>About Us</h5></span>
                </div>
                <div className="profileImageContainer">
                  <img src={"https://2.bp.blogspot.com/-ZOY5OAvnKj0/V9_M3_TVTLI/AAAAAAAAD40/UQl4rIoqgi42zaeq0yR_y1gnnchZFxupQCLcB/s1600/3-3.jpg"} alt = "" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Samson Kitigo and I am  a front end web developer....:)</p>
                </div>
            </Card>

            

          <Card style={{ marginBottom: '30px', padding: '30px', boxSizing: 'border-box' }} className= "#283593 indigo darken-3">
              <div className="cardHeader  #5c6bc0 indigo lighten-1 #000000 black-text">
                    <span>Recent Posts</span>
                </div>

              <div className="recentPosts ">

                    {
                        posts.map(post => {
                            return (
                                <NavLink key={post.id} to={`/post/${post.slug}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                                
                            );
                        })
                    }
                </div>

            </Card>
      </div>
    
   )

 }

export default Sidebar