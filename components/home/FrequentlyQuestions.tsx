import {
	Accordion,
	accordionClasses,
	AccordionDetails,
	accordionDetailsClasses,
	AccordionSummary, Box,
	Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import HelpCenterIcon from '@mui/icons-material/HelpCenter';

export const FrequentlyQuestions = () => {
	return (
		<Box px={30}>
			<StyledBox>
				<Typography width="100%" display="flex" justifyContent="start" textAlign="start" fontSize="14px"
				            lineHeight="24px">
					سوالات متداول
				</Typography>
				<Typography mb={4} textAlign="start" alignItems="center" fontSize="40px">
					سوالات متداولی
					<HelpCenterIcon
						sx={{
							width: "40px",
							height: "100%",
							p: 1,
							mx: 2,
							mb: -1,
							borderRadius: "15px",
							backgroundColor: "#3541501A "
						}}
						fontSize="large"
					/>
					که برای کاربران به وجود آمده است
				</Typography>
				<Stack gap={1}>
					{Array.from({length: 5}).map((_, index) => (
						<StyledAccordion key={index}>
							<AccordionSummary
								id={`${index}`}
								expandIcon={<ExpandMoreIcon/>}
							>
								سوالات متداول تستی
							</AccordionSummary>
							<AccordionDetails>
								با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام
								ورژن
								های
								قبلی و تغییرات آن را ببینید.
							</AccordionDetails>
						</StyledAccordion>
					))}
				</Stack>
			</StyledBox>
		</Box>
	)
}

const StyledBox = styled(Box)({
	backgroundImage: 'url("/assets/images/image4bg.png")',
	backgroundColor: "#3541501A",
	borderRadius: "15px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	padding: "40px",
	margin: "100px 0",
	backgroundSize: 'contain',
	backgroundRepeat: "no-repeat",
	width: '100%',
	height: 'auto',
})

const StyledAccordion = styled(Accordion)(({theme}) => ({
	'&::before': {
		all: 'unset',
		content: "''"
	},
	[`&.${accordionClasses.root}`]: {
		borderRadius: 15,
		backgroundColor: '#F6F6F6',
		boxShadow: 'none'
	},
	[`&.${accordionClasses.expanded}`]: {
		backgroundColor: '#354150',
		color: '#fff',
		"svg": {
			color: '#fff',
		}
	},
	[`& .${accordionDetailsClasses.root}`]: {
		...theme.typography.body2
	},

}))
