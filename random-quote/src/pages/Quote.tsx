import BlockQuote from "../components/BlockQuote"
import Button from "../components/Button"

import { useQuery } from 'react-query';
import axios from "axios";

export default function Quote(): JSX.Element {

  const { data, status } = useQuery(['quote'], fetchQuote);

  async function fetchQuote() {
    const response = await (await axios.get("https://animechan.vercel.app/api/random")).data;
    return response
  }

  if (status === 'loading') {
    return <div className="container"><h1>Loading . . .</h1></div>
  }

  if (status === 'error') {
    return <div className="container"><h1>\ Error /</h1></div>
  }

  return (
    <div className="container">
        <div className="wrapper">
            <BlockQuote 
              quote={data?.quote}
            />
            <Button 
              character={data?.character}
              anime={data?.anime}
            />
        </div>
    </div>
  )
}
