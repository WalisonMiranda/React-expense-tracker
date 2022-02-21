import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { formatter } from "../../helpers/numberFormat";

import { Container } from './style';

export function History() {
  const { transactions } = useContext(AuthContext);

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
            transactions.slice(-6).reverse().map(item => {
              const { id, transaction } = item;
              return (
                <tr key={id}>
                  <td>
                    {formatter(transaction.ammount)}
                  </td>
                  <td>{transaction.description}</td>
                  <td>{transaction.date}</td>
                  <td style={{background: transaction.ammount < 0 ? 'var(--red)' : 'var(--green'}} />
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </Container>
  );
}
