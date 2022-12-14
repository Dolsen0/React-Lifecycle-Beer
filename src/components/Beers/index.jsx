import { useEffect, useState } from "react";
import BeerCard from "./BeerCard";

function Beers() {
  const [beerlist, setBeerList] = useState();
  const [beerType, setBeerType] = useState("ale");
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${beerType}`) //ale, stouts
      .then((response) => response.json())
      .then((beers) => setBeerList(beers))
      .catch(alert);
  }, [beerType]);
  if (!beerlist) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <button onClick={() => setBeerType("ale")}>Ales</button>
      <button onClick={() => setBeerType("stouts")}>Stouts</button>
      <section id ="beerList" >
        {beerlist.map((beer) => (

        //   <li key={beer.id}>{beer.name}</li>
            <BeerCard key={beer.id} beer={beer} />
        ))}
      </section>
    </>
  );
}

export default Beers;
