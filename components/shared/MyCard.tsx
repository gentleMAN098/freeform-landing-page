import React from 'react';
import {Box, Typography, Button, IconButton} from '@mui/material';
import {styled} from '@mui/material/styles';
import SubjectIcon from '@mui/icons-material/Subject';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import AssignmentIcon from '@mui/icons-material/Assignment';
import ArticleIcon from '@mui/icons-material/Article';

interface CardProps {
	title: string;
	likes: number;
	shares: number;
	description: string;
	mobile?: boolean;
	imageUrl: string;
}

const MyCard: React.FC<CardProps> = ({title, likes, shares, description, mobile = false, imageUrl}) => {
	return (
		<StyledCard>
			<Box position="relative">
				<ImageContainer>
					<img src={imageUrl} alt={title}/>
					{mobile && (
						<IconButton
							sx={{
								position: 'absolute',
								top: 8,
								right: 8,
								backgroundColor: '#354150',
								color: "#FAF603",
								'&:hover': {backgroundColor: '#354110'}
							}}
						>
							<MobileFriendlyIcon color="#FAF603"/>
						</IconButton>
					)}
				</ImageContainer>
			</Box>
			<Content>
				<StyledBox>
					<Title>{title}</Title>
					<IconsContainer>
						<IconWithNumber>
							<Typography variant="body2">{likes}</Typography>
							<AssignmentIcon fontSize="small"/>
						</IconWithNumber>
						<IconWithNumber>
							<Typography variant="body2">{shares}</Typography>
							<ArticleIcon fontSize="small"/>
						</IconWithNumber>
					</IconsContainer>
				</StyledBox>
				<Description>{description}</Description>
				<StyledButton fullWidth variant="contained">همین الان شروع کنید</StyledButton>
			</Content>
		</StyledCard>
	);
};

export default MyCard;

const StyledCard = styled(Box)(({theme}) => ({
	border: '1px solid #ccc',
	borderRadius: '15px',
	overflow: 'hidden',
	maxWidth: '344px',
	maxHeight: "419px",
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
