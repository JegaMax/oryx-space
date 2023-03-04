import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, Avatar, Card, Stack } from "@mui/material";
import { softwareDevelopmentServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
import ServiceHeader from './ServiceHeader';

function SoftwareDevelopmentSection({ param }) {
    const selectedService = softwareDevelopmentServices.find((item) => item['id'] === param);

    const otherSections = softwareDevelopmentServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));
    const cardStyle = {
        p: 2,
        my: 2,
        backgroundColor: '#eee',
        minHeight: '40rem'
    };
    return (
        <>
            <ServiceHeader description={serviceDescriptions.appDevelopment} image={selectedService.image} />
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
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    sx={{ maxWidth: "75rem", display: 'flex', flexWrap: 'wrap' }}
                >
                    {selectedService.categories.map((category) => (
                        <Grid item xs={4} sx={{ flexGrow: 1, height: '100%' }}>
                            <Card sx={cardStyle}>
                                <Stack justifyContent="center" alignItems="center" spacing={2} data-aos="fade-right" data-aos-duration="2000">
                                    <Avatar sx={{ width: 240, height: 240 }} src={require('../../assets/img/service/' + category.image)}></Avatar>
                                    <Typography variant="h5">{category.title}</Typography>
                                    <Typography sx={{ lineHeight: "2", color: "gray", textAlign: "left", }}>
                                        {category.desc}
                                    </Typography>
                                </Stack>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default SoftwareDevelopmentSection;