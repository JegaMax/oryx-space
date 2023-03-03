import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, Card } from "@mui/material";
import { digitizationServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function DigitalizationSection({ param }) {
    const selectedService = digitizationServices.find((item) => item['id'] === param);

    const otherSections = digitizationServices
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
                            {serviceDescriptions.digitization}
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
                <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    sx={{ maxWidth: "75rem", display: 'flex', flexWrap: 'wrap' }} // Add display: 'flex' and flexWrap: 'wrap'
                >
                    {selectedService.categories.map((category) => (
                        <Grid item xs={6} sx={{ flexGrow: 1, height: '100%' }}>
                            <Card sx={cardStyle}>
                                <img className='iconbox' data-aos="fade-right" data-aos-duration="2000" src={require('../../assets/img/service/' + category.image)} alt={category.title}>
                                </img>
                                <Typography
                                    variant="h5"
                                    component={"h5"}
                                    sx={{
                                        fontSize: {
                                            sm: "1.8219rem",
                                            md: "2.0243rem",
                                            fontSize: "1.5625rem"
                                        },
                                        margin: "0.5em 0",
                                        lineHeight: "1.235",
                                        fontWeight: "700",
                                        textAlign: "left"
                                    }}
                                >
                                    {category.title}
                                </Typography>

                                <Typography
                                    variant="body1"
                                    component={"p"}
                                    sx={{
                                        fontSize: "1rem",
                                        margin: "0px 0px 0.35em",
                                        lineHeight: "1.5",
                                        fontWeight: "400",
                                        textAlign: "left"
                                    }}
                                >
                                    {category.desc}
                                </Typography>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default DigitalizationSection;