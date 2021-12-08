import React from 'react'
import './Post.css'
// import { useState, useEffect } from 'react';

function PostComp(props) {
    
    const [post,setPost]=useState([]);
    const [replies,setReplies]=useState([]);
    
    useEffect(() => {
        console.log("TES")
        fetch('Post.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setPost(data)
            console.log(data);
          }).catch(err => {
            // Do something for an error here
          });
    }, [] );
    
    useEffect(() => {
        console.log("TES")
        fetch('Replies.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setReplies(data)
            console.log(data);
          }).catch(err => {
            // Do something for an error here
          });
    }, [] );

    return (
        <div className="container-forum">
            <h1>Forum</h1>
            {post && post.child_post ? 
            <div className="forum-card-container">
                <div className="post-card forum-content forum-content-left">
                    <div className="post-header">
                        <h2>{post.topik}</h2>
                    </div>
                    <div className="post-body">
                        <p>{post.isi}</p>                        
                    </div>
                    <div className="post-footer">
                        <div>
                            <p><span className="iconify-inline" data-icon="mdi:account"></span>  {post.username}</p>
                        </div>
                        <div>
                            <p><span className="iconify-inline" data-icon="ic:round-access-time"></span>  {post.waktu}</p>
                        </div>
                        <div>
                            <p><span className="iconify-inline" data-icon="si-glyph:bubble-message-text"></span>  {post.child_post}</p>
                        </div>
                    </div>
                    <div className="list-group">
                        {replies ? replies.map((reply,index) => ( 
                            <div className="post-card">
                                <div className="post-header">
                                    <h2><a className="post-link" href="/details-post">{reply.topik}</a></h2>
                                    <a href="/update-post">
                                        <button>
                                        <span class="iconify-inline" data-icon="dashicons:edit"></span>
                                            Update
                                        </button>
                                    </a>
                                    <a href="/delete-post">
                                        <button>
                                        <span class="iconify-inline" data-icon="fluent:delete-24-filled"></span>
                                            Hapus
                                        </button>
                                    </a>
                                </div>
                                <div className="post-body two-line-par ">
                                    <p>{reply.isi}</p>                        
                                </div>
                                <div className="post-footer">
                                    <div>
                                        <p><span class="iconify-inline" data-icon="mdi:account"></span>  {reply.username}</p>
                                    </div>
                                    <div>
                                        <p><span class="iconify-inline" data-icon="ic:round-access-time"></span>  {reply.waktu}</p>
                                    </div>
                                </div>
                            </div>
                        )):"" }
                    </div>
                </div>
                <div className="forum-aside">
                    <a href="/update-post">
                        <button>
                        <span class="iconify-inline" data-icon="dashicons:edit"></span>
                            Update
                        </button>
                    </a>
                    <a href="/delete-post">
                        <button>
                        <span class="iconify-inline" data-icon="fluent:delete-24-filled"></span>
                            Hapus
                        </button>
                    </a>
                    <a href="/create-post"><button>
                        <span class="iconify-inline" data-icon="mdi:message-reply-text"></span>  Reply
                    </button></a>
                    <a href="/forum"><button>
                        <span className="iconify-inline" data-icon="bi:reply-fill"></span>  Kembali
                    </button></a>
                </div>
            </div>
            :""}
        </div>
    )
}

export default PostComp
