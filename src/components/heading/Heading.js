import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Heading.css';

export default class Heading extends Component {

  render() {
    return (
    <div className = "heading info">
        <div className ="heading__content">
            <div className ='heading__img'>
              <img src={require('../../img/smiley3.png')} alt="Smileycoin"/>
            </div>
            <div className="heading__content__title">
                <div className="heading__content__title__title">
                    <p className = "title bold">Smiley</p>
                    <p className = "title">Coin</p>
                </div>
            </div>
        </div>
        <div className = "heading__about title">
            Smileycoin or SMLY is a cryptocurrency, which rewards students, donates to charity and allows investors to fund causes while receiving dividends.
        </div>
    </div>

    )
  }
}
