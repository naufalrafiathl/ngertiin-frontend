import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { related_post } from '../../redux/modules/forum/thunks'

import './Forum.css'
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
// import SuccessNotification from './SuccessNotification';
// import FailedNotification from './FailedNotification';

function ForumComp(props) {
    const dispatch = useDispatch()
    const { posts } = useSelector((state) => state.forum)
    console.log(posts)

    useEffect(() => {
        dispatch(related_post({
            mapel: props.mapel_data.id
        }))
    }, [dispatch, posts])

    return (
        <div className="container-forum">
            <h1>Forum {props.mapel_data.mapel}</h1>

            <div className="forum-card-container">
                <div className="forum-aside">
                    <Link to={{pathname:`/materi/${props.mapel_data.mapel.split(" ").join("-").toLowerCase()}/forum/create-post/${props.mapel_data.id}`}}>
                        <a><button>
                            <span className="iconify-inline" data-icon="akar-icons:circle-plus"></span>  Buat Post
                        </button></a>
                    </Link>
                </div>
                <div className="list-group forum-content forum-content-right">
                {posts ? posts.related_post.map((post, index) => ( 
                    <div className="post-card">
                        <div className="post-header">
                            <h2><a className="post-link" href="/details-post">{post.topik}</a></h2>
                            <a href="/create-post"><button>
                                <span class="iconify-inline" data-icon="mdi:message-reply-text"></span>  Reply
                            </button></a>
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
                            <p>{post.isi}</p>                        
                        </div>
                        <div className="post-footer">
                            <div>
                                <p><span className="iconify-inline" data-icon="mdi:account"></span>  {post.pengirim}</p>
                            </div>
                            <div>
                                <p><span className="iconify-inline" data-icon="ic:round-access-time"></span>  {(new Date(post.waktu)).toDateString()}</p>
                            </div>
                            <div>
                                <p><span className="iconify-inline" data-icon="si-glyph:bubble-message-text"></span>  {post.child_post_len}</p>
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
