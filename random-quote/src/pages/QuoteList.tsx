import BlockQuote from "../components/BlockQuote"

export default function QuoteList(): JSX.Element {
  return (
    <div className="container">
        <h1 className="author-title">Bill Gates</h1>
        <div className="list-quote">
            <BlockQuote />
        </div>
        <div className="list-quote">
            <BlockQuote />
        </div>
        <div className="list-quote">
            <BlockQuote />
        </div>
    </div>
  )
}
