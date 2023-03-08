import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GrupCard";
import { Button } from "@components/Button";

import { ListEmpty } from "@components/ListEmpty/ListEmpty";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container>
      <Header />

      <Highlight title="Turmas" subtitle="Jogue com a sua turma" />

      <FlatList
        data={groups}
        //declarando uma chave unica para renderizar a lista
        keyExtractor={(item) => item}
        //declarando a renderização da lista
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Que tal cadastrar a primeira turma?" />
        )}
      />

      <Button title="Criar uma nova turma" />
    </Container>
  );
}
