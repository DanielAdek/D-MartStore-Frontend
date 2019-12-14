import React, { Fragment } from 'react'
import { Ring, Default, Roller, DualRing, Ellipsis } from "react-awesome-spinners";
import * as Spin from '../assets/styles/loader';

export const Spiner = ({ type, size }) => {
  const Loader = type === "ring" ? <Ring size={size}/> : type === "dual-ring" ? <DualRing size={size}/> : type === "roller" ? <Roller size={size}/> : type === "ellipsis" ? <Ellipsis size={size}/> : <Default size={size}/> ;
  return (
    <Fragment>
      <Spin.UnderLay />
      <Spin.Loader>
        {Loader}
      </Spin.Loader>
    </Fragment>
  )
}