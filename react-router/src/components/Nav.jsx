import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div className='nav-links'>
            <Link to='/'> Home </Link>
            <Link to='/componentA'> Component A </Link>
            <Link to='/componentB'> Component B </Link>
        </div>
    )
}

export default Nav