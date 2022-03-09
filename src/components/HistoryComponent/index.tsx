import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { formatter } from "../../helpers/numberFormat";

import { database } from "../../services/firebase";

import { Container } from './style';
import lixeira from '../../assets/img/lixeira.png';

type HistoryProps = {
  transactionsLenght: number,
}

export function History({ transactionsLenght }: HistoryProps) {
  const { transactions, user } = useContext(AuthContext);

  const handleDeleteTransaction = async (id: string) => {
    const transactionRef = database.ref(`users/${user?.id}/user_transactions`);

    await transactionRef.child(id).remove();
  }

  return (
    <Container>
      <p>Últimas transações</p>
      <table>
        <thead>
          <tr>
            <th>Valor</th>
            <th>Descrição</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions.slice(transactionsLenght).reverse().map(item => {
              const { id, transaction } = item;
              return (
                <tr key={id}>
                  <td>
                    {formatter(transaction.ammount)}
                  </td>
                  <td>{transaction.description}</td>
                  <td>{transaction.date}</td>
                  <td style={{background: transaction.ammount < 0 ? 'var(--red)' : 'var(--green'}}>
                    <img 
                      onClick={(e: React.MouseEvent<HTMLElement>) => handleDeleteTransaction(id)} 
                      src={lixeira} 
                      alt="excluir"/>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Container>
  );
}
