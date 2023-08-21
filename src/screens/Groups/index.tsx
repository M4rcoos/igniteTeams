import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GrupCard";
import { Button } from "@components/Button";

import { ListEmpty } from "@components/ListEmpty/ListEmpty";
import { useNavigation } from "@react-navigation/native";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);
  const { navigate } = useNavigation();

  const handleNewGroup = () => {
    navigate("players");
  };

  return (
    <Container>
      <Header />

      <Highlight title="Times" subtitle="Jogue com seus amigos" />

      <FlatList
        data={groups}
        //declarando uma chave unica para renderizar a lista
        keyExtractor={(item) => item}
        //declarando a renderização da lista
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal adicionar as pessoas para realizar o sorteio?" />
        )}
      />

      <Button title="Adicionar jogadores" onPress={handleNewGroup} />
    </Container>
  );
}
