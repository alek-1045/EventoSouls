import { useState, FormEvent } from 'react';
import Modal from 'react-modal';
import closeSVG from '../../assets/close.svg';
import { Container } from './styles';
import api from '../../services/api';
//import knight from '../../assets/knight.svg';
// import solaire from '../../assets/solaire.svg';


interface NewModelProps {
    isOpen: boolean;
    onRequestClose: () => void;
}

export function NewModel({ isOpen, onRequestClose }: NewModelProps) {

    const [nomeevento, setNomeevento] = useState('')
    const [local, setLocal] = useState('')
    const [diasemana, setDiasemana] = useState ('')
    const [horario, setHorario] = useState(0)
    

    async function handleCreateNewEvents(event: FormEvent){
        event.preventDefault();
        const data = {
            nomeevento, 
            local,
            diasemana,
            horario,
        } 

        await api.post('/events', data);

        setNomeevento('')
        setLocal('')
        setDiasemana('')
        setHorario(0)

        alert('Cadastrado')
    }


    return(
            <Modal isOpen={isOpen}
                onRequestClose={onRequestClose}
                overlayClassName="react-modal-overlay"
                className="react-modal-content"
                >
                    <button type="button" onClick={onRequestClose} className="react-modal-close">
                        <img src={closeSVG} alt="Fechar modal" />
                    </button>
                    
                <Container onSubmit={handleCreateNewEvents}>
                <h2>Cadastrar Alma</h2> 
                
                {/* {<img src={knight}/>} */}

                <input type="text" placeholder="Nome Do Evento"
                    value={nomeevento}
                    onChange={event => setNomeevento (event.target.value)}
                />

                
                <input type="text" 
                    placeholder="Local"
                    value={local}
                    onChange={event => setLocal(event.target.value)}
                />

                <input type="text" 
                    placeholder="Dia da Semana"
                    value={diasemana}
                    onChange={event => setDiasemana (event.target.value)}
                />

                <input type="text" 
                    placeholder="Horário da Reserva"
                    value={horario}
                    onChange={event => setHorario(Number(event.target.value))}
                />
                
                <button type="submit"> Criar Evento </button>
            </Container>
    </Modal>
    )
}