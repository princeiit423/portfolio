
function Navbar() {
  return (
    <>
    <div className="flex justify-center items-center fixed w-full top-3">
    <nav className="flex gap-1 p-0.5 rounded-full border border-white/30 backdrop-blur" >
      <a className=" nav-items px-4 py-1.5 text-white/70 rounded-full" href="/home">Home</a>
      <a className=" nav-items px-4 py-1.5 text-white/70 rounded-full" href="/project">Project</a>
      <a className=" nav-items px-4 py-1.5 text-white/70 rounded-full" href="/about">About</a>
      <a className="px-4 py-1.5 bg-white rounded-full  text-gray-900" href="https://www.linkedin.com/in/faiz-hussain-257001250/">Contact</a>
    </nav>
    </div>
    <br></br>
    </>
  )
}

export default Navbar
