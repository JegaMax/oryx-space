import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, CardActionArea, Card, CardMedia, CardContent, Container } from "@mui/material";
import { alMlDataEngineeringServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function ALMLDataEngineeringSection({ param }) {
    const selectedService = alMlDataEngineeringServices.find((item) => item['id'] === param);

    const otherSections = alMlDataEngineeringServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));
    const main = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        padding: "2rem",
        background: `linear-gradient(
                rgba(255, 255, 255, 0.849),
                rgba(255, 201, 201, 0.664)
              ), url(${require(`../../assets/img/service/${selectedService.image}`)}) center / cover no-repeat`,
    }

    const cardStyle = {
        p: 2,
        my: 2,
        borderRadius: 3,
        backgroundColor: '#f5f5f5',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        transition: 'all 0.3s !important',
        minHeight: '20rem'
    };

    return (
        <>
            <Grid>
                <Box sx={main}>
                    <Box sx={{ p: { xs: 5, sm: 3, lg: 5, width: '60%' } }}>
                        <Typography
                            color="secondary.dark"
                            sx={{
                                fontWeight: "bold",
                                textAlign: { xs: "center", sm: "left" },
                                fontSize: { xs: "1em", sm: "1.5em", lg: "2em" },
                            }}
                        >
                            {serviceDescriptions.aiMlDataEngineering}
                        </Typography>
                    </Box>

                </Box>
            </Grid>
            <NavigationTabs navigationLinks={otherSections} />
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1.5rem",
                    textAlign: "center",
                    p: 3
                }}
            >
                <Typography sx={{ fontWeight: "bold" }} variant="h3">
                    {selectedService.title}
                </Typography>
                <Typography variant="subtitle1">
                    {selectedService.desc}
                </Typography>
                <Container sx={{ py: 8 }} maxWidth="lg">
                    <Grid container spacing={4} >
                        {selectedService.categories.map((category, index) => (
                            <Grid item xs={12} md={6}>
                                <CardActionArea>
                                    <Card sx={{ display: 'flex' }}>
                                        <CardContent sx={{ flex: 1 }}>
                                            <Typography component="h2" variant="h5">
                                                {category.title}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph sx={{textAlign:'left'}}>
                                                {category.desc}
                                            </Typography>
                                        </CardContent>
                                        <CardMedia
                                            component="img"
                                            sx={{ width: 160, display: { xs: 'none', sm: 'block' } }}
                                            image={require('../../assets/img/service/' + category.image)}
                                            alt={category.title}
                                        />
                                    </Card>
                                </CardActionArea>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>
        </>
    );
}

export default ALMLDataEngineeringSection;