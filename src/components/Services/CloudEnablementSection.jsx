import React from 'react';
import '../../style/section.css';
import { Box, Grid, Typography } from "@mui/material";
import { cloudEnablementServices } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function CloudEnablementSection({ param }) {
    const selectedService = cloudEnablementServices.find((item) => item['id'] === param);

    const otherSections = cloudEnablementServices
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

export default CloudEnablementSection;

// export const Mieter = () => {
//     const dataMieter = {
//       Mieter: {
//         Icons: [
//           {
//             icon: "fa fa-comments-o",
//             title: "Wohnungskriterien",
//             text: "Wünsche und Kriterien für Deine Wohnung"
//           },
//           {
//             icon: "fa fa-bullhorn",
//             title: "Mieterprofil",
//             text: "Angaben zu Deiner Situation"
//           },
//           {
//             icon: "fa fa-group",
//             title: "Dokumente",
//             text: "Relevante Dokumente sicher hinterlegen"
//           },
//           {
//             icon: "fa fa-magic",
//             title: "Anfragen erhalten",
//             text: "Vermieter fragen Dich an, wenn alles passt!  "
//           }
//         ],
//         CTA: "100% kostenlos"
//       }
//     };
//     return (
//       <div id="mieter" className="text-center">
//         <div className="container">
//           <div className="co>l-md-10 col-md-offset-1 section-title">
//             <h2>Mieter</h2>
//           </div>
//           <div className="row">
//             {dataMieter?.Mieter?.Icons?.map((d, i) => (
//               <div key={`${d.title}-${i}`} className="col-xs-12 col-sm-6">
//                 <i className={d.icon}></i>
//                 <h3>{d.title}</h3>
//                 <p>{d.text}</p>
//               </div>
//             ))}
//           </div>
//           <h3>{dataMieter?.Mieter?.CTA}</h3>
//           <a href="#mieter" className="btn btn-custom btn-lg">
//             Ausprobieren
//           </a>
//         </div>
//       </div>
//     );
//   };
  