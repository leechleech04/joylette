import { colors } from '@/utils/colors';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import styled from 'styled-components/native';

const CreateNewList = () => {
  const router = useRouter();

  const [title, setTitle] = useState<string>('');
  const [missions, setMissions] = useState<string[]>(['']);

  return (
    <Container>
      <Header>
        <GoBackButton onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={28} color={colors.white} />
        </GoBackButton>
        <Title>CREATE NEW LIST</Title>
      </Header>
      <Body>
        <TitleInputContainer>
          <InputLabel>LIST TITLE</InputLabel>
          <TitleInput
            placeholder="e.g. push-ups 20 reps"
            placeholderTextColor={colors.placeholderGreen}
            value={title}
            onChangeText={(text: string) => setTitle(text)}
          />
        </TitleInputContainer>
        <MissionParametersContainer>
          <InputLabel>MISSION PARAMETERS</InputLabel>
          {missions.map((mission: string, index: number) => (
            <MissionInputContainer key={index}>
              <MissionIndexContainer>
                <MissionIndexText>{index + 1}</MissionIndexText>
              </MissionIndexContainer>
              <MissionInput
                placeholder="Add next mission..."
                placeholderTextColor={colors.placeholderGreen}
                value={mission}
                onChangeText={(text: string) => {
                  const updatedMissions = [...missions];
                  updatedMissions[index] = text;
                  setMissions(updatedMissions);
                }}
              />
              <DeleteMissionButton
                onPress={() => {
                  const updatedMissions = missions.filter(
                    (_, i) => i !== index
                  );
                  setMissions(updatedMissions);
                }}
              >
                <Ionicons name="trash" size={24} color={colors.lightGray} />
              </DeleteMissionButton>
            </MissionInputContainer>
          ))}
          <AddMissionButton
            onPress={() => {
              setMissions([...missions, '']);
            }}
          >
            <Ionicons name="add-circle" size={24} color={colors.lightGreen} />
            <AddButtonText>ADD MISSION</AddButtonText>
          </AddMissionButton>
        </MissionParametersContainer>
      </Body>
      <CreateListButton>
        <CreateListButtonText>CREATE LIST</CreateListButtonText>
        <Ionicons
          name="rocket"
          size={24}
          color={colors.black}
          style={{ marginLeft: 12 }}
        />
      </CreateListButton>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: ${colors.backgroundGreen};
`;

const Header = styled.View`
  width: 100%;
  padding: 8px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const GoBackButton = styled.Pressable`
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 16px;
`;

const Title = styled.Text`
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${colors.white};
  text-align: center;
`;

const Body = styled.ScrollView`
  flex: 1;
  padding: 16px;
`;

const TitleInputContainer = styled.View`
  width: 100%;
  margin-top: 16px;
`;

const InputLabel = styled.Text`
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: bold;
  color: ${colors.lightGreen};
  margin-left: 4px;
`;

const TitleInput = styled.TextInput`
  width: 100%;
  margin-top: 8px;
  padding: 12px 20px;
  border: 1px solid ${colors.tabBarBorder};
  background-color: ${colors.tabBarBackground};
  border-radius: 8px;
  color: ${colors.white};
  font-size: 20px;
`;

const MissionParametersContainer = styled.View`
  width: 100%;
  margin-top: 32px;
`;

const MissionInputContainer = styled.View`
  width: 100%;
  margin-top: 16px;
  flex-direction: row;
  align-items: center;
`;

const MissionIndexContainer = styled.View`
  width: 32px;
  height: 32px;
  border-radius: 16px;
  background-color: ${colors.green};
  justify-content: center;
  align-items: center;
`;

const MissionIndexText = styled.Text`
  color: ${colors.lightGreen};
  font-size: 16px;
  font-weight: bold;
`;

const MissionInput = styled.TextInput`
  flex: 1;
  margin-left: 12px;
  border: 1px solid ${colors.tabBarBorder};
  background-color: ${colors.tabBarBackground};
  border-radius: 8px;
  color: ${colors.white};
  font-size: 16px;
  padding: 12px 16px;
`;

const DeleteMissionButton = styled.Pressable`
  margin-left: 20px;
  margin-right: 8px;
`;

const AddMissionButton = styled.Pressable`
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px dashed ${colors.lightGreen};
  padding: 16px 0;
  border-radius: 8px;
  margin: 32px 0;
`;

const AddButtonText = styled.Text`
  color: ${colors.lightGreen};
  margin-left: 12px;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const CreateListButton = styled.Pressable`
  margin: 0 16px 16px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 16px 0;
  border-radius: 8px;
  background-color: ${colors.lightGreen};
`;

const CreateListButtonText = styled.Text`
  color: ${colors.black};
  font-size: 20px;
  letter-spacing: 1px;
  font-weight: bold;
`;

export default CreateNewList;
