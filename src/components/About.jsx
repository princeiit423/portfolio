

const About = () => {
  return (
    <div>
      <div className="heading flex flex-col gap-4 items-center">
        <p className="text-green-400">About me</p>
        <h1 className="text-4xl font-semibold font-serif">Glimpses into my World</h1>
        <p className="text-gray-500">Learn more about who i am, what i do, and what inspires me.</p>
      </div>
      <div className=""> 
      <div className="card bg-gray-900 flex flex-col border border-gray-400 rounded-lg p-7 m-4 mt-10 backdrop-blur">
        <h1 className="text-3xl font-serif font-semibold">📒My reads</h1>
        <p className="text-gray-500 p-5">Explore the books shaping my perspective.</p>
        <img className=" rounded-xl block mx-auto" src="data:image/jpeg;base64,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" alt="books"/>
      </div>

        <div className="card-tool border border-gray-400 rounded-lg p-8 m-4 mt-7 bg-gray-900 backdrop-blur-md">
            <h1 className="text-3xl font-serif font-semibold">⚒️My Toolbox</h1>
            <p className="text-gray-500 p-3">Explore the technology and tools i use to craft exceptional web app.</p>
            
            <div className="flex flex-row flex-wrap">
            <div className="flex flex-row gap-3 justify-start items-center border h-12 w-40 m-3 border-gray-500 rounded-lg p-4">
            <i className="fa-brands fa-js text-green-400 text-2xl rounded-2xl"></i>
                <h1 className="text-2xl">JavaScript</h1>
                </div>

                <div className="flex flex-row gap-3 justify-start items-center border h-12 w-40 m-3 border-gray-500 rounded-lg p-4">
            <i className="fa-brands fa-html5 text-green-400 text-2xl rounded-2xl"></i>
                <h1 className="text-2xl">HTML5</h1>
                </div>

                <div className="flex flex-row gap-3 justify-start items-center border h-12 w-40 m-3 border-gray-500 rounded-lg p-4">
            <i className="fa-brands fa-css3 text-green-400 text-2xl rounded-2xl"></i>
                <h1 className="text-2xl">CSS3</h1>
                </div>

                <div className="flex flex-row gap-3 justify-start items-center border h-12 w-40 m-3 border-gray-500 rounded-lg p-4">
            <i className="fa-brands fa-react text-green-400 text-2xl rounded-2xl"></i>
                <h1 className="text-2xl">React</h1>
                </div>

                <div className="flex flex-row gap-3 justify-start items-center border h-12 w-40 m-3 border-gray-500 rounded-lg p-4">
            <i className="fa-brands fa-node-js text-green-400 text-2xl rounded-2xl"></i>
                <h1 className="text-2xl">NodeJs</h1>
                </div>

                <div className="flex flex-row gap-3 justify-start items-center border h-12 w-40 m-3 border-gray-500 rounded-lg p-4">
            <i className="fa-brands fa-database text-green-400 text-2xl rounded-2xl"></i>
                <h1 className="text-2xl">MongoDB</h1>
                </div>

            </div>

            
        </div>

        <div className="card-hobby p-4 border border-gray-400 rounded-lg m-4 bg-gray-900">
        <h1 className="text-3xl font-serif font-semibold">🌟Beyond the code</h1>
        <p className="text-gray-400 p-3">Explore my interest and hobbies beyond the digital realm.</p>

      <div className="set-hobby flex flex-row flex-wrap gap-4 p-3">
        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black">Painting🎨</p>
        </div>

        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black ">Podcast🎙️</p>
        </div>

        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black">Gaming🎮</p>
        </div>

        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black">Fitness🏋️</p>
        </div>

        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black">Music🎼</p>
        </div>

        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black">Riding🏍️</p>
        </div>

        <div className="hobby rounded-xl bg-gradient-to-r from-green-400 to-cyan-400 border border-gray-700 p-2">
          <p className="text-xl font-normal text-black">Reading📗</p>
        </div>

        </div>
      </div>

        

      </div>
    </div>
  )
}

export default About
