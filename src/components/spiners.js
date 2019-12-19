import React from 'react'
import { Alias } from '../importer';
const { Spiner } = Alias.pathToComponents('loader');

export const DualRingLoadScreen = ({ text }) => (
  <Spiner text={text} fullScreen={true} type="dual-ring" size={150}/>
);
export const DualRingLoad = () => (
  <Spiner pos="relative" type="dual-ring" t="-5px" l="16px" mh="35px" size={30}/>
);
export const RingLoadScreen = ({ text }) => (
  <Spiner text={text} fullScreen={true} type="ring" size={150}/>
);
export const RingLoad = () => (
  <Spiner pos="relative" type="ring" t="-5px" l="16px" mh="35px" size={30}/>
);
export const DefaultLoadScreen = ({ text }) => (
  <Spiner text={text} fullScreen={true} size={150}/>
);
export const DefaultLoad = () => (
  <Spiner pos="relative" t="-5px" l="16px" mh="35px" size={30}/>
);
export const EllipsisLoadScreen = ({ text }) => (
  <Spiner text={text} fullScreen={true} type="ellipsis" size={150}/>
);
export const EllipsisLoad = () => (
  <Spiner pos="relative" type="ellipsis" t="-5px" l="16px" mh="35px" size={30}/>
);
export const RollerLoadScreen = ({ text }) => (
  <Spiner text={text} fullScreen={true} type="roller" size={150}/>
);
export const RollerLoad = () => (
  <Spiner pos="relative" type="roller" t="-5px" l="16px" mh="35px" size={30}/>
);