import React from 'react'
import './PostForm.css'
import { useDispatch, useSelector } from 'react-redux';
import { related_mapel} from '../../redux/modules/materi/thunks';
import { create_post } from '../../redux/modules/forum/thunks';
import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

function PostForm(props) {
    const dispatch = useDispatch()
    const { student } = useSelector((state) => state.auth)
    // console.log(student)
    const queryString = window.location.pathname;
    var metaid = queryString.replace("/materi/", "").replace("/forum/create-post", "");
    var mapel_data = metaid.split("/")
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

    function add_post() {
        dispatch(create_post({
            topik: input.topik, 
            isi: input.isi, 
            pengirim: student.user_data.id, 
            parent: undefined, 
            mapel: mapel_data[1]
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
                        <input type="text" id="topik" name="topik" className="form-text-field" onChange={handleChange} required></input>
                    </div>
                    <div className="form-group">
                        <label for="isi" className="col-form-label">Isi</label>
                        <textarea id="isi" name="isi" className="form-text-field" onChange={handleChange} required></textarea>
                    </div>
                    {props.isUpdate ? 
                    <button>Update</button> : 
                    <button onClick={add_post}>Kirim</button>}

                    <Link to={{pathname:`/materi/${mapel_data[0]}/forum/`}}><button className="cancel-btn" type="button">Batal</button></Link>
                </form>
            </div>
        </div>
    )
}

export default PostForm
