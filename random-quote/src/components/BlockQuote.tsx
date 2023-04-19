interface BlockQuoteProps {
  quote: string;
}

export default function BlockQuote({ quote } : BlockQuoteProps) : JSX.Element {
  return (
    <div className="quote-box">
      <blockquote>
          {quote}
      </blockquote>
    </div>
  )
}
