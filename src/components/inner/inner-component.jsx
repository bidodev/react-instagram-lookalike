import React, { Component } from 'react'
import './inner-component.scss'
import Navigation from './navigation/navigation-component';
import CardList from './card-list/card-list-component';


class Content extends Component {
    render() {
        return (
            <div className="inner-content">
                <Navigation />
                <CardList />
            </div>
        )
    }
}
export default Content;