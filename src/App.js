import "./index.css"
import data from "./data.js"
import Card from "./Card"
import profile from "./images/image-jeremy.png"
import React, { useState } from "react"
function App()
{

  const [time, setTime] = useState('monthly')
  const CardComponent = data.map((datas) =>
    <Card datas={datas} key={datas.title} time={time} />
  )


  const HandleClick = (event) =>
  {
    const name = event.target.value
    setTime(name)
  }

  return (
    <div className="App w-screen h-screen m-0 p-0 box-border font-Robik bg-Very-dark-blue flex items-center justify-center Mobile:h-full Mobile:w-full Mobile:py-8">
      <div className="w-4/5 h-3/5 gap-5 flex Mobile:flex-col ">
        <div className="left w-1/4 h-full bg-Dark-blue rounded-xl flex flex-col Mobile:w-full ">
          <div className="profile bg-Blue  h-[70%] rounded-xl drop-shadow p-5 justify-evenly flex flex-col Mobile:flex-row Mobile:items-center Mobile:justify-center Mobile:gap-5">
            <img src={profile} alt="img profile" className="w-[4rem] h-[4rem] object-center border-2 rounded-full border-[#fff] drop-shadow shadow large:w-[5rem] large:h-[5rem]" />
            <div className="Mobile:w-full">
              <span className=" text-Pale-Blue large:text-[22px]">Report for</span>
              <h3 className="text-[#fff] font-ms text-[2rem] tracking-normal w-[80%] leading-tight Mobile:text-[1.5rem] large:text-[3rem]">Jeremy Robson</h3>
            </div>

          </div>
          <div className="status w-full h-[30%] flex flex-col items-start p-3  text-Very-dark-blue justify-evenly">
            <ul className="flex flex-col justify-between Mobile:flex-row Mobile:w-full Mobile:justify-evenly large:text-[1.3rem]">
              <li>
                <input type="radio" onClick={HandleClick} name="time" value="daily" id="1" className="hidden peer" />
                <label htmlFor="1" className="peer-checked:text-Pale-Blue cursor-pointer hover:text-Pale-Blue transition-all"> Daily</label>
              </li>
              <li>
                <input type="radio" onClick={HandleClick} className="hidden peer" name="time" value="weekly" id="2" defaultChecked />
                <label htmlFor="2" className="peer-checked:text-Pale-Blue cursor-pointer hover:text-Pale-Blue transition-all"> Weekly</label>
              </li>

              <li>

                <input type="radio" onClick={HandleClick} name="time" value="monthly" id="3" className="hidden peer" />
                <label htmlFor="3" className="peer-checked:text-Pale-Blue cursor-pointer hover:text-Pale-Blue transition-all"> Monthly</label>
              </li>
            </ul>

          </div>
        </div>
        <div className="right w-3/4 h-full grid gap-5 grid-cols-3 grid-rows-2 Mobile:w-full Mobile:flex Mobile:flex-col">
          {CardComponent}
        </div>
      </div>
    </div >
  );
}

export default App;
