import React from 'react'
import './PostForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { related_mapel} from '../../redux/modules/materi/thunks';
import { create_post, update_post, get_post } from '../../redux/modules/forum/thunks';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostForm(props) {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    const { post } = useSelector((state) => state.forum)
    const queryString = window.location.pathname;
    var metaid = queryString.replace("/materi/", "").replace("/forum", "");
    var query_data = metaid.split("/");
    const [input, setInput] = useState({
    topik: undefined,
    isi: undefined,
    });
    
    function handleChange(evt) {
        const value = evt.target.value;
        setInput({
            ...input,
            [evt.target.name]: value
        });
    }

    useEffect(() => {
        student &&
        dispatch(related_mapel({
            jurusan: student.jurusan_data.id,
          })
        )
    }, [dispatch, student])

    useEffect(() => {
        if (props.isUpdate){
            dispatch(get_post({
                id: query_data[3]
            }))
        } 
    }, [dispatch, post])
       
    function add_post() {
        dispatch(create_post({
            topik: input.topik, 
            isi: input.isi, 
            pengirim: student.user_data.id, 
            parent: undefined, 
            mapel: query_data[2],
            nama_mapel: query_data[0]
            })
        )
    }

    function change_post() {
        var topik = input.topik;
        var isi = input.isi;
        if (input.topik == undefined) {
            topik = post.topik;
        }
        if (input.isi == undefined) {
            isi = post.isi
        }

        dispatch(update_post({
            id: query_data[3],
            topik: topik, 
            isi: isi, 
            pengirim: student.user_data.id, 
            parent: post.input, 
            mapel: query_data[4],
            nama_mapel: query_data[0]
            })
        )
    }

    return (
        <div className="post-form-container">
            {props.isUpdate ? <h1>Update Post</h1> : <h1>Create Post</h1>}

            <div className="form-section">
                <form>
                    <div className="form-group">
                        <label for="topik" className="col-form-label">Topik</label>
                        {props.isUpdate && post && post.topik ? 
                        <input type="text" id="topik" name="topik" className="form-text-field" onChange={handleChange} required defaultValue={post.topik}></input> 
                        : 
                        <input type="text" id="topik" name="topik" className="form-text-field" onChange={handleChange} required></input>}
                    </div>
                    <div className="form-group">
                        <label for="isi" className="col-form-label">Isi</label>
                        {props.isUpdate && post && post.isi ? 
                        <textarea id="isi" name="isi" className="form-text-field" onChange={handleChange} required defaultValue={post.isi}></textarea>
                        : 
                        <textarea id="isi" name="isi" className="form-text-field" onChange={handleChange} required></textarea>}
                    </div>
                    {props.isUpdate ? 
                    <button onClick={change_post}>Update</button> : 
                    <button onClick={add_post}>Kirim</button>}

                    <Link to={{pathname:`/materi/${query_data[0]}/forum/`}}><button className="cancel-btn" type="button">Batal</button></Link>
                </form>
            </div>
        </div>
    )
}

export default PostForm
