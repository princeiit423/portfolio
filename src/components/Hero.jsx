//import memojiImage from "src/assets/memoji-computer.png";
const Hero=()=>{
  return (
    <div className="py-32 flex flex-col items-center ml-9 ">
      <div className="container text-white w-full flex flex-col items-center ">
      <div className="flex flex-col items-center">
        <img src="https://i.postimg.cc/J442R8RK/memoji-computer.png" className="size-[100px]" alt="emoji"/>
           <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className="bg-green-500 size-2.5 rounded-full "></div>
            <div className="text-sm font-semibold">Available for new Project.</div>
        </div>
        </div>
        <h1 className="font-serif text-4xl font-semibold text-center mt-8">Building exceptional user experience!</h1>
        <p className="text-center text-gray-500 text-wrap p-3">I specialize in transform design into functional, 
            high performance web applications. Lets discuss your next project.
        </p>
        <button className="border border-gray-700 rounded-lg p-2"><a href="https://github.com/princeiit423"><span className="text-white font-semibold bg-transparent ">Explore my work 🖐️</span></a></button>
        <button className="border border-gray-700 rounded-lg p-2 mt-2 bg-white"><a href="https://www.linkedin.com/in/faiz-hussain-257001250/"><span className=" text-black font-semibold ">Lets Connect 🤝</span></a></button>
      </div>

    </div>

  )
}

export default Hero
