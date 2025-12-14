import { colors } from '@/utils/colors';
import { Ionicons } from '@expo/vector-icons';
import { Shadow } from 'react-native-shadow-2';
import styled from 'styled-components/native';

const ScreenHeader = ({
  title,
  subTitle,
  iconName,
}: {
  title: string;
  subTitle: string;
  iconName: keyof typeof Ionicons.glyphMap;
}) => {
  return (
    <Container>
      <IconSahdow
        distance={8}
        startColor={colors.lightGreen + '20'}
        endColor={colors.lightGreen + '00'}
      >
        <IconConatiner>
          <Ionicons name={iconName} size={32} color={colors.lightGreen} />
        </IconConatiner>
      </IconSahdow>
      <TitleContainer>
        <Title>{title}</Title>
        <SubTitle>{subTitle}</SubTitle>
      </TitleContainer>
    </Container>
  );
};

const Container = styled.View`
  width: 100%;
  padding: 8px 24px;
  flex-direction: row;
  align-items: center;
`;

const IconSahdow = styled(Shadow)`
  border-radius: 16px;
`;

const IconConatiner = styled.View`
  justify-content: center;
  align-items: center;
  padding: 8px;
  border: 1px solid ${colors.lightGreen};
  border-radius: 16px;
`;

const TitleContainer = styled.View`
  flex: 1;
  margin-left: 16px;
  height: 100%;
`;

const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.white};
`;

const SubTitle = styled.Text`
  font-size: 16px;
  color: ${colors.lightGreen};
`;

export default ScreenHeader;
