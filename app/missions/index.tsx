import ScreenHeader from '@/components/screenHeader';
import { colors } from '@/utils/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import styled from 'styled-components/native';

const Missions = () => {
  const router = useRouter();

  return (
    <Container>
      <ScreenHeader
        title="Missions List"
        subTitle="Your challenges, ready to spin"
        iconName="list"
      />
      <Body>
        <AddNewListButton
          onPress={() => {
            router.push('/missions/createNewList');
          }}
        >
          <Ionicons name="add-circle" size={24} color={colors.lightGray} />
          <AddButtonText>CREATE NEW LIST</AddButtonText>
        </AddNewListButton>
      </Body>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundGreen};
`;

const Body = styled.View`
  flex: 1;
  padding: 16px;
`;

const AddNewListButton = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.lightGray};
  padding: 16px 0;
  border-radius: 8px;
`;

const AddButtonText = styled.Text`
  color: ${colors.lightGray};
  margin-left: 12px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export default Missions;
