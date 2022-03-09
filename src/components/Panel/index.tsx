import { useContext, useEffect, useState } from 'react';

import { Form } from '../index';

import { Container } from './styles';

import { AuthContext } from '../../contexts/AuthContext';

import { formatter } from '../../helpers/numberFormat';

export function Panel() {
    const [balance, setBalance] = useState<string>('0,00');
    const { transactions } = useContext(AuthContext);

    useEffect(() => {
        let totalBalance = transactions.map(item => {
            return item;
        }).reduce((acc, value) => {
            return acc + value.transaction.ammount;
        }, 0);

        setBalance(formatter(totalBalance).toString());
    }, [transactions]);

    return (
        <Container>
            <Container.Balance>
                <p>Balanço</p>
                <p>{balance}</p>
            </Container.Balance>
            <Container.FormsContainer>
                <Form buttonColor="var(--green)" buttonType="Adicionar" />
                {/* <Form buttonColor="var(--red)" buttonType="Retirar" /> */}
            </Container.FormsContainer>
        </Container>
    )
}
