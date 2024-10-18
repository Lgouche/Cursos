const PercentageDisplay = ({ good, count,text }) => {
    const calculatePercentage = () => {
      const ret = Math.round((good / count) * 100) + '%';
      if (count === 0) return 'No hay reseñas'
      return ret
    }

  
    return (
      <div>
        <h2>Porcentaje de comentarios {text}</h2>
        <p>{calculatePercentage()}</p>
      </div>
    )
  }
  
  export default PercentageDisplay
  