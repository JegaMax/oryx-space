import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { Box, Grid, Typography, Avatar, Card, Stack } from "@mui/material";
import { softwareDevelopmentServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';

function SoftwareDevelopmentSection({ param }) {
    const selectedService = softwareDevelopmentServices.find((item) => item['id'] === param);

    const otherSections = softwareDevelopmentServices
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
        backgroundColor: '#eee',
        minHeight: '32rem'
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
                            {serviceDescriptions.appDevelopment}
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
                    sx={{ maxWidth: "75rem", display: 'flex', flexWrap: 'wrap' }}
                >
                    {selectedService.categories.map((category) => (
                        <Grid item xs={4} sx={{ flexGrow: 1, height: '100%' }}>
                            <Card sx={cardStyle}>
                                <Stack justifyContent="center" alignItems="center" spacing={2}>
                                    <Avatar sx={{ width: 80, height: 80 }} src={require('../../assets/img/service/' + category.image)}></Avatar>
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

const HeaderInfo = styled.div`
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const SubTitle = styled.div`
margin-top:16px;
  @media (max-width: 860px) {
    text-align: center;
  }
`;