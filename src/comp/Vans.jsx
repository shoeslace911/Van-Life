import { useState, useEffect } from "react";

export default function Vans() {
  let [vanList, setVanList] = useState([]);

  let fetchVans = () => {
    fetch("/api/vans")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setVanList(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchVans();
  }, []);

  console.log(vanList);
  return (
    <div className="text-black pt-24 px-12 py-8">
      <h1 className="text-5xl text-center font-inter">Vans</h1>
      <div className="flex flex-wrap justify-evenly">
        {vanList.vans.map((van) => {
          return (
            <div key={van.id} className="w-72 h-fit">
              <h1 className="font-inter">{van.name}</h1>
              <h2>{van.type}</h2>
              <p>${van.price}/day</p>
              <p className="text-lg">{van.description}</p>
              <img src={van.imageUrl} alt="Van image" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
