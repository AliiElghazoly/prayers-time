import React from 'react'
import Navbar from './Navbar'
import DatePlace from './Date-Place'
import Selector from './Selector'
import Crad from './Crad'
import Footer from './Footer'


function Progect(prop) {
  return (
    <>
    <div className="App">
          <Navbar data={prop.timing} />
          <DatePlace timing={prop.timing} palce={prop.palce} />
          <Selector select={prop.gitTiming} setPalce={prop.setPalce} palce={prop.palce} />
          <div className=" crad flex flex-wrap my-12">
            <Crad
              img={prop.elfagr}
              title="الفجر"
              time={prop.timing.data.data.timings.Fajr}
            />
            <Crad
              img={prop.dhhr}
              title="الظهر "
              time={prop.timing.data.data.timings.Dhuhr}
            />
            <Crad img={prop.asr} title="العصر" time={prop.timing.data.data.timings.Asr} />
            <Crad
              img={prop.sunset}
              title="المغرب"
              time={prop.timing.data.data.timings.Maghrib}
            />
            <Crad
              img={prop.night}
              title="العشاء"
              time={prop.timing.data.data.timings.Isha}
            />
          </div>
          <Footer />
        </div>
    </>
  )
}

export default Progect