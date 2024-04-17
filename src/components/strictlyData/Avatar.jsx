import React from 'react'

export const Avatar = (param) => {
  console.log(param, "yellow")
  return (
    <div className={'App__Avatar' + (param.object.cl)} ><img className={'App__AvatarImage' + (param.object.cl) + " " + "App__AvatarImage"}
     src='https://www.symbols.com/images/symbol/2201_red-color.png' />
     <li className='App__AvatarName' >{param.object.organismPublicName}</li></div>
  )
}
