import React, { Fragment } from 'react'
import { Ring, Default, Roller, DualRing, Ellipsis } from "react-awesome-spinners";
import * as Spin from '../assets/styles/loader';

export const Spiner = ({ type, size, pos, t, l, mh, fullScreen, loadingText}) => {
  console.log(loadingText);
  const Loader = type === "ring" ? <Ring size={size}/> : type === "dual-ring" ? <DualRing size={size}/> : type === "roller" ? <Roller size={size}/> : type === "ellipsis" ? <Ellipsis size={size}/> : <Default size={size}/> ;
  return (
    <Fragment>
      {fullScreen && <Spin.UnderLay /> }
      <Spin.Loader t={t} l={l} mh={mh} pos={pos}>
        {Loader}
        {loadingText && <Spin.LoaderTextCont>
          <Spin.LoaderText>Please Wait..</Spin.LoaderText>
        </Spin.LoaderTextCont>}
      </Spin.Loader>
    </Fragment>
  )
}