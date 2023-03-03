import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { Box, Grid, Typography, Avatar, Card, Stack } from "@mui/material";
import { managedServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';

function ManagedServiceSection({ param }) {
    const selectedService = managedServices.find((item) => item['id'] === param);

    const otherSections = managedServices
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
        backgroundColor: '#eee'
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
                            {serviceDescriptions.managed}
                        </Typography>
                    </Box>

                </Box>
            </Grid>
            <NavigationTabs navigationLinks={otherSections} />
            <Box px={{ xs: "2%", sm: "7%" }} pt="25px" pb="40px">
                <Box textAlign={'center'}>
                    <Typography sx={{ fontWeight: "bold" }} variant="h3">
                        {selectedService.title}
                    </Typography>
                    <Typography variant="subtitle1">
                        {selectedService.desc}
                    </Typography>
                </Box>
                <Stack
                    py="40px"
                    direction={{ xs: "column", sm: "column", md: "row" }}
                    spacing={{ xs: 2, sm: 3, md: 4 }}
                >
                    {selectedService.categories.map((category) => (
                        <Stack
                            className="about-info-card"
                            borderRadius="10px"
                            px={{ xs: "10px", sm: "10px", md: "15px" }}
                            py={{ xs: "15px", sm: "25px" }}
                            textAlign={'left'}
                        >
                            <Avatar mb="15px" sx={{ width: 80, height: 80 }} src={require('../../assets/img/service/' + category.image)}></Avatar>
                            <Typography mb="10px" variant="h6" fontWeight="600">
                                {category.title}
                            </Typography>
                            <Typography variant="body2" fontWeight="500">
                                {category.desc}
                            </Typography>
                        </Stack>
                    ))}
                </Stack>
            </Box>
        </>
    );
}

export default ManagedServiceSection;

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