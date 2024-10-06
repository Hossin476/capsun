import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
} from "@mui/material";

const teamMembers = [
  {
    name: "Lahoucine Shail",
    role: "Software Developer",
    image: "/lahoucine.jpeg",
  },
  {
    name: "RAWAE TARNOUCHI",
    role: "Team Owner, Story Telling, Hardware",
    image: "/rawae.jpeg",
  },
  {
    name: "ELYASS HAFIDI",
    role: "Full stack Developer",
    image: "/elyass.jpeg",
  },
  {
    name: "IDRISS EL HOUARI",
    role: "Coder, Web Developer",
    image: "/idriss.jpeg",
  },
  {
    name: "HAYTHAM ABDI",
    role: "Designer",
    image: "/haytham.jpeg",
  },
];

export default function Team() {
  return (
    <Container
      maxWidth="lg"
      sx={{ py: 18 }}
      className="flex flex-col items-center justify-center font-inter"
      id="team"
    >
      <Typography
        variant="h2"
        component="h2"
        align="center"
        gutterBottom
        className="text-white pb-12"
      >
        Our Team
      </Typography>
      <Grid container spacing={4} className="flex items-center justify-center">
        {teamMembers.map((member, index) => (
          <Grid item key={index} xs={9} sm={6} md={4}>
            <Card
              sx={{ height: "100%", display: "flex", flexDirection: "column" }}
            >
              <CardMedia
                component="img"
                image={member.image}
                alt={member.name}
                sx={{
                  aspectRatio: "1 / 1",
                  objectFit: "cover",
                }}
              />
              <CardContent sx={{ flexGrow: 1 }} className="grid justify-center">
                <Typography variant="h5" component="h3">
                  {member.name}
                </Typography>
                <Typography
                  variant="subtitle1"
                  color="text.secondary"
                  className="w-full flex justify-center"
                >
                  {member.role}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
