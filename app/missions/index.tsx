import ScreenHeader from '@/components/Screenheader';
import { colors } from '@/utils/colors';
import styled from 'styled-components/native';

const Missions = () => {
  return (
    <Container>
      <ScreenHeader
        title="Missions List"
        subTitle="Your challenges, ready to spin"
        iconName="list"
      />
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundGreen};
`;

export default Missions;
