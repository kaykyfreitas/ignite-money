import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./style";

export function Summary() {
  return (
    <SummaryContainer>

      <SummaryCard>
        <header>
          <span>Deposit</span>
          <ArrowCircleUp size={32} color='#00B37E' />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard>
        <header>
          <span>Withdraw</span>
          <ArrowCircleDown size={32} color='#F75A68' />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>

      <SummaryCard variant='green'>
        <header>
          <span>Total</span>
          <CurrencyDollar size={32} color='#FFFFFF' />
        </header>
        <strong>R$ 17.400,00</strong>
      </SummaryCard>
    </SummaryContainer>
  );
}