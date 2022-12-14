import Search from "../components/Search";

export default function Intro() {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-16 md:mb-6">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight md:pr-3">
        My thoughts and ideas
      </h1>
      <div>
        <div className="iconImage">
      <img src="/images/Star_wars_Lightsaber_utensils.png" layout="fill" alt="lightsabers in the shape of utensils"></img>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        May the gist be with you {' '} 
        <i aria-hidden className="fas fa-jedi"></i>
      </h4>
      </div>
        <Search>
        </Search> 
      </div>
      
    </section>
  )
}