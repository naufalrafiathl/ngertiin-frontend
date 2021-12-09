import CreatePost from './CreatePost';
import React from 'react'
import ForumComp from '../../Components/Forum/ForumComp'
import {Routes, Route} from 'react-router';

function Forum(props) {
    return (
        <div>
            <div className="container-forum">
                <ForumComp mapel_data={props.mapel_data}/>
            </div>
        </div>
    )
}

export default Forum
