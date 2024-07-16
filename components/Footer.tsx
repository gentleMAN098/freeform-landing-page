import React from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {Box, Divider} from "@mui/material";
import {styled} from "@mui/material/styles";
import Link from "next/link";
import {EmailRounded, LocationOn, Phone} from "@mui/icons-material";

const Footer: React.FC = () => {
	return (
		<FooterContainer>
			<Divider/>
			<Container>
				<StyledBox>
					<img src="/logo.svg" alt="Logo" style={{height: 40}}/>
				</StyledBox>
				<Box marginY={4}>
					<Typography display="inline" align="center" fontSize="18px" variant="body1">
						وب سایت شرکت گروه شرکتهای منظومه نگاران به عنوان بخش مرکزی روابط عمومی ، ماموریت آشنایی شما
						عزیزان
						با شرکتهای تابع واحد
						انتشارات ؛ استارت‌آپها و همچنین جذب و آموزش نیروهای متخصص را بر عهده دارد .برای مشاهده سایر
						استارت
						آپ ها
					</Typography>
					<Typography display="inline" fontWeight="bold" fontSize="20px">
						<Link href="#"> {" "}اینجا{" "}</Link>
					</Typography>
					<Typography display="inline" align="center" marginY={4} fontSize="18px" variant="body1">
						را کلیک کنید.
					</Typography>
				</Box>
				<StyledContainer>
					<ItemContainer>
						<Phone/>
						<Typography mx={1} fontSize="16px" variant="h6">مشاوره تلفنی:</Typography>
						<Typography fontSize="12px">
							<Link href="tel:02155569833" dir="ltr" color="inherit">
								021-5556 9833
							</Link>
						</Typography>
					</ItemContainer>
					<ItemContainer>
						<Phone/>
						<Typography mx={1} fontSize="16px" variant="h6">مشاوره تلفنی:</Typography>
						<Typography fontSize="12px">
							<Link href="tel:02155569833" dir="ltr" color="inherit">
								021-5556 9833
							</Link>
						</Typography>
					</ItemContainer>
					<ItemContainer>
						<EmailRounded/>
						<Typography mx={1} fontSize="16px" variant="h6">ایمیل:</Typography>
						<Typography fontSize="12px">
							<Link href="mailto:info@example.com" dir="ltr" color="inherit">
								info@example.com
							</Link>
						</Typography>
					</ItemContainer>
					<ItemContainer>
						<LocationOn/>
						<Typography mx={1} fontSize="16px" variant="h6">آدرس:</Typography>
						<Typography mx={1} fontSize="12px" variant="h6">
							خ بهشتی، ما بین یوسفی و صابونچی، پلاک 197، طبقه 7، واحد 25
						</Typography>
					</ItemContainer>
				</StyledContainer>
			</Container>

		</FooterContainer>
	);
};

export default Footer;

const StyledBox = styled(Box)({
	flexGrow: 1,
	paddingTop: "20px",
	display: 'flex',
	justifyContent: 'center',
});

const StyledContainer = styled(Box)({
	display: "flex",
	flexWrap: "wrap",
	backgroundColor: "#3541501A",
	borderRadius: "12px",
	padding: "24px"
})
const FooterContainer = styled(Box)({
	padding: '20px 0',
});


const ItemContainer = styled(Box)(({theme}) => ({
	marginRight: "20px",
	display: 'flex',
	minWidth: "200px",
	alignItems: 'center',
	justifyContent: "start"
	// [theme.breakpoints.down('sm')]: {
	// 	justifyContent: 'center',
	// 	textAlign: 'center',
	// },
}));
