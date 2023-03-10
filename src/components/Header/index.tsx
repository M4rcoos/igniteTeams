import { Container, Logo, BackButton, BackIncon } from "./styles";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <Container>
      {showBackButton && (
        <BackButton>
          <BackIncon />
        </BackButton>
      )}
      <Logo source={logoImg} />
    </Container>
  );
}
