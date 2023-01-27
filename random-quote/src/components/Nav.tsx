import { Link } from 'react-router-dom';

export default function Nav() : JSX.Element {
  return (
    <div className="logo-box">
        <Link to="/">
            <div className="logo">random</div>
        </Link>
    </div>    
  )
}
