import * as Dialog from '@radix-ui/react-dialog';
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react';
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from './style';

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />

      <Content>
        <Dialog.Title>New transaction</Dialog.Title>

        <CloseButton>
          <X size={24}/>
        </CloseButton>

        <form action="">
          <input type='text' placeholder='Description' required />
          <input type='number' placeholder='Price' required />
          <input type='text' placeholder='Category' required />

          <TransactionType>

            <TransactionTypeButton variant='income' value='income'>
              <ArrowCircleUp size={24}/>
              Deposit
            </TransactionTypeButton>

            <TransactionTypeButton variant='outcome' value='outcome'>
              <ArrowCircleDown size={24}/>
              Withdraw
            </TransactionTypeButton>
          </TransactionType>

          <button type='submit'>
            Registry
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}