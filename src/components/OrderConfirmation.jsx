import React, {Component} from 'react'
import {Typography} from '@material-ui/core'
import './OrderConfiramtion.css'
import {withRouter} from "react-router-dom";

class OrderConfirmation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            students: [
                {EmailUs: 'books@bridgelabz.com', ContactUs: 9468679750, Address: 'Govandi'},
            ]
        }
    }

    renderTableHeader() {
        let header = Object.keys(this.state.students[0])
        return header.map((key, index) => {
            return <th key={index}>{key.toUpperCase()}</th>
        })
    }

    backToHomePage=event=>{
        localStorage.clear()
        this.props.history.push("/")
    }

    renderTableData() {
        return this.state.students.map((student, index) => {
            const {EmailUs, ContactUs, Address} = student //destructuring
            return (
                <tr key={student}>
                    <td>{EmailUs}</td>
                    <td>{ContactUs}</td>
                    <td>{Address}</td>
                </tr>
            )
        })
    }

    render() {
        return (
            <div>
                <div style={{marginLeft: '27em', marginTop: '13em'}}>
                    <img className={'confirmOrderImage'}
                         src={require('../assets/Order-placed-successfully.png')}
                         alt="Logo"/>
                </div>
                <div className='paragraph'>
                    <p style={{marginLeft: '23em'}}>Hurray!!!... Your order is confirmed.</p>
                    <p style={{marginLeft: '21em', marginTop: "-1em"}}>The order id is #1234 save the order id for</p>
                    <p style={{marginLeft: '25em', marginTop: "-1em"}}>further communication.</p>
                </div>
                <div style={{marginTop: '5em', marginLeft: '15em', marginRight: '15em', marginBottom: '5em'}}>
                    <h1 id='title'></h1>
                    <table id='students'>
                        <tbody>
                        <tr>{this.renderTableHeader()}</tr>
                        {this.renderTableData()}
                        </tbody>
                    </table>
                    <div>
                        <button type="button" className="button" onClick={this.backToHomePage}>Continue Shopping</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(OrderConfirmation)