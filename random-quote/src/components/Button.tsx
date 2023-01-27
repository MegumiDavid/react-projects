import { BsArrowRight } from 'react-icons/bs';

export default function Button(): JSX.Element {
  return (
    <button className="author">
      <div className="author-wrapper">
        <p className="name">Bill Gates</p>
        <p className="carrer">business</p>
      </div>
      <BsArrowRight className='arrow' />
    </button>
  )
}

// wrap <Link>
// props to recive author infos