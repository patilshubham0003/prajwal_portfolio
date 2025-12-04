import React from 'react'
import pyImg from "../assets/python-ar21.svg"
import numpy from "../assets/NumPy_logo_2020.svg"
import scikit from "../assets/Scikit_learn_logo_small (1).svg"
import mt from "../assets/logo2_compressed.svg"
import pandas from "../assets/Pandas_logo.svg"
import aws from "../assets/amazon_aws-ar21.svg"
import m_excel from "../assets/microsoft-excel_240x90_web.svg"
import power_bi from "../assets/power-bi-vector-logo-2022-cropped.svg"
import sql from "../assets/Sql_data_base_with_logo.svg"
 
export default function Skills() {
  return (
    <>
    <div id="Skills" className=' my-8'>
        <div className='m-5'><h1 className="text-5xl font-bold text-center mb-5 mt-30" >Skill</h1></div>
        <div className='flex flex-wrap justify-center md:grid-cols-4 gap-2 mb-10 mt-15 items-center '>
          <img className="rounded-lg  w-full max-w-xs" src={pyImg} alt="python" />
          <img className="rounded-lg  w-full max-w-xs" src={numpy} alt="numpy" />
          <img className="rounded-lg  w-full max-w-xs" src={scikit} alt="scikit" />
          <img className="rounded-lg  w-full max-w-xs" src={mt} alt="matplotib" />
          <img className="rounded-lg  w-full max-w-xs" src={pandas} alt="pandas" />
          <img className="rounded-lg  w-full max-w-xs" src={aws} alt="aws" />
          <img className="rounded-lg  w-full max-w-xs" src={m_excel} alt="m-excel" />
          <img className="rounded-lg  w-full max-w-xs" src={power_bi} alt="power-bi" />
          <img className="rounded-lg  w-full max-w-xs" src={sql} alt="SQL" />
        </div>
    </div>
    </>
  )
}
