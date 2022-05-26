import styled from '@emotion/styled/macro';
import { useState } from 'react';

export interface ToggleProps {
  toogled?: boolean;
  disabled?: boolean;
}

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Input = styled.input`
  border-style: none;
`;

const Button = styled.button<{ checked: boolean }>`
  display: inline-flex;
  position: relative;
  padding: 4px 0;
  background: ${(props) => (props.checked ? '#1d2d26' : 'rgba(0, 0, 0, 0.25)')};
  width: 70px;
  border-radius: 9999px;
  border-width: 0px;
`;

const Span = styled.div<{ checked: boolean }>`
  width: 30px;
  height: 30px;
  border-radius: 100%;
  background: ${(props) => (props.checked ? '#49e49f' : '#A2B0B8')};

  transition-duration: 300ms;
  transform: translate(${(props) => (props.checked ? '36px' : '4px')});

  ${Button}:hover & {
    border: 2px solid #8affcb;
  }
`;

export const Toggle = ({ toogled = false, disabled = false }: ToggleProps) => {
  const [checked, setChecked] = useState(toogled);

  return (
    <ToggleContainer>
      <Input type="hidden" />
      <Button
        onClick={() => setChecked(!checked)}
        disabled={disabled}
        checked={checked}
        type="button"
        role="switch"
      >
        <Span checked={checked} aria-hidden="true" />
      </Button>
    </ToggleContainer>
  );
};
