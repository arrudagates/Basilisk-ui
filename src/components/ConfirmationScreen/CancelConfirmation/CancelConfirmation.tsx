import styled from '@emotion/styled/macro';
import { Button, ButtonKind } from '../Button/Button';
import { Text } from '../Text/Text';
import { TextKind } from '../Text/TextTheme';

export interface CancelConfirmationProps {
  onBack: () => void;
  onCancel: () => void;
}

const ModalContainer = styled.div`
  width: 460px;
  height: 460px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #211f24;
  box-shadow: 0px 38px 46px rgba(0, 0, 0, 0.03);
  border-radius: 16px;
  padding: 30px;
`;

const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const TextWrapper = styled.div`
  padding: 2px 30px 40px 30px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const CancelConfirmation = ({
  onBack,
  onCancel,
}: CancelConfirmationProps) => {
  return (
    <ModalContainer>
      <Text
        id={'cancelTransaction'}
        defaultMessage={'Cancel Transaction'}
        kind={TextKind.Title}
      />
      <TextWrapper>
        <Text
          id={'cancelationMessage1'}
          defaultMessage={'Are you sure you want to cancel?'}
          kind={TextKind.Text}
        />
        <Text
          id={'cancelationMessage2'}
          defaultMessage={'All of the progress will be lost.'}
          kind={TextKind.Text}
        />
      </TextWrapper>
      <ButtonGroup>
        <Button
          text={{
            id: 'back',
            defaultMessage: 'Back',
          }}
          onClick={() => onBack()}
          kind={ButtonKind.Secondary}
        />
        <Button
          text={{
            id: 'cancelTransaction',
            defaultMessage: 'Yes, Cancel',
          }}
          onClick={() => onCancel()}
          kind={ButtonKind.Primary}
        />
      </ButtonGroup>
    </ModalContainer>
  );
};
