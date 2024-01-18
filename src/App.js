import "./App.css";
import Loding from "./components/Loding";
import elfagr from "../src/assets/fajr-prayer.png";
import dhhr from "../src/assets/dhhr-prayer-mosque.png";
import asr from "../src/assets/asr-prayer-mosque.png";
import sunset from "../src/assets/sunset-prayer-mosque.png";
import night from "../src/assets/night-prayer-mosque.png";
import axios from "axios";
import { useEffect, useState } from "react";

import Progect from "./components/Progect";

function App() {
  const [timing, setTiming] = useState(null);
  const [palce, setPalce] = useState("Cairo");
  const [loding, setLoding] = useState(false)
  const gitTiming = async () => {
    let Data = await axios.get(
      `http://api.aladhan.com/v1/timingsByCity?city=${palce}&country=Egypt&method=8`
      )
      setTiming(Data);
      setLoding(true)
    };
  useEffect(() => {
    gitTiming();
  }, [palce]);
  return (
    <>
      {loding ? (
              <>
              <Progect
                timing={timing}
                elfagr={elfagr}
                dhhr={dhhr}
                asr={asr}
                sunset={sunset}
                night={night}
                palce={palce}
                setPalce={setPalce}
              />
              </>
      ) : (
        <>
          <Loding />
        </>
      )}
    </>
  );
}

export default App;
