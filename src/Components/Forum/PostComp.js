import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './Post.css'
import { useState, useEffect } from 'react';
import { get_post } from '../../redux/modules/forum/thunks'
import { Link } from 'react-router-dom';

function PostComp(props) {
    const dispatch = useDispatch()
    const { post } = useSelector((state) => state.forum)
    const queryString = window.location.pathname;
    var querylist = queryString.split("/")
    var id_post = querylist[5]
    var mapel = querylist[2]

    useEffect(() => {
        dispatch(get_post({
            id: id_post
        }))
    }, [dispatch, post])

    return (
        <div className="container-forum">
            <h1>Forum</h1>
            {post ? 
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
                            <p><span className="iconify-inline" data-icon="mdi:account"></span>  {post.pengirim}</p>
                        </div>
                        <div>
                            <p><span className="iconify-inline" data-icon="ic:round-access-time"></span>  {(new Date(post.waktu)).toDateString()}</p>
                        </div>
                        <div>
                            <p><span className="iconify-inline" data-icon="si-glyph:bubble-message-text"></span>  {post.child_post_len}</p>
                        </div>
                    </div>
                    {/* <div className="list-group">
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
                    </div> */}
                </div>
                <div className="forum-aside">
                    <Link to={{pathname:`/materi/${mapel}/forum/post/update-post/${post.id}`}}>
                        <button>
                            <span class="iconify-inline" data-icon="dashicons:edit"></span>   Update
                        </button>
                    </Link>
                    <Link to={{pathname:`/materi/${mapel}/forum/post/delete-post/${post.id}`}}>
                        <button>
                            <span class="iconify-inline" data-icon="fluent:delete-24-filled"></span>  Hapus
                        </button>
                    </Link>
                    <a href="/create-post"><button>
                        <span class="iconify-inline" data-icon="mdi:message-reply-text"></span>  Reply
                    </button></a>
                    <Link to={{pathname:`/materi/${mapel}/forum/`}}>
                        <button>
                            <span className="iconify-inline" data-icon="bi:reply-fill"></span>  Kembali
                        </button>
                    </Link>
                </div>
            </div>
            :""}
        </div>
    )
}

export default PostComp
