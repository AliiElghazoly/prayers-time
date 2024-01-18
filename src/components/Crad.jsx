
function Crad(prop) {
  return (
        <div className=" cardIn mx-auto w-72 bg-white shadow-md overflow-hidden my-2">
  <img className="w-full h-48 object-cover" src={prop.img} alt="photo"/>
  <div className="p-4">
    <p className="text-xl font-semibold text-gray-600 "> {prop.title}</p>
    <h1 className="text-gray-800 mt-2">{prop.time}</h1>
  </div>
</div>
  )
}

export default Crad