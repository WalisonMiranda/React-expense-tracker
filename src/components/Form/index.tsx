import { useState, FormEvent} from "react";

import { database } from "../../services/firebase";

import { Button } from "../index";

import { FormStyle, FormField } from "./styles";

type ButtonProps = {
  buttonColor: string;
  buttonType: string;
}

type TransactionFormProps = {
  ammount: number;
  description: string;
  date: string;
}

export function Form({ buttonColor, buttonType }: ButtonProps) {
  const [transaction, setTransaction] = useState<TransactionFormProps>({
    ammount: 0,
    description: '',
    date: ''
  });
  const [error, setError] = useState(false);

  const reset = () => {
    setTransaction({
      ammount: 0,
      description: '',
      date: ''
    })
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const transactionRef = database.ref('transactions');

    if(transaction.ammount === 0) {
      setError(true)
      return
    }

    await transactionRef.push(transaction);
    reset();
    setError(false);
  };

  const ErrorText = () => {
    return <p style={{color: 'var(--red'}}>Digite o valor!</p>
  }

  return (
    <FormStyle onSubmit={handleSubmit}>
      {error && <ErrorText />}
      <FormField>
        <label>Valor $</label>
        <input
          type="number"
          required
          value={transaction.ammount}
          onChange={(e) => setTransaction(
            {...transaction, ammount: +e.target.value}
          )}
        />
      </FormField>

      <FormField>
        <label>Descrição</label>
        <input
          onChange={(e) => setTransaction(
            {...transaction, description: e.target.value}
          )}
          type="text"
          value={transaction.description}
        />
      </FormField>

      <FormField>
        <label>Data</label>
        <input
          onChange={(e) => setTransaction(
            {...transaction, date: e.target.value}
          )}
          type="date"
          required
          value={transaction.date}
        />
      </FormField>

      <Button type="submit" background={buttonColor}>
        {buttonType}
      </Button>
    </FormStyle>
  );
}
