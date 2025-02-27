// pages/index.tsx
import { Button, Container, Typography } from "@mui/material";
import { useRouter } from "next/router";

export default function IndexPage() {
  const router = useRouter();

  const navigateHomePage = () => {
    router.push("/home");
  };

  return (
    <Container>
      <Typography variant="h4">Welcome to the Custom Index Page!</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={navigateHomePage}
        style={{ margin: "10px" }}
      >
        Go to Home Page
      </Button>
    </Container>
  );
}
