
const Project = () => {
  return (
    <div className="m-6">
      <div className="container flex flex-col items-center block mx-auto">
        <p className="text-green-500 text-lg p-4">Real world results</p>
        <h1 className="text-3xl font-semibold font-serif mt-2">Featured Project</h1>
        <p className="text-gray-600 text-center  text-">See how I transformed concepts into engaging digital experiences.</p>
      </div>

      <div className="jar flex flex-col p-4 gap-12">
        <div className="cards  border border-gray-400 backdrop-blur rounded-xl bg-gray-900">
            <div className="text-jar p-10"> 
                <p className="text-green-400 text-sm p-2">Deployed on Render</p>
                <h1 className="text-3xl font-serif p-2">Wonderlaa</h1>
                <hr className="mb-3 bg-gray-600"></hr>
                <p className="p-2 text-gray-500">👉Full stack project on property management.</p>
                <p className=" p-2 text-gray-500">👉Enhanced user experience by 60%</p>
                <p className="p-2 text-gray-500">👉Having lots of real-time features.</p>
                <button className="bg-white p-2 mt-3 rounded-lg block mx-auto h-12 w-full"><a href="https://wonderlaa.onrender.com/listings"><span className="text-black font-semibold">Visit live site</span></a></button>
            </div>
            <img className="block mx-auto rounded-md" src="https://i.postimg.cc/gj5fy1sC/Wonder-Lust-Google-Chrome-15-08-2024-21-59-51.png" alt="project image"/>
            </div>

            <div className="cards  border border-gray-400 backdrop-blur rounded-xl bg-gray-900 ">
            <div className="text-jar p-10"> 
                <p className="text-green-400 text-sm p-2">Deployed on vercel</p>
                <h1 className="text-3xl font-serif p-2">GreenCare</h1>
                <hr className="mb-3 bg-gray-600"></hr>
                <p className="p-2 text-gray-500">👉AI based crop diseases prediction web app.</p>
                <p className=" p-2 text-gray-500">👉Solve ground level problem.</p>
                <p className="p-2 text-gray-500">👉Inhanced farmer effeciency.</p>
                <button className="bg-white p-2 mt-3 rounded-lg block mx-auto h-12 w-full"><a href="https://earthkeepers-go9i.vercel.app/"><span className="text-black font-semibold">Visit live site</span></a></button>
            </div>
            <img className="block mx-auto rounded-md" src="https://i.postimg.cc/wjGY9yDq/Identify-Plant-Green-Care-and-1-more-page-Personal-Microsoft-Edge-17-10-2024-12-10-11.png" alt="project image"/>
            </div>


            <div className="cards  border border-gray-400 backdrop-blur rounded-xl bg-gray-900 ">
            <div className="text-jar p-10"> 
                <p className="text-green-400 text-sm p-2">Deployed on vercel</p>
                <h1 className="text-3xl font-serif p-2">Student Innovation Center</h1>
                <hr className="mb-3 bg-gray-600"></hr>
                <p className="p-2 text-gray-500">👉Full stack project on event mangement organized by club</p>
                <p className=" p-2 text-gray-500">👉Enhanced user experience by 60%</p>
                <p className="p-2 text-gray-500">👉Reduce latency of web application.</p>
                <button className="bg-white p-2 mt-3 rounded-lg block mx-auto h-12 w-full"><a href="https://student-innovation-center.vercel.app/"><span className="text-black font-semibold">Visit live site</span></a></button>
            </div>
            <img className="block mx-auto rounded-md" src="https://i.postimg.cc/kX7msdnm/Student-Innovation-Center-Google-Chrome-17-09-2024-15-52-34.png" alt="project image"/>
            </div>
      </div>

    </div>
  )
}

export default Project
