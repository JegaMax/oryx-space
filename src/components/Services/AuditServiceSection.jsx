import React from 'react';
import '../../style/section.css';
import { Box, Typography, Stack, Container } from "@mui/material";
import { auditServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
import ServiceHeader from './ServiceHeader';
function AuditServiceSection({ param }) {
  const selectedService = auditServices.find((item) => item['id'] === param);

  const otherSections = auditServices
    .filter((item) => item['id'] !== param)
    .map(({ title, url }) => ({ title, url }));

  return (
    <>
      <ServiceHeader description={serviceDescriptions.audit} image={selectedService.image} />
      <NavigationTabs navigationLinks={otherSections} />
      <Box textAlign={'center'} mt={4}>
        <Typography sx={{ fontWeight: "bold" }} variant="h3">
          {selectedService.title}
        </Typography>
        <Typography variant="subtitle1">
          {selectedService.desc}
        </Typography>
      </Box>
      <Container sx={{ py: 8 }} maxWidth="lg">
        {selectedService.categories.map((category, index) => (
          <Stack direction={{ xs: index % 2 === 0 ? "column" : "column-reverse", sm: index % 2 === 0 ? "row" : "row-reverse" }}>
            <Box
              flex={{ sm: "0.5", md: "0.4" }}
              pt={{ xs: "10%", sm: "5%", lg: "0%" }}
            >
              <img className={index % 2 === 0 ? "column-image" : "column-reverse-image"} data-aos={index % 2 === 0 ? "fade-left" : "fade-right"} data-aos-duration="2000" src={require('../../assets/img/service/' + category.image)} alt="person" />
            </Box>
            <Box flex="0.6" pt={{ sm: "0%", md: "5%" }}>
              <Typography
                variant="h2"
                fontWeight="800"
                fontSize={{ xs: "34px", sm: "44px", md: "54px" }}
                mb={{ xs: "15px", sm: "25px" }}
              >
                {category.title}
              </Typography>
              <Typography
                variant="body1"
                fontWeight="500"
                mb={{ xs: "15px", sm: "10px", md: "25px" }}
              >
                {category.desc}
              </Typography>
            </Box>
          </Stack>
        ))}
      </Container>
    </>
  );
}

export default AuditServiceSection;