import React from 'react';

class Layout extends React.Component{
    render(){
        return(
            <>
                <div className="container">
                    <div className="form-signin">
                        <h1 className="h3 mb-3 fw-formal">Welcome</h1>
                        <button className="w-100 btn btn-lg btn-primary" type="button" onClick={this.props.onLogOut}>Log Out</button>
                    </div>
                </div>
            </>
        );
    }
}

export default Layout;