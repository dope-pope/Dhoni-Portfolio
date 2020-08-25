﻿import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ScriptTag from 'react-script-tag';
import { Navbar, NavbarBrand } from 'reactstrap';
import { Parallax } from 'react-parallax';
import $ from 'jquery';
import Popup from "reactjs-popup";



class App extends Component {
    componentDidMount() {
        $(document).ready(function () {
            $("#lol").click(function () {
                $("#dhoni").show();
                setTimeout(function () { $("#dhoni").hide(); }, 5000);
            })
        });
    }
    render() {
        return (
           
     

            <div className="App">
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/"> Portfolio</NavbarBrand>
                    </div>
                </Navbar>

                
                   
               
          <div className="container">
              <div className="card" >
                  <div className="row">
                            <div className="col-sm-6">

                                <Parallax bgImage={require('./img/dhoni.jpg')} strength={500}>
                                    <div style={{ height: 645 }}>
                                        
                                    </div>
                                </Parallax>
                      </div>
                      <div className="col-sm-6">
                          <div className="style">
                          <div className="card-body-right ">
                                        <h4 className="card-title">M.S.Dhoni</h4>
                                        
                                            <Parallax bgImage={require('./img/stad.jpg')} strength={500}>
                                            <div style={{ height: 1600 }}>
                                                <div >
                                  <p className="card-text"  >
                                      Mahendra Singh Dhoni (About this soundpronunciation (help·info) born 7 July 1981), is a former Indian international cricketer who captained the Indian national team in limited-overs formats from 2007 to 2016 and in Test cricket from 2008 to 2014. Under his captaincy, India won the 2007 ICC World Twenty20, the 2010 and 2016 Asia Cups, the 2011 ICC Cricket World Cup and the 2013 ICC Champions Trophy. A right-handed middle-order batsman and wicket-keeper, Dhoni is one of the highest run scorers in One Day Internationals (ODIs) with more than 10,000 runs scored and is considered an effective "finisher" in limited-overs formats.[2][3][4] He is also regarded by some as one of the best wicket-keepers and captains in modern limited-overs international cricket.[5]

                                      He made his ODI debut in December 2004 against Bangladesh, and played his first Test a year later against Sri Lanka. Dhoni has been the recipient of many awards, including the ICC ODI Player of the Year award in 2008 and 2009 (the first player to win the award twice), the Rajiv Gandhi Khel Ratna award in 2007, the Padma Shri, India's fourth highest civilian honour, in 2009 and the Padma Bhushan, India's third highest civilian honour, in 2018.[6] He was named as the captain of the ICC World Test XI in 2009, 2010 and 2013. He has also been selected a record 8 times in ICC World ODI XI teams, 5 times as captain. The Indian Territorial Army conferred the honorary rank of Lieutenant Colonel[7] to Dhoni on 1 November 2011. He is the second Indian cricketer after Kapil Dev to receive this honour.

                                      Dhoni also holds numerous captaincy records such as the most wins by an Indian captain in ODIs and T20Is, and most back-to-back wins by an Indian captain in ODIs. He took over the ODI captaincy from Rahul Dravid in 2007 and led the team to its first-ever bilateral ODI series wins in Sri Lanka and New Zealand. In June 2013, when India defeated England in the final of the Champions Trophy in England, Dhoni became the first captain to win all three ICC limited-overs trophies (World Cup, Champions Trophy and the World Twenty20). After taking up the Test captaincy in 2008, he led the team to series wins in New Zealand and the West Indies, and the Border-Gavaskar Trophy in 2008, 2010 and 2013. In 2009, Dhoni also led the Indian team to number one position for the first time in the ICC Test rankings.

                                      In 2013, under his captaincy, India became the first team in more than 40 years to whitewash Australia in a Test series. In the Indian Premier League, he captained the Chennai Super Kings to victory at the 2010, 2011 and 2018 seasons, along with wins in the 2010 and 2014 editions of Champions League Twenty20. In 2011, Time magazine included Dhoni in its annual Time 100 list as one of the "Most Influential People in the World."[8] Dhoni holds the post of Vice-President of India Cements Ltd., after resigning from Air India. India Cements is the owner of the IPL team Chennai Super Kings, and Dhoni has been its captain since the first IPL season.[9][10] He announced his retirement from Tests on 30 December 2014.[11]

                                      In 2012, SportsPro rated Dhoni as the sixteenth most marketable athlete in the world.[12] Dhoni is the co-owner of Indian Super League team Chennaiyin FC.[13] In June 2015, Forbes ranked Dhoni at 23rd in the list of highest paid athletes in the world, estimating his earnings at US$31 million.[14] In 2016, a biopic M.S. Dhoni: The Untold Story was made about his life and cricketing career up to the Indian team's win at the 2011 Cricket World Cup.

                                      MS Dhoni announced his retirement from international cricket on 15 August 2020</p>
                                        <div >
                                      <Popup className="pop" trigger={<a id="lol" href="#">Read more</a>} position="bottom ">
                                          <img id="dhoni" src="world.jpg" alt="back.jpg" />
                                      </Popup>
                                                    </div>
                                                    </div>
                                                </div>
                                            </Parallax>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>

            </div>

               

      )
    }
  
}

export default App;
