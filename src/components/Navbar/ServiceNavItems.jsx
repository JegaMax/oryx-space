import React from 'react';
import '../../style/header.css'
import { Box, Link, Grid, Typography, ListItem, List } from '@mui/material';
import { softwareDevelopmentServices, qualityEngineeringServices, digitizationServices, cloudEnablementServices, automationServices, alMlDataEngineeringServices } from '../AppConstants';
function ServiceNavItems() {
	return (
		<Box sx={{
			display: 'flex',
			flexWrap: 'wrap',
			justifyContent: 'flex-start',
			p: 1,
			m: 2,
			bgcolor: 'background.paper',
			borderRadius: 1,
		}}>
			<Grid md={4} xs={12}>
				<Box>
					<Typography variant='h6'>Software Development</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							softwareDevelopmentServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={4} xs={12}>
				<Box>
					<Typography variant='h6'>Quality Engineering</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							qualityEngineeringServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={4} xs={12}>
				<Box>
					<Typography variant='h6'>Digitization</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							digitizationServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={4} xs={12}>
				<Box>
					<Typography variant='h6'>Cloud Enablement</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							cloudEnablementServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={4} xs={12}>
				<Box>
					<Typography variant='h6'>Automation Services &amp; Solutions</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							automationServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={4} xs={12}>
				<Box>
					<Typography variant='h6'>AI/ML, Analytics, &amp; Data Engineering</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							alMlDataEngineeringServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
		</Box>
	)
}

export default ServiceNavItems;