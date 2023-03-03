import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, Card, CardMedia, CardContent, Container } from "@mui/material";
import { businessProcessServices, serviceDescriptions } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function BusinessProcessSection({ param }) {
    const selectedService = businessProcessServices.find((item) => item['id'] === param);

    const otherSections = businessProcessServices
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
                            {serviceDescriptions.businessProcessServices}
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
  