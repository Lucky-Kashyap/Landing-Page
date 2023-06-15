function Box({heading,para}){
    return (
        <div className="box">
        <h1>{heading}</h1>
        <p>
         {para}
        </p>
      </div>
    )
}

export default Box;