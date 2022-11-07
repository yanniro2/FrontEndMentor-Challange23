import React from 'react'
import menu from "./images/icon-ellipsis.svg"

function Card({ datas, time })
{
    return (


        <div className={` bg-${datas.title} rounded-xl flex w-full h-full items-end text-Pale-Blue relative Mobile:flex-col`} >
            {/* <div className={`bg-${datas.title}`}> */}
            {/* <FaToolbox className='absolute z-20 top-2 right-2 rotate-45 text-[2rem] text-Light-red(work) drop-shadow shadow' /> */}
            <img src={`${datas.imageURL}`} alt="img icon" className='absolute z-20 top-2 right-2  w-[3rem] h-[3rem] text-Light-red(work) drop-shadow shadow Mobile:static' />
            <div className=' bg-Dark-blue w-full  rounded-lg h-4/5 p-3 flex flex-col justify-between drop-shadow shadow z-30 cursor-pointer hover:bg-Desaturated-blue transition-all large:p-5'>
                <div className='head flex w-full justify-between  items-center py-1 '>
                    <h4 className='text-ms font-lg text-[#fff] large:text-[22px]'>{datas.title}</h4>
                    <img src={menu} className='cursor-pointer text-[1.5rem] text-[#fff] hover:scale-75 transition-all' />
                </div>
                {/* <h2 className='text-[2.5rem] font-ms pl-2 text-[#fff]'>{datas.timeframes.weekly.current}hrs</h2> */}
                <div className='Mobile:flex Mobile:justify-between Mobile:items-center py-1'>
                    <h2 className='text-[2.5rem] font-ms text-[#fff] large:text-[3rem]'>{datas.timeframes[`${time}`].current}hrs</h2>
                    <p className='text-[12px] capitalize Mobile:text-[14px] large:text-[16px]'>last week - {datas.timeframes[`${time}`].previous}hrs </p>
                </div>

            </div>
        </div >
    )
}

export default Card
