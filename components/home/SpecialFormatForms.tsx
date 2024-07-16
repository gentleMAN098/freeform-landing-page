import {Box, Button, Grid} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import React from "react";
import MyCard from "@/components/shared/MyCard";

export const SpecialFormatForms = () => {
	const items = [
		{
			title: "پت شاپ",
			likes: 1,
			shares: 3,
			mobile: false,
			description: " شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...",
			imageUrl: "/assets/images/card3.png"
		},
		{
			title: "دکوراسیون",
			likes: 1,
			shares: 3,
			description: " شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...",
			mobile: true,
			imageUrl: "/assets/images/card2.png"
		},
		{
			title: "وکیل",
			likes: 1,
			shares: 3,
			mobile: false,
			description: " شما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را بهشما به راحتی میتوانید فرم و یا حتی صفحه دلخواه خود را به صورت کاملا رایگان در ...",
			imageUrl: "/assets/images/card1.png"
		}
	]
	return (
		<StyledBox>
			<Box display="flex" width="100%">
				<Box width="50%">
					<Typography fontSize="14px" lineHeight="50px">
						قالب های تخصصی فری فرم
					</Typography>
					<Typography fontSize="46px" variant="h5">
						قالب های تخصصی و متنوع برای کسب و کارها
					</Typography>
				</Box>
				<Box width="50%" display="flex" alignItems="end" justifyContent="end">
					<StyledBtn variant="contained">
						همه مقالات
					</StyledBtn>
				</Box>
			</Box>
			<Grid mt={8} container spacing={2}>
				{items.map((item, i) => (
					<Grid key={i} item xs={12} md={4}>
						<MyCard
							title={item.title}
							likes={item.likes}
							shares={item.shares}
							description={item.description}
							imageUrl={item.imageUrl}
							mobile={item.mobile}
						/>
					</Grid>
				))}
			</Grid>
		</StyledBox>)
}

const StyledBox = styled(Box)(({theme}) => ({
	padding: "80px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	margin: "100px 0",
	backgroundImage: 'url("/assets/images/Group2bg.png")',
	backgroundSize: 'cover',
	backgroundPosition: "250% -40%",
	backgroundRepeat: "no-repeat",
	width: '100%',
	height: 'auto',
}));

const StyledBtn = styled(Button)({
	borderRadius: "15px",
	p: "20px 30px",
	backgroundColor: "#354150",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
})