import { useEffect, useState } from "react";
import api from "../../services/api";
import { Container } from "./styles";


interface IEvents {
    id: string;
    nomeevento: string;
    diasemana: string;
    local: string;
    horario: number;
    like: number;
    dislike: number;
    
    //type: string;
    created_at: string;
}

export function EnvetsTable() {
    const [Events, setEvents] = useState<IEvents[]>([])
    useEffect(() => {
        api.get('events')
        .then(response => setEvents(response.data))
    }, [])

    async function deletar(id : string) {
        await api.delete <IEvents>(`/events/${id}`)

    }

    return(

        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Nome do evento</th>
                        <th>Local</th>
                        <th>Dia Da semana</th>
                        <th>Data do Registro</th>
                    </tr>
                </thead>

                <tbody>
                    {Events.map(Events => (
                        <>
                        <tr>
                            <td>{Events.nomeevento}</td>
                            <td>{Events.local}</td>
                            <td>{Events.diasemana}</td>
                            <td>{Events.horario}</td>
                            <td>{Events.created_at}</td>
                            <button onClick={ () => deletar(Events.id)}>
                            Deletar
                            </button>
                        </tr>

                        <li>
                            <h1>Like</h1>
                            <button onClick={(async () => {
                            await api.post(`/events/like/${Events.id}`)
                            api.get('/events').then( m => {setEvents(m.data)})
                        })}>
                            Gostei
                            </button>
                            <span>{Events.like}</span>

                            <h2>Deslike</h2>
                            <button onClick={(async () => {
                            await api.post(`/events/dislike/${Events.id}`)
                            api.get('/events').then( m => {setEvents(m.data)})
                        })}>
                            Não Gostei
                            </button>
                            <span>{Events.dislike}</span>
                        </li>
                    </>
                    ))}
                </tbody>                
            </table>
        </Container>
    )
}