import React, { Component } from 'react';
import Layout from './Layout';
import { getAllAccounts } from './Account';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            form: {
                email: '',
                password: '',
                isRemembered: false
            },
            isValid: false,
            isLoggedIn: false
        };
    }

    handleChange = (e) => {
        this.setState((state) => {
            const { form } = state
            form[e.target.name] = e.target.value
            return { form }
        }, () => this.checkValidForm())
    }

    handleCheckbox = () => {
        this.setState((state) => {
            const { form } = state
            form.isRemembered = !form.isRemembered
            return { form }
        }, () => this.checkValidForm())
    }

    checkValidForm = () => {
        // const { email, password } = this.state.form
        // const value = email && password
        // this.setState({ isValid: value})
        const accounts = getAllAccounts();
        const { email, password } = this.state.form;
        const isValid = accounts.filter(acc => 
            acc.email == email && 
            acc.password == password
        ).length == 1
        this.setState({ isValid });
    }

    handleSubmit = () => {
        if( this.state.isValid ){
            this.setState({isLoggedIn: true})
        }
    }

    handleLogout = () => {
        this.setState({ isLoggedIn: false })
    }

    render(){
        const { isLoggedIn, form } = this.state;
        if (isLoggedIn) return (
            <Layout onLogOut={this.handleLogout}/>
        );
        return(
            <>
                <div className="container">
                    <h1>My App</h1>
                    <div className="form-signin">
                        <form>
                            <input placeholder="Email" name="email" type="email" value={form.email} onChange={this.handleChange}></input>
                            <input placeholder="Password" name="password" type="password" value={form.password} onChange={this.handleChange}></input>
                            <label><input type="checkbox" value={form.isRemembered} onChange={this.handleCheckbox}/>Remember me</label><br/>
                            <button className="btn btn-lg btn-primary" type="button" onClick={this.handleSubmit}>Sign In</button>
                        </form>
                    </div>
                </div>
            </>
        );
    }
}

export default Home;