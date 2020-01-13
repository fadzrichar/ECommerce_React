 
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/notFound.css';

class NotFound extends React.Component {
    render() {
        return (
            <div className="container">
                <div className="row notMatch">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <img src="https://www.argildx.com/wp-content/uploads/2017/06/Is-a-Misconfigured-%E2%80%9CPage-Not-Found%E2%80%9D-Jeopardizing-Your-Website.jpg" />
                        <h1>Page Not Found</h1>
                        <Link to="/">Back to Home</Link>
                    </div>
                </div>
            </div>
        )
    }
}

export default NotFound;