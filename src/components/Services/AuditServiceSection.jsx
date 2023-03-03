import React from 'react';
import styled from 'styled-components';
import '../../style/section.css';
import { Box, Grid, Typography, Stack } from "@mui/material";
import { auditServices } from '../AppConstants';
import NavigationTabs from '../Elements/NavigationTabs';
function AuditServiceSection({ param }) {
    const selectedService = auditServices.find((item) => item['id'] === param);

    const otherSections = auditServices
        .filter((item) => item['id'] !== param)
        .map(({ title, url }) => ({ title, url }));

    return (
        <>
            <NavigationTabs navigationLinks={otherSections} />
                                    {selectedService.categories.map((category) => (
                        <Stack direction={{ xs: "column-reverse", sm: "row" }}>
                        <Box
                          flex={{ sm: "0.5", md: "0.6" }}
                          pt={{ xs: "10%", sm: "5%", lg: "0%" }}
                        >
                          <img className="feature1-image" src={require('../../assets/img/service/' + category.image)} alt="person" />
                        </Box>
                        <Box flex="0.4" pt={{ sm: "0%", md: "5%" }}>
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

        </>
    );
}

export default AuditServiceSection;

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