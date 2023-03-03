import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { Box, Grid, Typography } from "@mui/material";
import { qualityEngineeringServices } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function QualityEngineeringSection({ param }) {
    const selectedService = qualityEngineeringServices.find((item) => item['id'] === param);

    const otherSections = qualityEngineeringServices
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
                            {selectedService.desc}
                        </Typography>
                    </Box>

                </Box>
            </Grid>
            <NavigationTabs navigationLinks={otherSections} />
                <Typography sx={{ fontWeight: "bold" }} variant="h3">
                    {selectedService.title}
                </Typography>
                <Typography variant="subtitle1">
                    {selectedService.desc}
                </Typography>
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
                {
                    selectedService.categories.map((category) => (
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
        </>
    );
}

export default QualityEngineeringSection;

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