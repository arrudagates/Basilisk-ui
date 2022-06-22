import { Icon } from '../Icon/Icon';
import { Text } from '../Text/Text';
import { TextKind } from '../Text/TextTheme';
import styled from '@emotion/styled/macro';

export interface ErrorMessageProps {
  text: string;
}

const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 23px 12px 12px;
  gap: 5px;

  background: rgba(255, 104, 104, 0.3);
  border-radius: 8px;
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3px 10px;
  gap: 10px;

  width: 41.85px;
  height: 25.61px;
`;

export const ErrorMessage = ({ text }: ErrorMessageProps) => {
  return (
    <>
      <Content>
        <IconContainer>
          <Icon name={'Error'} />
        </IconContainer>
        <Text id={text} kind={TextKind.TextError} />
      </Content>
    </>
  );
};
