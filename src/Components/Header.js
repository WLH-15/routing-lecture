import React from 'react';
//Link navigates the project through routes by pushing the path in the 'to' prop onto the end of the url in the browser. You MUST match the spelling of the 'to' prop to the spelling of the 'path' prop on the Route you want to navigate to. withRouter gives the component access to the history, location, and match object if the component doesn't already have them.
import {Link, withRouter} from 'react-router-dom';

const Header = props => {
    console.log(props)
    return (
        <div>
            <Link to='/'>Landing</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
        </div>
    )
}

export default withRouter(Header);