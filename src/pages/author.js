import React, { Component } from 'react'
import AuthorPost from '../components/Author/author.component'
import Navbar from '../components/Topbar/topbar.component'

export default class Author extends Component {
    render() {
        return (
            <div>
                <Navbar/>
               <AuthorPost/> 
            </div>
        )
    }
}
