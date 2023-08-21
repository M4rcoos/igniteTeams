import { useNavigation } from "@react-navigation/native";
import { Container, Logo, BackButton, BackIncon } from "./styles";

import logoImg from "@assets/logoHeader.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  const navigation = useNavigation();
  return (
    <Container>
      {showBackButton && (
        <BackButton onPress={() => navigation.goBack()}>
          <BackIncon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
