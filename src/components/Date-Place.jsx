
function DatePlace(prop) {
  return (
    <div>
        <div className="flex justify-center flex-wrap items-center m-10">
            <div className="p-4">
              <p>
                {" "}
                {prop.timing.data.data.date.gregorian.year} /{" "}
                {prop.timing.data.data.date.gregorian.month.number} /{" "}
                {prop.timing.data.data.date.gregorian.day}
              </p>
              <h1> {prop.palce} </h1>
            </div>
            <div className="p-4">
              <p>يوم</p>
              <h1>{prop.timing.data.data.date.hijri.weekday.ar} </h1>
            </div>
          </div>

    </div>
  )
}

export default DatePlace