import { useState } from "react";
import { FlatList } from "react-native";

import { Container } from "./styles";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GrupCard";

export function Groups() {
  const [groups, setGroups] = useState<string[]>([
    "Galera da rocket",
    "Timeware",
  ]);

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
      />
    </Container>
  );
}
