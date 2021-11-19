import React, { useState } from 'react'
import Header from '@components/Structure/Header'
import Container from '@components/Container'
import NodeList from '@components/UI/NodeList'

import './Tips.scss'

const Tips = () => {

    const [tips] = useState([
        {text: "Aprende lo que necesitas (empápate de este mundo, saca lo mejor de tí mirando y practicando constantemente)."},
        {text: "Aprende a dividir el problema en piezas pequeñas."},
        {text: "Aprende a ir un paso después del otro, puedes llegar al Everest, si das los pasos en el momento indicado."}
    ])
    
    return (
        <>
            <Header>
                <h1>Consejos para ser un buen programador</h1>
            </Header>
            <Container>
                <NodeList data={tips} />
            </Container>
        </>
    )
}

export default Tips
