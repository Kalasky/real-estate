import { Link } from 'react-router-dom'
import '../index.scss'

const NavLink = ({ href, text }) => {
  return (
    <Link to={href} className="text-base m-auto font-medium text-orange-500 hover:text-orange-600 sm:hidden navxl">
      {text}
    </Link>
  )
}

export default NavLink
