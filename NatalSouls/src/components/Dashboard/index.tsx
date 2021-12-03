import React from 'react';
import { Summary } from '../Summary';
import { Container } from './styles';
import { EnvetsTable } from '../EventsTable';

export function Dashboard() {
    return(
        <Container>
            <Summary />
            <EnvetsTable/>
        </Container>
    )
}