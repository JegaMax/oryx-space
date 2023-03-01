import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { digitalMediaAndServices } from '../AppConstants';
import { Box, Typography } from "@mui/material";
import { aboutUsSections } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function AboutUsSection({ param }) {
    const pageContent = aboutUsSections.find((item) => item['id'] === param);

    const otherSections = aboutUsSections
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));

    return (
        <>
            <NavigationTabs navigationLinks={otherSections} />
            <Box
                sx={{
                    backgroundColor: "rgb(26, 33, 56)",
                    position: "relative"
                }}
                className="landingContainer"
            >
                <Box
                    sx={{
                        position: "relative",
                        zIndex: 3
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            height: "100%",
                            overflow: "hidden"
                        }}
                    >
                        <Box
                            sx={{
                                width: "100%",
                                margin: "0px auto",
                                padding: 0,
                                maxWidth: {
                                    sm: "100%",
                                    md: "1236px"
                                }
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    flexDirection: {
                                        xs: "column",
                                        md: "row"
                                    },
                                    minHeight: {
                                        md: "600px"
                                    }
                                }}
                            >
                                <Box
                                    sx={{
                                        width: "100%",
                                        display: "flex",
                                        WebkitBoxAlign: "center",
                                        alignItems: "center",
                                        order: {
                                            xs: 2,
                                            md: 1
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            widht: "100%",
                                            margin: "0 auto",
                                            paddingLeft: "16px",
                                            paddingRight: "16px",
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
                                            <Box
                                                sx={{
                                                    marginBottom: "16px"
                                                }}
                                            >
                                                <Typography
                                                    variant="h2"
                                                    gutterBottom
                                                    component="h2"
                                                    sx={{
                                                        margin: 0,
                                                        fontFamily: "Inter, sans-serif",

                                                        lineHeight: "1.2",
                                                        color: "rgb(238, 238, 239)",
                                                        fontWeight: "700",
                                                        fontSize: {
                                                            sm: "3.125rem",
                                                            md: "3.3333rem",
                                                            fontSize: "2.375rem"
                                                        }
                                                    }}
                                                >
                                                    {pageContent.title}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box
                                            sx={{
                                                marginBottom: "24px"
                                            }}
                                        >
                                            {
                                                pageContent.desc.map((content) => (
                                                    <Typography
                                                        variant="h6"
                                                        gutterBottom
                                                        component="p"
                                                        sx={{
                                                            margin: 0,
                                                            fontFamily: "Inter, sans-serif",

                                                            lineHeight: "1.6",
                                                            color: "rgb(174, 176, 180)",
                                                            fontWeight: "500",
                                                            fontSize: "1.125rem"
                                                        }}
                                                    >{content}
                                                    </Typography>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                </Box>
                                <Box
                                    sx={{
                                        position: "relative",
                                        flex: {
                                            xs: "0 0 100%",
                                            md: "0 0 50%"
                                        },
                                        maxWidth: {
                                            xs: "100%",
                                            md: "50%"
                                        },
                                        order: {
                                            xs: "1",
                                            md: "2"
                                        }
                                    }}
                                >
                                    <Box
                                        sx={{
                                            height: "100%",
                                            position: "relative",
                                            width: {
                                                xs: "100%",
                                                md: "50vw"
                                            }
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                overflow: "hidden"
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    overflow: "hidden",
                                                    left: "0%",
                                                    width: "100%",
                                                    height: "100%",
                                                    position: {
                                                        xs: "relative",
                                                        md: "absolute"
                                                    },
                                                    shapeOutside: {
                                                        xs: "none",
                                                        md: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)"
                                                    },
                                                    clipPath: {
                                                        xs: "none",
                                                        md: "polygon(10% 0%, 100% 0px, 100% 100%, 0% 100%)"
                                                    }
                                                }}
                                            >
                                                <Box
                                                    sx={{
                                                        height: {
                                                            xs: "auto",
                                                            md: "100%"
                                                        }
                                                    }}
                                                >
                                                    <span
                                                        class=" lazy-load-image-background blur lazy-load-image-loaded"
                                                        style={{
                                                            display: "inline-block"
                                                        }}
                                                    >
                                                        <img
                                                            class="MuiBox-root css-ppo9pa"
                                                            src={require('../../assets/img/about/' + pageContent.image)}
                                                        />
                                                    </span>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </>
    );
}

export default AboutUsSection;

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