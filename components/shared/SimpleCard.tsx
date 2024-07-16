import {Box, Button, IconButton, Typography} from "@mui/material";
import MobileFriendlyIcon from "@mui/icons-material/MobileFriendly";
import AssignmentIcon from "@mui/icons-material/Assignment";
import ArticleIcon from "@mui/icons-material/Article";
import {styled} from "@mui/material/styles";
import React from "react";

interface CardProps {
	title: string;
	time: string;
	description: string;
	imageUrl: string;
}

export const SimpleCard: React.FC<CardProps> = ({title, time, description, imageUrl}) => {
	return (
		<StyledCard>
			<Box position="relative">
				<ImageContainer>
					<img src={imageUrl} alt={title}/>
				</ImageContainer>
			</Box>
			<Content>
				<Title>{title}</Title>
				<IconsContainer>
					<Typography my={1} variant="body2">{time}</Typography>
				</IconsContainer>
				<Description>{description}</Description>
			</Content>
		</StyledCard>
	);
};


const StyledCard = styled(Box)(({theme}) => ({
	border: '1px solid #ccc',
	padding: 8,
	borderRadius: '15px',
	overflow: 'hidden',
	maxWidth: '344px',
	backgroundColor: 'white',
}));

const ImageContainer = styled(Box)({
	width: '100%',
	height: '200px',
	overflow: 'hidden',
	'& img': {
		width: '100%',
		height: '100%',
		objectFit: 'contained',
	},
});
const StyledBox = styled(Box)({
	display: "flex",
	justifyContent: "space-between",
	marginBottom: "10px"
})
const Content = styled(Box)(({theme}) => ({
	padding: theme.spacing(2),
}));

const Title = styled(Typography)(({theme}) => ({
	fontWeight: 'bold',
	marginBottom: theme.spacing(1),
	marginTop: theme.spacing(1),
}));

const IconsContainer = styled(Box)(({theme}) => ({
	display: 'flex',
	justifyContent: 'flex-start',
	alignItems: 'center',
	marginBottom: theme.spacing(1),
	'& > *:not(:last-child)': {
		marginRight: theme.spacing(2),
	},
}));

const IconWithNumber = styled(Box)(({theme}) => ({
	borderRadius: "15px",
	backgroundColor: "#3541501A ",
	padding: "10px",
	marginRight: "5px",
	display: 'flex',
	alignItems: 'center',
	'& svg': {
		marginRight: theme.spacing(0.5),
	},
}));

const Description = styled(Typography)(({theme}) => ({
	fontSize: "14px",
	marginBottom: theme.spacing(2),
}));


const StyledButton = styled(Button)({
	backgroundColor: '#354150',
	padding: "14px 16px",
	borderRadius: "15px",
	color: '#FFFFFF',
	fontSize: "15px",
	'&:hover': {
		// backgroundColor: '#354110',
	},
});
