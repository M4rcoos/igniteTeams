import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione as galera e separe as equipes"
      />
      <Form>
        <Input placeholder="nome da pessoa" autoCorrect={false} />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
