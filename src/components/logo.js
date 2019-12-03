import React from 'react';

import * as RC from '../assets/styles/logo';

export default () => {
  return (
    <RC.LogoCover>
      <RC.LogoImg src={require('../assets/images/logo.png')} alt="Logo"/>
    </RC.LogoCover>
  )
}