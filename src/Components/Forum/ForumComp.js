import React from 'react'
import './Forum.css'
import { useState,useEffect } from 'react';
import SuccessNotification from './SuccessNotification';
import FailedNotification from './FailedNotification';

function ForumComp(props) {
    
    const [posts,setPosts]=useState([]);

    useEffect(() => {
        console.log("TES")
        fetch('Posts.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setPosts(data)
            console.log(data);
          }).catch(err => {
            // Do something for an error here
          });
      }, [] );

    function ForumTitle(props) {
        switch(props.value) {
            case 'biologi':
                return 'Forum Biologi';
            case 'kimia':
                return 'Forum Kimia';
            case 'fisika':
                return 'Forum Fisika';
            case 'matematika':
                return 'Forum Matematika';
            case 'geografi':
                return 'Forum Geografi';
            case 'sejarah':
                return 'Forum Sejarah';
            case 'ekonomi':
                return 'Forum Ekonomi';
            case 'sosiologi':
                return 'Forum Sosiologi';
            default:
                return 'Forum'
        }
    }

    return (
        <div className="container-forum">
            <h1><ForumTitle value={props.mapel} /></h1>

            <div className="forum-card-container">
                <div className="forum-aside">
                    <a href="/create-post"><button>
                        <span class="iconify-inline" data-icon="akar-icons:circle-plus"></span>  Buat Post
                    </button></a>
                </div>
                <div className="list-group forum-content forum-content-right">
                {posts ? posts.map((post,index) => ( 
                    <div className="post-card">
                        <div className="post-header">
                            <h2><a className="post-link" href="/details-post">{post.topik}</a></h2>
                            <a href="/update-post">
                                <button>
                                <span class="iconify-inline" data-icon="dashicons:edit"></span>
                                    Ubah Post
                                </button>
                            </a>
                            <a href="/delete-post">
                                <button>
                                <span class="iconify-inline" data-icon="fluent:delete-24-filled"></span>
                                    Hapus Post
                                </button>
                            </a>
                        </div>
                        <div className="post-body two-line-par ">
                            <p>{post.isi}</p>                        
                        </div>
                        <div className="post-footer">
                            <div>
                                <p><span class="iconify-inline" data-icon="mdi:account"></span>  {post.username}</p>
                            </div>
                            <div>
                                <p><span class="iconify-inline" data-icon="ic:round-access-time"></span>  {post.waktu}</p>
                            </div>
                            <div>
                                <p><span class="iconify-inline" data-icon="si-glyph:bubble-message-text"></span>  {post.child_post.length}</p>
                            </div>
                        </div>
                    </div>
                )):"" }
                </div>
            </div>
            
        </div>
    )
}

export default ForumComp
