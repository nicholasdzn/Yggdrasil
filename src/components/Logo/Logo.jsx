import React from 'react'
import LogoTipo from "/yggdrasil.svg"

const Logo = ({ height, width }) => {
    return (
        <img src={LogoTipo} alt="logo" height={height} width={width} />
    )
}

export default Logo