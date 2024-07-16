import {
	Accordion,
	accordionClasses,
	AccordionDetails,
	accordionDetailsClasses,
	AccordionSummary,
	Stack
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {styled} from "@mui/material/styles";

export const FrequentlyQuestions = () => {
	return (
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
	)
}


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
