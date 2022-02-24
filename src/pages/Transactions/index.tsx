import { History } from '../../components';

import { Container } from './styles';

export function Transactions() {
    return (
        <Container>
            <History transactionsLenght={Transactions.length} />
        </Container>
    )
}
