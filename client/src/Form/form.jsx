import React, {useState, useEffect, Component} from 'react'
import '../Form/form.styles.css'
import axios from 'axios'

    export default class Form extends Component{
 
    constructor(props) {
        super(props)
    
        this.onChangeHomeTeam = this.onChangeHomeTeam.bind(this)
        // this.onChangeHomeTeam = this.onChangeUserName.bind(this)
        
        this.onChangeAwayTeam = this.onChangeAwayTeam.bind(this)        
        // this.onChangeUserEmploymentType = this.onChangeUserEmploymentType.bind(this)

        this.onChangeBettingWeekendSelector = this.onChangeBettingWeekendSelector.bind(this)
        // this.onChangeUserPayRate = this.onChangeUserPayRate.bind(this)

        this.onChangeWhoIsIt = this.onChangeWhoIsIt.bind(this)
        // this.onChangeUserLocation = this.onChangeUserLocation.bind(this)

        this.onChangeWhatIsTheBet = this.onChangeWhatIsTheBet.bind(this)        
        // this.onChangeUserJobTitle = this.onChangeUserJobTitle.bind(this)

        this.onChangeOtherInfoNeeded = this.onChangeOtherInfoNeeded.bind(this)
        // this.onChangeUserApiTesting = this.onChangeUserApiTesting.bind(this)

        this.onChangeWhatAreTheOdds = this.onChangeWhatAreTheOdds.bind(this)
        // this.onChangeUserSelenium = this.onChangeUserSelenium.bind(this)

        this.onChangeOutcomeOfBet = this.onChangeOutcomeOfBet.bind(this)
        // this.onChangeCypress = this.onChangeCypress.bind(this)



        this.onSubmit = this.onSubmit.bind(this)
        this.onSubmitTwice = this.onSubmitTwice.bind(this)
        
        this.state = {
            home_team:'',
            away_team:'',
            betting_weekend_selector:'',
            who_is_it:'',
            what_is_the_bet:'',
            other_info_needed:'',
            what_are_the_odds:'',
            outcome_of_bet:'',

        }
        this.setState({ home_team: '', away_team: '', betting_weekend_selector:'', who_is_it:'', what_is_the_bet:'', other_info_needed:'', what_are_the_odds:'', outcome_of_bet:'' })
    }
    
    onChangeHomeTeam(e) {
        this.setState({ home_team: e.target.value })
    }

    onChangeAwayTeam(e) {
        this.setState({ away_team: e.target.value })
    }
    onChangeBettingWeekendSelector(e) {
        this.setState({ betting_weekend_selector: e.target.value })
    }
    onChangeWhoIsIt(e) {
        this.setState({ who_is_it: e.target.value })
    }
    onChangeWhatIsTheBet(e) {
        this.setState({ what_is_the_bet: e.target.value })
    }
    onChangeOtherInfoNeeded(e) {
        this.setState({ other_info_needed: e.target.value })
    }
    onChangeWhatAreTheOdds(e) {
        this.setState({ what_are_the_odds: e.target.valueAsNumber })
    }
    onChangeOutcomeOfBet(e) {
        this.setState({ outcome_of_bet: e.target.value })
    }


    onSubmit(e) {
        // e.preventDefault()

        const userObject = {
            home_team: this.state.home_team,
            away_team: this.state.away_team,
            betting_weekend_selector: this.state.betting_weekend_selector,
            who_is_it: this.state.who_is_it,
            what_is_the_bet: this.state.what_is_the_bet,
            other_info_needed: this.state.other_info_needed,
            what_are_the_odds: this.state.what_are_the_odds,
            outcome_of_bet: this.state.outcome_of_bet,
        };

        axios.post('http://localhost:3000/api/bets', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            
            //I need to get the onSubmit to submit to 2 seperate collections for data use
            // axios.post('http://localhost:3000/api/week1}', userObject)
            // .then((res) => {
            //     console.log(res.data)
            // }).catch((error) => {
            //     console.log(error)
            // });

     }
     onSubmitTwice(e) {
        // e.preventDefault()

        const userObject = {
            home_team: this.state.home_team,
            away_team: this.state.away_team,
            betting_weekend_selector: this.state.betting_weekend_selector,
            who_is_it: this.state.who_is_it,
            what_is_the_bet: this.state.what_is_the_bet,
            other_info_needed: this.state.other_info_needed,
            what_are_the_odds: this.state.what_are_the_odds,
            outcome_of_bet: this.state.outcome_of_bet,
        };
            // NEED TO CHANGE THIS ENDPOINT
        axios.post('http://localhost:3000/api/week1', userObject)
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
            
            //I need to get the onSubmit to submit to 2 seperate collections for data use
            // axios.post('http://localhost:3000/api/week1}', userObject)
            // .then((res) => {
            //     console.log(res.data)
            // }).catch((error) => {
            //     console.log(error)
            // });

     }


render() {
    return (
        
        <div className="overall-form-page">
            <div className = "employees-form-container">
            <div className="wrapper">
                <form onSubmit={()=>{
                    this.onSubmit();
                    this.onSubmitTwice()}
                    }>
                        <h2 className = "employees-form-heading">Fill in the details below to add a bet</h2>
                    <div className="form-group">
                        <label className ="form-labels">Who are you?</label>
                        <select id="WhoIsIt" value={this.state.who_is_it} onChange={this.onChangeWhoIsIt} className="form-answer-box form-answer-box-dropdown" required >
                            <option value ="empty-value" id= "emptyValue"></option>
                            <option value="Danny">Danny</option>
                            <option value="Jimmy">Jimmy</option>
                            <option value="Frank">Frank</option>
                        </select>
                        
                    </div>
                    <div className="form-group editableFormGroup">
                        <label className ="form-labels">Betting Weekend</label>
                        <select id="what-weekend-is-it" class="form-answer-box form-answer-box-dropdown"  value={this.state.betting_weekend_selector} onChange={this.onChangeBettingWeekendSelector} required>
                            <option value="BW1">Betting Weekend 1</option>
                            <option value="BW2">Betting Weekend 2</option>
                            <option value="BW3">Betting Weekend 3</option>
                            <option value="BW4">Betting Weekend 4</option>
                            <option value="BW5">Betting Weekend 5</option>
                            <option value="BW6">Betting Weekend 6</option>
                            <option value="BW7">Betting Weekend 7</option>
                            <option value="BW8">Betting Weekend 8</option>
                            <option value="BW9">Betting Weekend 9</option>
                            <option value="BW10">Betting Weekend 10</option>
                            <option value="BW11">Betting Weekend 11</option>
                            <option value="BW12">Betting Weekend 12</option>
                            <option value="BW13">Betting Weekend 13</option>
                            <option value="BW14">Betting Weekend 14</option>
                            <option value="BW15">Betting Weekend 15</option>
                            <option value="BW16">Betting Weekend 16</option>
                            <option value="BW17">Betting Weekend 17</option>
                            <option value="BW18">Betting Weekend 18</option>
                            <option value="BW19">Betting Weekend 19</option>
                            <option value="BW20">Betting Weekend 20</option>
                            <option value="BW21">Betting Weekend 21</option>
                            <option value="BW22">Betting Weekend 22</option>
                            <option value="BW23">Betting Weekend 23</option>
                            <option value="BW24">Betting Weekend 24</option>
                            <option value="BW25">Betting Weekend 25</option>
                            <option value="BW26">Betting Weekend 26</option>
                            <option value="BW27">Betting Weekend 27</option>
                            <option value="BW28">Betting Weekend 28</option>
                            <option value="BW29">Betting Weekend 29</option>
                            <option value="BW30">Betting Weekend 30</option>
                            <option value="BW31">Betting Weekend 31</option>
                            <option value="BW32">Betting Weekend 32</option>
                            <option value="BW33">Betting Weekend 33</option>
                            <option value="BW34">Betting Weekend 34</option>
                            <option value="BW35">Betting Weekend 35</option>
                            <option value="BW36">Betting Weekend 36</option>
                            <option value="BW37">Betting Weekend 37</option>
                            <option value="BW38">Betting Weekend 38</option>
                            <option value="BW39">Betting Weekend 39</option>
                            <option value="BW40">Betting Weekend 40</option>
                        </select>    
                    </div>
                    <div className="form-fixture-align">
                        <div className="form-group">
                            {/* <label className ="form-labels">Home Team</label> */}
                            <input type="text" value={this.state.home_team} onChange={this.onChangeHomeTeam} className="home-team-choice" placeholder="Home Team" required/>
                        </div>
                        <p className="vsPeeTag">vs</p>
                        <div className="form-group  ">
                            <input type="text" value={this.state.away_team} onChange={this.onChangeAwayTeam} className="away-team-choice" placeholder="Away Team" required />
                        </div>
                    </div>
                    <div className=" editableFormGroup">
                        <label className ="form-labels">Whats the bet?</label>
                        <input type="text" value={this.state.what_is_the_bet} onChange={this.onChangeWhatIsTheBet} className="form-answer-box" required />
                    </div>
                    <div className=" editableFormGroup">
                        <label className ="form-labels">Other info</label>
                        <input type="text" value={this.state.other_info_needed} onChange={this.onChangeOtherInfoNeeded} className="form-answer-box" />
                    </div>
                    <div className="form-group editableFormGroup">
                        <label className ="form-labels oddsLabel">Odds</label>
                        <input type="number" step="1" value={this.state.what_are_the_odds} onChange={this.onChangeWhatAreTheOdds} className="form-answer-box" required />
                    </div>
                    <div className="form-group ">
                        <label className ="form-labels">Bet Outcome</label>
                        <select id="outcomeOfBet" value={this.state.outcome_of_bet} onChange={this.onChangeOutcomeOfBet} className="form-answer-box" required >
                            
                            <option value="yetToPlay">Yet to play</option>
                            <option value="Won">Won</option>
                            <option value="Lost">Lost</option>
                        </select>
                    </div>
                    <div className="form-group-button">
                        <input type="submit" value="Add your bet" onClick="Alert()" className=" btn btn-primary btn-sm customButton"/>
                    </div>
                </form>
                </div>
         
            </div>
            </div>

        )
    }
}
