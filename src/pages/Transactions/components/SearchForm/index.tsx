import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./style";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <input type='text' placeholder='Search for transactions' />

      <button type='submit'>
        <MagnifyingGlass size={20} />
        Search
      </button>
    </SearchFormContainer>
  )
}