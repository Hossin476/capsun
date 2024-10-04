import React from 'react'
import { Grid, Card, CardContent, CardMedia, Typography, Container } from '@mui/material'

const teamMembers = [
    {
        name: "test",
        role: "test",
        image: "/user.jpeg"
    },
    {
        name: "test",
        role: "test",
        image: "/user.jpeg"
    },
    {
        name: "test",
        role: "test",
        image: "/user.jpeg"
    },
    {
        name: "test",
        role: "test",
        image: "/user.jpeg"
    },
    {
        name: "test",
        role: "test",
        image: "/user.jpeg"
    }
]

export default function Team() {
    return (
        <Container maxWidth="lg" sx={{ py: 18 }} className='flex flex-col items-center justify-center font-inter' id='team'>
            <Typography variant="h2" component="h2" align="center" gutterBottom className='text-white pb-12'>
                Our Team
            </Typography>
            <Grid container spacing={4} className='flex items-center justify-center'>
                {teamMembers.map((member, index) => (
                    <Grid item key={index} xs={9} sm={6} md={2}>
                        <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                            <CardMedia
                                component="img"
                                image={member.image}
                                alt={member.name}
                                sx={{
                                    aspectRatio: '1 / 1',
                                    objectFit: 'cover',
                                }}
                            />
                            <CardContent sx={{ flexGrow: 1 }}>
                                <Typography gutterBottom variant="h5" component="h3">
                                    {member.name}
                                </Typography>
                                <Typography variant="subtitle1" color="text.secondary">
                                    {member.role}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    )
}