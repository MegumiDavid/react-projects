import BlockQuote from "../components/BlockQuote"
import Button from "../components/Button"

export default function Quote(): JSX.Element {
  return (
    <div className="container">
        <div className="wrapper">
            <BlockQuote />
            <Button />
        </div>
    </div>
  )
}
