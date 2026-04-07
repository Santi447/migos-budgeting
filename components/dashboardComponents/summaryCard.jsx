export default function SummaryCard({ title, amount, reportValue }){
  return(
    <div className="border">
      <div>
        {title}
      </div>
      <div>
        {amount}
      </div>
      <div>
        {reportValue}
      </div>
    </div>
  )
} 