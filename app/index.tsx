import ScreenHeader from '@/components/screenHeader';
import { colors } from '@/utils/colors';
import styled from 'styled-components/native';

const Index = () => {
  return (
    <Container>
      <ScreenHeader
        title="Mission Roulette"
        subTitle="One spin, one action"
        iconName="home"
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundGreen};
`;

export default Index;
