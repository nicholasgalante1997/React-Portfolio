import React, { Component } from 'react';
import Beeradex from '../images/beeradex.png'
import Scriptbase from '../images/scriptbase.png'
import Flatspace from '../images/flatspace.png'
import DraftProjecter from '../images/draftprojecter.png'

export default class Portfolio extends Component {
  render() {
    let resumeData = [
      {
        "name":"ScriptBase",
        "description":"Solo Project Created to Assist Users with Healthcare Decisions",
        "imgurl": Scriptbase,
        "github": 'https://github.com/steveneross94'
      },
      {
        "name":"Draft-Projecter",
        "description":"Pair Project Created to Assist a User with Auction Draft in Fantasy Football",
        "imgurl": DraftProjecter,
        "github": 'https://github.com/steveneross94'
      },
      {
        "name":"Flatspace",
        "description":"Pair Project That Mimics MySpace",  
        "imgurl": Flatspace,
        "github": 'https://github.com/steveneross94'
      },
      {
        "name":"Beerádex",
        "description":"Pair Project Created to Serve as a Pokedex for Beers Across the World",
        "imgurl": Beeradex,
        "github": 'https://github.com/steveneross94'
      }
    ]

    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Work</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            {/* <div>
              Test
            </div> */}
          {
            resumeData.map((item)=>{
              console.log(item.github);
              return(
                <div className="columns portfolio-item">
                  <div className="item-wrap">
                    <a href={item.github}>
                      <img src={item.imgurl} alt={'not there'} className="item-img"/>
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}