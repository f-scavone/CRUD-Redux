import {
    MOSTRAR_ALERTA,
    OCULTAR_ALERTA
} from '../types'

//mostrar alerta

export function mostrarAlerta(alerta) {
    return (dispath) => {
        dispath(crearAlerta(alerta))
    }
}

const crearAlerta = alerta => ({
    type: MOSTRAR_ALERTA,
    payload: alerta
})


export function ocultarAlertaAction() {
    return (dispath) => {
        dispath(ocultarAlerta())
    }
}


const ocultarAlerta = () => ({
    type: OCULTAR_ALERTA
})