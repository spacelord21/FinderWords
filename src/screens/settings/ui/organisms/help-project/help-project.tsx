import {PopUpWindow} from '@widgets/pop-up-window';
import {QR, Text} from './styles';
import {Separator, styled} from '@shared/ui';
import {Dimensions} from 'react-native';
// import { useClipboard } from "@react-native-clipboard/clipboard";

const QRCode = styled.View`
  width: 200px;
  height: 200px;
  background-color: white;
  justify-content: center;
  align-items: center;
`;

type Props = {
  closeWindow: () => void;
};

const windowSize = Dimensions.get('screen').width - 32;

export const HelpProject = ({closeWindow}: Props) => {
  return (
    <PopUpWindow onClosePressHandler={closeWindow}>
      <Text variant="title">Поддержка</Text>
      <Separator width={windowSize - 8} />
      <Text variant="subtitle">
        Вы можете поддержать проект, чтобы он вышел в Play Market'e и получал
        обновления! :)
      </Text>
      <Separator width={windowSize - 8} />
      <QRCode>
        <QR variant="title">QR</QR>
      </QRCode>
      {/* <Text onPress={onPressCardNumber} variant="subtitle">
        Номер карты: {"\n"} {cardNumber} {"\n Можно нажать, чтобы скопировать"}
      </Text> */}
    </PopUpWindow>
  );
};
