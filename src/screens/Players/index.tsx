import React, { View, TouchableWithoutFeedback, Keyboard } from "react-native";

import { useRef } from "react";
import { Header } from "@components/Header";
import { ButtonIcon } from "@components/ButtonIcon";
import { Container, Form } from "./styles";
import { Highlight } from "@components/Highlight";
import { Input } from "@components/Input";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Groups } from "@screens/Groups";

export function Players() {
  const scrollViewRef = useRef<KeyboardAwareScrollView | null>(null);

  const handleScreenTouch = () => {
    Keyboard.dismiss();
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd();
    }
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
            <Input placeholder="nome da pessoa" autoCorrect={false} />
            <ButtonIcon icon="add" />
          </Form>
        </KeyboardAwareScrollView>
      </TouchableWithoutFeedback>
    </Container>
  );
}
