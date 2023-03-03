import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, CardActionArea, Card, CardMedia, CardContent, Container } from "@mui/material";
import { alMlDataEngineeringServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
import ServiceHeader from './ServiceHeader';
function ALMLDataEngineeringSection({ param }) {
    const selectedService = alMlDataEngineeringServices.find((item) => item['id'] === param);

    const otherSections = alMlDataEngineeringServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));


    return (
        <>
            <ServiceHeader description={serviceDescriptions.aiMlDataEngineering} image={selectedService.image} />
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
                <Box textAlign={'center'} mt={4}>
                    <Typography sx={{ fontWeight: "bold" }} variant="h3">
                        {selectedService.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {selectedService.desc}
                    </Typography>
                </Box>
                <Container sx={{ py: 6 }} maxWidth="lg">
                    <Grid container spacing={4} >
                        {selectedService.categories.map((category, index) => (
                            <Grid item xs={12} md={6}>
                                <CardActionArea>
                                    <Card sx={{ display: 'flex' }}>
                                        <CardContent sx={{ flex: 1 }} data-aos="fade-up" data-aos-duration="2000">
                                            <Typography component="h2" variant="h5">
                                                {category.title}
                                            </Typography>
                                            <Typography variant="subtitle1" paragraph sx={{ textAlign: 'left' }}>
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

