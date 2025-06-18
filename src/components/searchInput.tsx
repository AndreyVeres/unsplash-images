import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../assets/search.icon';

type Props = {
  onChange: (value: string) => void;

  delay?: number;
};

export const SearchInput = ({ onChange, delay = 500 }: Props) => {
  const [value, setValue] = useState('');
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  useEffect(() => {
    onChange(debouncedValue);
  }, [debouncedValue, onChange]);

  return (
    <StyledInputWrapper>
      <StyledInputContainer>
        <StyledInput value={value} onChange={e => setValue(e.target.value)} name='search' placeholder='Поиск' />
        <SearchIcon color='#000' />
      </StyledInputContainer>
    </StyledInputWrapper>
  );
};

const StyledInput = styled.input`
  border: none;
  padding: 21px;
  width: 100%;

  &::before {
    content: 'asdsd';
  }
`;

const StyledInputContainer = styled.div`
  position: relative;
  margin: 0 10px;
  width: 100%;
  max-width: 866px;

  svg {
    position: absolute;
    right: 2%;
    top: 30%;
  }
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
