import {NavLink} from 'react-router-dom';
const  Navigation = () => {
    return (
      <>
      <div className="nav">
         <NavLink exact activeClassName="active-class" to="/"> About </NavLink>
         <NavLink exact activeClassName="active-class" to="/contact"> Contact</NavLink>
         <NavLink exact activeClassName="active-class" to="/search">Search</NavLink>
         </div>
      </>
    );
  }
  
  export default Navigation;
  