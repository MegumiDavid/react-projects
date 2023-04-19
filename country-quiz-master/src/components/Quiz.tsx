import filandFlag from '../assets/filand.png'
import advetureIcon from '../assets/undraw_adventure_4hum 1.svg'

import { AiFillCheckCircle } from 'react-icons/ai';
import { MdCancel } from 'react-icons/md';

export default function Quiz() {
  return (
    <div className="card">
        <img src={advetureIcon} alt="adventure" className="img-top" />
        <div className="quiz-content">
            <img src={filandFlag} alt="quiz-img" className="quiz-img" />
            <h2>Kuala Lumpur is the capital of</h2>
            <div className="btn answers">
                <button className="btn correct">
                    <div className="wrapper">
                        <div className="alternative">A</div>
                        <p>Vietnam</p>
                    </div>
                    <AiFillCheckCircle className='icon-correct' />
                </button>
                <button className="btn wrong">
                    <div className="wrapper">
                        <div className="alternative">B</div>
                        <p>Malaysia</p>
                    </div>
                    <MdCancel className='icon-wrong' />
                </button>
                <button className="btn">
                    <div className="wrapper">
                        <div className="alternative">C</div>
                        <p>Sweden</p>
                    </div>
                    <i></i>
                </button>
                <button className="btn">
                    <div className="wrapper">
                        <div className="alternative">D</div>
                        <p>Austria</p>
                    </div>
                    <i></i>
                </button>
                <button className="next">
                    Next
                </button>
            </div>
        </div>
    </div>
  )
}
