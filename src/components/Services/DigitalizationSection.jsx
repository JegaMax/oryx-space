import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography, Card } from "@mui/material";
import { digitizationServices } from '../AppConstants';
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
        backgroundColor: '#e1d2d2'
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
                            {selectedService.desc}
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
                <div className="cardscontainer">
                    {selectedService.categories.map((category, index) => (
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
                                            src={require('../../assets/img/service/' + category.image)}
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
                                    <img className='iconbox' data-aos="fade-right" data-aos-duration="2000" src={require('../../assets/img/service/' + category.image)} alt={category.title}>
                                </img>
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
                                                fontWeight: "700"
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
                                                fontWeight: "400"
                                            }}
                                        >
                                            {category.desc}
                                        </Typography>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                       
                    ))}
                    <Grid
                    container
                    direction={{ xs: "column", md: "row" }}
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                    sx={{ maxWidth: "75rem" }}
                >
                    {
                        selectedService.categories.map((category) => (
                            <Grid item xs={4}>
                                <Card sx={cardStyle}>
                                <img className='iconbox' data-aos="fade-right" data-aos-duration="2000" src={require('../../assets/img/service/' + category.image)} alt={category.title}>
                                </img>
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
                                                fontWeight: "700"
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
                                                fontWeight: "400"
                                            }}
                                        >
                                            {category.desc}
                                        </Typography>
                                    </Box>
                                </Card>
                            </Grid>
                        ))}
                </Grid>
                </div>
            </Box>
        </>
    );
}

export default DigitalizationSection;