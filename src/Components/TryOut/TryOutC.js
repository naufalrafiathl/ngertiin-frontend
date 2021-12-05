import React from 'react'
import './TryOut.css'
import { useState,useEffect } from 'react';
import NotifSuccess from './NotifSuccess';
import NotifFailed from './NotifFailed';

function TryOutC(props) {
    
    const [tryout,setPaket]=useState([]);

    useEffect(() => {
        console.log("TES")
        fetch('paket.json').then(response => {
            return response.json();
          }).then(data => {
            // Work with JSON data here
            setPaket(data)
            console.log(data);
          }).catch(err => {
            // Do something for an error here
          });
      }, [] );


    return (
        <div className="container-forum">
            <h1>List Paket Try Out</h1>
            <div className="forum-card-container">
                <div className="forum-aside">
                    <a href="/create-tryOut"><button>
                        <span class="iconify-inline" data-icon="akar-icons:circle-plus"></span>  Buat Paket Try Out Baru
                    </button></a>
                </div>
                <div className="list-group forum-content forum-content-right">
                {tryout ? tryout.map((paket,index) => ( 
                    <div className="post-card">
                        <div className="post-header">
                            <h2><a className="post-link" href="/aturan-tryOut">{paket.paket}</a></h2>
                            <a href="/update-tryOut">
                                <button>
                                <span class="iconify-inline" data-icon="dashicons:edit"></span>
                                    Update Paket Try Out
                                </button>
                            </a>
                            <a href="/delete-tryOut">
                                <button>
                                <span class="iconify-inline" data-icon="fluent:delete-24-filled"></span>
                                    Hapus Paket Try Out
                                </button>
                            </a>
                        </div>
                        <div className="post-footer">
                            <div>
                                <p><span class="iconify-inline" data-icon="ic:round-access-time"></span>  {paket.lama_pengerjaan}</p>
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