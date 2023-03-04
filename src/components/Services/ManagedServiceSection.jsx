import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { Box, Typography, Avatar, Stack } from "@mui/material";
import { managedServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
import ServiceHeader from './ServiceHeader';

function ManagedServiceSection({ param }) {
    const selectedService = managedServices.find((item) => item['id'] === param);

    const otherSections = managedServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));
    return (
        <>
            <ServiceHeader description={serviceDescriptions.managed} image={selectedService.image} />
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
                    spacing={{ xs: 2, sm: 2, md: 3 }}
                >
                    {selectedService.categories.map((category) => (
                        <Stack
                            className="about-info-card"
                            borderRadius="10px"
                            px={{ xs: "10px", sm: "10px", md: "15px" }}
                            py={{ xs: "15px", sm: "25px" }}
                            textAlign={'left'}
                        >
                            <Avatar mb="15px" sx={{ width: 80, height: 80 }} src={require('../../assets/img/service/' + category.image)} data-aos="fade-left" data-aos-duration="2000"></Avatar>
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