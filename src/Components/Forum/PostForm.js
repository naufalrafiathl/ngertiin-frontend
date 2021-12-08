import React from 'react'
import './PostForm.css'
import { useState,useEffect } from 'react';

function PostForm(props) {
    return (
        <div className="post-form-container">
            {props.isUpdate ? <h1>Update Post</h1> : <h1>Create Post</h1>}

            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label for="topik" className="col-form-label">Topik</label>
                        <input type="text" id="topik" className="form-text-field" required></input>
                    </div>
                    <div className="form-group">
                        <label for="isi" className="col-form-label">Isi</label>
                        <textarea id="isi" className="form-text-field" required></textarea>
                    </div>
                    <a href="/create-post"><button>{props.isUpdate ? 'Update' : 'Kirim'}</button></a>
                    <a href="/forum"><button className="cancel-btn" type="button">Batal</button></a>
                </form>
            </div>
        </div>
    )
}

export default PostForm
