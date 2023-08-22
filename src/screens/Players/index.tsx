import React, { View, TouchableWithoutFeedback, Keyboard } from "react-native";

import { useRef, useState } from "react";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Groups } from "@screens/Groups";
import { useUserContext } from "@contexts/UserContext";

export function Players() {
  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null);

  const handleScreenTouch = () => {
    Keyboard.dismiss();
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
  };

  const { addUser } = useUserContext();
  const [name, setName] = useState("");

  const handleAddUser = () => {
    console.log("entrei");
    if (name.trim() !== "") {
      addUser(name);
      setName(""); // Limpar o valor após adicionar o usuário
    }

    console.log(">>>", name);
  };

  return (
    <Container>
      <TouchableWithoutFeedback onPress={handleScreenTouch}>
        <KeyboardAwareScrollView
          ref={(ref) => (scrollViewRef.current = ref)}
          keyboardShouldPersistTaps="handled"
        >
          <Header showBackButton />
          <Highlight
            title="Nome da turma"
            subtitle="Adicione as galera para sortear as equipes"
          />
          <Form>
            <Input
              placeholder="nome da pessoa"
              autoCorrect={false}
              value={name}
              onChangeText={setName}
            />
            <ButtonIcon icon="add" onPress={handleAddUser} />
          </Form>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
