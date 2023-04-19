import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

interface ButtonType {
  character: string;
  anime: string;
}

export default function Button({ character, anime }: ButtonType): JSX.Element {
  const navigate = useNavigate();
  return (
    <button className="author" onClick={() => navigate(`/${character}`)}>
      <div className="author-wrapper">
        <p className="name">{character}</p>
        <p className="desc">{anime}</p>
      </div>
      <BsArrowRight className='arrow' />
    </button>
  )
}

// wrap <Link>
// props to recive author infos