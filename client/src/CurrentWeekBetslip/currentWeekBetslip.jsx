import React, {useState, useEffect, Component} from 'react'
// import '../employees/employees.styles.css'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../CurrentWeekBetslip/currentWeekBetslip.css'


// THIS SECTION CAN BE DELETED ONCE PEOPLEHR FULLY INTEGRATED 
// PAGE ONLY USED TO GRAB NEW EMPLOYEES FROM MONGODB
// CAN USE AS EXAMPLE CALLS TO MONGODB FOR WHATEVER YOU DO NOT GRAB FROM SALESFORCE OR PEOPLEHR


function CurrentWeekBetslip(db){

    const [bets, setBets] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3000/api/week5')
        .then(res => {
            // console.log(res)
            setBets(res.data)
            // console.log(res.data.who_is_it)
        })
        .catch(err => {
            console.log(err)
        })
    })

    return(  
        <div class="card_container current-week-betslip-card_container">
            <h2 class="this-weeks-bet-h2">This Weeks Bet</h2>
        <ul className = "current-week-betslip-employees-list">
            {   
                bets.map(post => <li key={post.id}>
                    <div class ="card_content current-week-betslip">
                    <div className ="single-bet-card current-week-betslip">
                        <div className="nameAndDateBox">   
                            <p className = "bet-card-text"><h3 className ="bet-text-h3">{post.who_is_it}</h3></p>
                            {/* <p className = "bet-card-text"><span className = "bet-text-data">{post.betting_weekend_selector}</span></p> */}
                        </div> 
                        <div className = "fixtureAlign">
                            <p className = "bet-card-text"><span className = "bet-text-data"> {post.home_team}</span></p>
                            <p className="vsPeeTag">vs</p>
                            <p className = "bet-card-text"><span className = "bet-text-data"> {post.away_team}</span></p>
                        </div>
                        <div className = "otherInfoAndBetBox">
                            <p className = "bet-card-text"><span className = "bet-text-data">{post.what_is_the_bet}</span></p>
                            {/* <p className ="otherInfoAndBe   tBoxPeeTag">-</p>
                            <p className = "bet-card-text"><span className = "bet-text-data">{post.other_info_needed}</span></p> */}
                        </div>
                        <div className = "oddsAndOutcomeBox">
                            <p className = "bet-card-text employee-card-text-odds">Odds:  <span className = "bet-text-data">{post.what_are_the_odds}</span></p>
                            {/* <p className= "yetToPlayIndicator">YTP</p> */}
                            {/* <p className = "bet-card-text"><span className = "bet-text-data">{post.outcome_of_bet_won}</span></p> */}
                        </div>
                    </div>
            </div>
                    </li>)
            }
        </ul>
        </div>
          

      )
}
export default CurrentWeekBetslip