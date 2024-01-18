function Selector(prop) {
  return (
    <>
      <div className="flex items-center justify-center pt-8">
        <div className="relative w-64">
          <select
            onClick={prop.select}
            onChange={(e)=>{prop.setPalce(e.target.value)}}
            className=" select rounded-lg font-semibold block appearance-none text-black hover:cursor-pointer w-full bg-white border border-gray-300 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-blue-500" >
            <option value="Cairo" > القاهرة</option>
            <option value="Alexandria"> الاسكندرية</option>
            <option value="Monofia"> المنوفية</option>
            <option value="Aswan"> اسوان</option>
            <option value="Suez"> السويس</option>
            <option value="Beheira"> البحيرة</option>
            <option value="Sohag"> سوهاج</option>
            <option value="Luxor"> الاقصر</option>
            <option value="Minya"> المنيا</option>
            <option value="Fayoum"> الفيوم</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
            </svg>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Selector;
