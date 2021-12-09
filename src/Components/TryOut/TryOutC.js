import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './TryOut.css'
import { useState,useEffect } from 'react';
//import NotifSuccess from './NotifSuccess';
//import NotifFailed from './NotifFailed';
import { Link } from 'react-router-dom';
import { get_tryout, get_all_tryout } from '../../redux/modules/tryout/thunks'

function TryOutC(props) {
    // const dispatch = useDispatch()
    // const { tryout } = useSelector((state) => state.tryout)

    // useEffect(() => {
    //     dispatch(get_all_tryout({
    //         tryout: tryout
    //     }))
    // }, [dispatch, tryout])

    const [tryout,setTryOut]=useState([]);
    useEffect(() => {
        fetch("http://localhost:8000/to/tryout/").then(response => {
            return response.json();
          }).then(data => {
            setTryOut(data)
          }).catch(err => {
          });
    }, [] );

    return (
        <div className="container-forum">
            <h1>List Paket Try Out</h1>
            <div className="forum-card-container">
                <div className="forum-aside">
                    <Link to={{pathname:`/tryOut/create-tryOut`}}><button>
                        <span class="iconify-inline" data-icon="akar-icons:circle-plus"></span>  Buat Paket Try Out Baru
                    </button></Link>
                </div>
                <div className="list-group forum-content forum-content-right">
                {tryout ? tryout.map((paket,index) => ( 
                    <div className="post-card">
                        <div className="post-header">
                            <h2><Link className="post-link" to={"/aturan-tryOut/" + paket.id}>{paket.paket_try_out}</Link></h2>
                            <Link to="/update-tryOut">
                                <button>
                                <span class="iconify-inline" data-icon="dashicons:edit"></span>
                                    Update Paket Try Out
                                </button>
                            </Link>
                            <Link to="/delete-tryOut">
                                <button>
                                <span class="iconify-inline" data-icon="fluent:delete-24-filled"></span>
                                    Hapus Paket Try Out
                                </button>
                            </Link>
                        </div>
                        <div className="post-footer">
                            <div>
                                <p><span class="iconify-inline" data-icon="ic:round-access-time"></span>{paket.durasi_pengerjaan}</p>
                            </div>
                        </div>
                    </div>
                )):"" }
                </div>
            </div>
        </div>
    )
}

export default TryOutC