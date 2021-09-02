import React, {useState, useEffect, Component} from 'react'
// import '../employees/employees.styles.css'
import axios from 'axios'
import Form from "../Form/form";
import CurrentWeekBetslip from "../CurrentWeekBetslip/currentWeekBetslip";

import 'bootstrap/dist/css/bootstrap.min.css'
import '../Employees/employees.styles.css'


// THIS SECTION CAN BE DELETED ONCE PEOPLEHR FULLY INTEGRATED 
// PAGE ONLY USED TO GRAB NEW EMPLOYEES FROM MONGODB
// CAN USE AS EXAMPLE CALLS TO MONGODB FOR WHATEVER YOU DO NOT GRAB FROM SALESFORCE OR PEOPLEHR


function Employees(db){

    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/bets')
        .then(res => {
            // console.log(res)
            setPosts(res.data)
            // console.log(res.data.who_is_it)
        })
        .catch(err => {
            console.log(err)
        })
    })
        // const [posts, setPosts] = useState([])
    
    // useEffect(() => {
    //     axios.get('http://localhost:3000/api/bets')
    //     .then(res => {
    //         // console.log(res)
    //         setPosts(res.data)
    //         // console.log(res.data.who_is_it)
    //     })
    //     .catch(err => {
    //         console.log(err)
    //     })
    // })

    // console.log(posts.length)
    // console.log(posts[1].away_team)
    // const dannyLength = db.collection.find()
    // dannyLength.count()
    // console.log(dannyLength)
    // var cursor = db.collection('bets').find({});
    // db.collection.find( { who_is_it: "Danny",   outcome_of_bet: "Won" } ).count();
    return(
    <div className= "full-page-main-page">
        <div className="form-and-table-container">
            <Form />
        <div className="container">
            <div class="row">
            <table class="table-of-leaderboard table table-dark table-striped table-dark shadow col-8">
                        <thead>
                        <tr className="tableRows">
                            <th scope="col"></th>
                            <th scope="col">Wins</th>
                            <th scope="col">Losses</th>
                            <th scope="col">Win %</th>
                            <th scope="col">Average Odds</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr className="tableRows">
                            <th scope="row">Danny</th>
                            <td>5</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>
                        </tr>
                        <tr className="tableRows">
                            <th scope="row">Jimmy</th>
                            <td>5</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>                     
                        </tr>
                        <tr className="tableRows">
                            <th scope="row">Frank</th>
                            <td>5</td>
                            <td>0</td>
                            <td>1</td>
                            <td>1</td>                      
                        </tr>
                        </tbody>
                    </table>
                    </div>
                    <div class="row">
            <CurrentWeekBetslip />
            </div>
            </div>
        </div>
        
        <div className="container ">
            <div class="card_container">
            <ul className = "employees-list">
                {   
                    posts.map(post => <li key={post.id}>
                        <div class ="card_content">
                        <div className ="single-bet-card">
                            <div className="nameAndDateBox">   
                                <p className = "bet-card-text"><h3 className ="bet-text-h2">{post.who_is_it}</h3></p>
                                <p className = "bet-card-text"><span className = "bet-text-data">{post.betting_weekend_selector}</span></p>
                            </div> 
                            <div className = "fixtureAlign">
                                <p className = "bet-card-text"><span className = "bet-text-data"> {post.home_team}</span></p>
                                <p className="vsPeeTag">vs</p>
                                <p className = "bet-card-text"><span className = "bet-text-data"> {post.away_team}</span></p>
                            </div>
                            <div className = "otherInfoAndBetBox">
                                <p className = "bet-card-text"><span className = "bet-text-data">{post.what_is_the_bet}</span></p>
                                <p className ="otherInfoAndBe   tBoxPeeTag">-</p>
                                <p className = "bet-card-text"><span className = "bet-text-data">{post.other_info_needed}</span></p>
                            </div>
                            <div className = "oddsAndOutcomeBox">
                                <p className = "bet-card-text employee-card-text-odds">Odds:  <span className = "bet-text-data">{post.what_are_the_odds}</span></p>
                                <p className = "bet-card-text"><span className = "bet-text-data">{post.outcome_of_bet}</span></p>
                            </div>
                        </div>
                </div>
                        </li>)
                }
            </ul>
            </div>
        </div>         
    </div>
    )
}
export default Employees


