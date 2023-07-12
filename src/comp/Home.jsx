import heroImg from "../assets/imgs/smallVan.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="font-inter">
      <img src={heroImg} alt="small van" className="absolute top-0 -z-10 h-full w-full brightness-75 object-cover " />
      <div className="text-center translate-y-56 ">
        <div>
          <h1 className="text-8xl text-white pt-5">
            Got travel <strong className="underline">plans</strong>?<br /> We got travel{" "}
            <strong className="underline">vans!</strong>
          </h1>
        </div>
        <button className="text-align-center text-black text-xl transition ease-in-out mt-8 hover:bg-orange-300 hover:scale-105 bg-orange-200 py-5 px-12 items-center rounded-full w-52">
          <Link to="/vans">VANS →</Link>
        </button>
      </div>
    </div>
  );
}
