import { Box, Container } from "@chakra-ui/react";
import { FC } from "react";

export const AppHeader: FC = ({ children }) => {
  return (
    <Box py="4" borderBottomWidth="1px" borderColor="gray.200">
      <Container>{children}</Container>
    </Box>
  );
};
