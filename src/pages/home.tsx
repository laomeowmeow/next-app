// pages/home.tsx
import { Button, Container, Typography } from "@mui/material";
import Router, { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();

  const navigateIndex = () => {
    Router.push("/index");
  };

  return (
    <Container>
      <Typography variant="h4">Welcome to the Home Page!</Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={navigateIndex}
        style={{ margin: "10px" }}
      >Index</Button>
    </Container>
  );
}
