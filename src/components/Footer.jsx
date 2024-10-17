
const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container bg-gradient-to-r from-green-400 to-cyan-400 text-black w-auto p-4 border border-gray-500 rounded-xl m-4">
        <h1 className="text-3xl p-4 text-center font-serif font-semibold">Lets create something amazing together.</h1>
        <p className=" p-4 mb-4 text-center text-wrap text-lg">Ready to bring your next project life?Lets connect and discuss how i can help you achieve your goal.</p>
        <button className="h-12 w-full border border-transparent bg-black text-white rounded-lg font-semibold text-lg"><a><span>Contact me</span></a></button>
      </div>

      
      <p className="text-center p-8 text-gray-400"><i className="fa-regular fa-copyright text-gray-400"></i> All rights reserved</p>
      <div className="social flex flex-col justify-center items-center gap-4">
        <a href="https://www.linkedin.com/in/faiz-hussain-257001250/"><p className="text-lg">Linkedin <i className="fa-solid fa-location-arrow text-white"></i></p></a>
        <a href="https://www.instagram.com/the_faizu_h/"><p className="text-lg">Instagram <i className="fa-solid fa-location-arrow text-white"></i></p></a>
        <a><p className="text-lg">Twitter <i className="fa-solid fa-location-arrow text-white"></i></p></a>
        <a href="https://github.com/princeiit423"><p className="text-lg">Github <i className="fa-solid fa-location-arrow text-white"></i></p></a>
      </div>
      
    </div>
  )
}

export default Footer
