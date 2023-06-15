import Box from "./Box";

function Heroarea(){
    return (
        <div className="three-section fix-width">
        <h2 className="mini-heading">What We Offer</h2>
        <h1 className="heading">Our Services</h1>
        <p className="paragraph">
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form.
        </p>
  
        <div className="flex">
          <Box heading="Brand Identity Design" para ="Invest in Bitcoin on the regular or save with one of the highest
              interest rates on the market."/>
          <Box heading="Digital Marketing" para ="Invest in Bitcoin on the regular or save with one of the highest
              interest rates on the market."/>
          <Box heading="Development" para ="Invest in Bitcoin on the regular or save with one of the highest
              interest rates on the market."/>
        </div>
      </div>
    )
}

export default Heroarea;