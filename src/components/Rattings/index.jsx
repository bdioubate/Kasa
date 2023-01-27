function Rattings({ count }) {
  return (
    <div className="rattings">
      <style>
        {`
                i.fa-star:nth-child(-n+${count}) {
                    color: #FF6060;

                }
            `}
      </style>
      <i className="fas fa-star colored"></i>
      <i className="fas fa-star colored"></i>
      <i className="fas fa-star colored"></i>
      <i className="fas fa-star colored"></i>
      <i className="fas fa-star colored"></i>
    </div>
  )
}

export default Rattings
