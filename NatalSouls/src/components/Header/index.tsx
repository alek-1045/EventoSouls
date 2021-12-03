import darklogo from '../../assets/dark-logo.svg';
import { Container, Content } from './styles'

interface HeaderProps {
  onOpenNewModal: () => void;
}

export function Header({ onOpenNewModal }: HeaderProps) {
    return(
      <>
        <Container>
            <Content>
              <img src={darklogo} alt="Dark Souls e Amor" />
                Dark Souls Remastered 
                venha fazer sua pré-venda de Natal aqui,
                partir de $100.
              <button type="button" onClick={onOpenNewModal}>
                Nova Alma
              </button>
            </Content>
        </Container>
      </>
    )
}

