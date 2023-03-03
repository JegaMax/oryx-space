import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { Box, Grid, Typography } from "@mui/material";
import { qualityEngineeringServices, serviceDescriptions} from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
import ServiceHeader from './ServiceHeader';
function QualityEngineeringSection({ param }) {
    const selectedService = qualityEngineeringServices.find((item) => item['id'] === param);

    const otherSections = qualityEngineeringServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));

    return (
        <>
            <ServiceHeader description={serviceDescriptions.qualityEngineering} image={selectedService.image} />
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
                    sx={{ maxWidth: "90rem", display: 'flex', flexWrap: 'wrap'}}
                >
                    {selectedService.categories.map((category) => (
                                <Grid
                                    container
                                    margin={3}
                                    sx={{
                                        boxSizing: "border-box",
                                        display: "flex",
                                        flexFlow: "row wrap",
                                        width: "calc(100% + 16px)",
                                        marginLeft: "-32px",
                                        "&>.MuiGrid-item": {
                                            paddingLeft: "32px",
                                            paddingTop: "32px"
                                        }
                                    }}xs={12}
                                    md={6}
                                >
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        md={6}
                                        sx={{
                                            display: "flex",
                                            flexFlow: "row wrap",
                                            width: "100%",
                                            margin: 0,
                                            justifyContent: "center",
                                            flexBasis: {
                                                md: "50%"
                                            },
                                            maxWidth: {
                                                md: "50%"
                                            },

                                            flexGrow: {
                                                md: 0
                                            }
                                        }}
                                    >
                                        <span
                                            className=" lazy-load-image-background blur lazy-load-image-loaded"
                                            style={{ display: "inline-block" }}
                                            data-aos="fade-right" data-aos-duration="2000"
                                        >
                                            <img
                                                class="MuiBox-root css-12j420d"
                                                src={require('../../assets/img/service/' + category.image)}
                                                alt={category.title}
                                            />
                                        </span>
                                    </Grid>
                                    <Grid
                                        container
                                        item
                                        xs={12}
                                        md={6}
                                        sx={{
                                            display: "flex",
                                            flexFlow: "row wrap",
                                            width: "100%",
                                            margin: 0,
                                            justifyContent: "center",
                                            flexBasis: {
                                                md: "50%"
                                            },
                                            maxWidth: {
                                                md: "50%"
                                            },

                                            flexGrow: {
                                                md: 0
                                            }
                                        }}
                                    >
                                        <Box>
                                            <Typography
                                                variant="h5"
                                                component={"h5"}
                                                sx={{
                                                    fontSize: {
                                                        sm: "1.8219rem",
                                                        md: "2.0243rem",
                                                        fontSize: "1.5625rem"
                                                    },
                                                    margin: "0px 0px 0.35em",
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
                                        </Box>
                                    </Grid>
                                </Grid>
                    ))}
                </Grid>
            </Box>
        </>
    );
}

export default QualityEngineeringSection;