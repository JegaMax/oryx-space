import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography } from "@mui/material";
import { digitizationServices } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function DigitalizationSection({ param }) {
    const selectedService = digitizationServices.find((item) => item['id'] === param);

    const otherSections = digitizationServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));

    return (
        <>
            <NavigationTabs navigationLinks={otherSections} />
            <Box
                sx={{
                    width: "90%",
                    paddingLeft: "16px",
                    paddingRight: "16px",
                    margin: "0 auto",
                    paddingTop: {
                        xs: "32px",
                        sm: "48px",
                        md: "64px"
                    },
                    paddingBottom: {
                        xs: "32px",
                        sm: "48px",
                        md: "64px"
                    },
                    maxWidth: {
                        sm: "720px",
                        md: "1236px"
                    }
                }}
            >
                <Box>
                    <Grid
                        container
                        spacing={4}
                        sx={{
                            boxSizing: "border-box",
                            display: "flex",
                            flexFlow: "row wrap",
                            marginTop: "-32px",
                            width: "calc(100% + 16px)",
                            marginLeft: "-32px",
                            "&>.MuiGrid-item": {
                                paddingLeft: "32px",
                                paddingTop: "32px"
                            }
                        }}
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
                            >
                                <img
                                    class="MuiBox-root css-12j420d"
                                    src={require('../../assets/img/service/' + selectedService.image)}
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
                                    variant="h4"
                                    component={"h4"}
                                    sx={{
                                        fontSize: {
                                            sm: "1.8219rem",
                                            md: "2.0243rem",
                                            fontSize: "1.5625rem"
                                        },
                                        margin: "0px 0px 0.35em",
                                        lineHeight: "1.235",
                                        fontWeight: "700"
                                    }}
                                >
                                    {selectedService.title}
                                </Typography>
                                {
                                    selectedService.desc.map((content) => (
                                        <Typography
                                            variant="body1"
                                            component={"p"}
                                            sx={{
                                                fontSize: "1rem",
                                                margin: "0px 0px 0.35em",
                                                lineHeight: "1.5",
                                                fontWeight: "400"
                                            }}
                                        >
                                            {content}
                                        </Typography>
                                    ))}
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    );
}

export default DigitalizationSection;