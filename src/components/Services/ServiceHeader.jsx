import React from 'react';
import { Box, Grid, Typography } from "@mui/material";

export default function ServiceHeader({description, image}) {

    const main = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        padding: "2rem",
        background: `linear-gradient(
                rgba(255, 255, 255, 0.50),
                rgba(255, 201, 201, 0.40)
              ), url(${require(`../../assets/img/service/${image}`)}) center / cover no-repeat`,
    }

    return <Grid>
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
                    {description}
                </Typography>
            </Box>

        </Box>
    </Grid>;
}