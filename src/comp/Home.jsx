import heroImg from "../assets/imgs/smallVan.jpg";

export default function Home() {
  return (
    <div className="font-inter flex ">
      <img src={heroImg} alt="small van" className="absolute top-0 -z-10 h-full w-full brightness-75 object-cover " />
      <div className="mx-auto">
        <h1 className="text-6xl text-white ">
          Got travel <strong className="underline">PLANS</strong>?<br /> We got travel{" "}
          <strong className="underline">VANS</strong>
        </h1>
      </div>
    </div>
  );
}
