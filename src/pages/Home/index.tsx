import { Panel, History } from '../../components';

import { Container } from './styles.js';

export function Home() {
    return (
        <Container>
            <Panel />
            <History transactionsLenght={-6} />
        </Container>
    )
}
