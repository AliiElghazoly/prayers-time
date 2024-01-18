import logo from "../assets/islam-1299211.svg"
function Navbar(prop) {
  return (
   <>
    <nav className=" bg-white p-4">
    <div className="container px-4 mx-auto flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" className="h-10"/>
      </div>
      <div className=" text-black font-bold text-lg">
      
          شهر  {prop.data.data.data.date.hijri.month.ar} 
      </div>
    </div>
  </nav>
   </>
  )
}

export default Navbar