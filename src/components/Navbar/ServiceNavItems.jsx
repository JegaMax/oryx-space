import React from 'react';
import '../../style/header.css'
import { Box, Link, Grid, Typography, ListItem, List } from '@mui/material';
import { softwareDevelopmentServices, qualityEngineeringServices, digitizationServices, alMlDataEngineeringServices, businessProcessServices, auditServices, managedServices } from '../AppConstants';
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
			<Grid md={3} xs={12} container wrap="nowrap">
				<Box>
					<Typography variant='h6'>App Development and Modernization</Typography>
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
			<Grid md={3} xs={12} container wrap="nowrap">
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
			<Grid md={3} xs={12} container wrap="nowrap">
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
			<Grid md={3} xs={12} container wrap="nowrap">
				<Box>
					<Typography variant='h6'>AI,ML, and Data Engineering</Typography>
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
			<Grid md={3} xs={12} container wrap="nowrap">
				<Box>
					<Typography variant='h6'>Business Process Services</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							businessProcessServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={3} xs={12} container wrap="nowrap">
				<Box>
					<Typography variant='h6'>Audit Services</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							auditServices.map((development) => (
								<ListItem>
									<Link href={development.url} underline="none" sx={{ color: '#0B093B' }} >{development.title}</Link>
								</ListItem>

							))

						}
					</List>
				</Box>
			</Grid>
			<Grid md={3} xs={12} container wrap="nowrap">
				<Box>
					<Typography variant='h6'>Managed Services</Typography>
					<List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
						{
							managedServices.map((development) => (
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