import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Container } from "@mui/material";
import { businessProcessServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
import ServiceHeader from './ServiceHeader';
function BusinessProcessSection({ param }) {
    const selectedService = businessProcessServices.find((item) => item['id'] === param);

    const otherSections = businessProcessServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));

    return (
        <>
            <ServiceHeader description={serviceDescriptions.businessProcessServices} image={selectedService.image} />
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
              <Grid item key={index} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      pt: 2,
                    }}
                    image={require('../../assets/img/service/' + category.image)}
                    alt={category.title}
                    data-aos="fade-down" data-aos-duration="3000"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {category.title}
                    </Typography>
                    <Typography sx={{textAlign:'left'}}>
                     {category.desc}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          </Container>
            </Box>
        </>
    );
}

export default BusinessProcessSection;
  