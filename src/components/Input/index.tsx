import { TextInputProps } from "react-native";
import { useTheme } from "styled-components/native";

import { Container } from "./styles";
import { useState } from "react";

interface User {
  id: string;
  name: string;
}

export function Input({ ...rest }: TextInputProps) {
  const { COLORS } = useTheme();

  const [users, setUsers] = useState<User[]>([]);
  const [teamSize, setTeamSize] = useState("");
  const [teams, setTeams] = useState<string[][]>([]);

  console.log(users);

  const handleAddUser = (name: string) => {
    const newUser: User = { id: String(users.length + 1), name };
    setUsers([...users, newUser]);
  };

  return (
    <Container
      placeholderTextColor={COLORS.GRAY_300}
      {...rest}
      onChangeText={() => setUsers}
    />
  );
}
