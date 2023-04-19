import BlockQuote from "../components/BlockQuote";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";

interface QuoteType {
		_id: string;
		quote: string;
}

export default function QuoteList(): JSX.Element {
  const { author } = useParams();
  
  const { data, status } = useQuery(['quote-list'], fetchCharacterQuotes);

  async function fetchCharacterQuotes() {
    const response = await axios.get(`https://animechan.vercel.app/api/quotes/character?name=${author}`);
    return response.data;
  }

  if (status === 'loading') {
    return <div className="container"><h1>Loading . . .</h1></div>
  }

  if (status === 'error') {
    return <div className="container"><h1>\ Error /</h1></div>
  }

  return (
    <div className="container">
        <h1 className="author-title">{ author }</h1>
        {data?.map((d: QuoteType) => (
          <div className="list-quote" key={d._id}>
              <BlockQuote
                quote={d.quote}
              />
          </div>
        ))}
    </div>
  )
}
