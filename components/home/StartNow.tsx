import {Box, Button, InputAdornment, TextField} from "@mui/material";
import {styled} from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MyInput from "@/components/shared/MyInput";
import Image from "next/image";
import React from "react";
import EditNoteIcon from "@mui/icons-material/EditNote";

export const StartNow = () => {
	return (
		<Box position="relative">
			<StyledBox>
				<Background/>
				<LeftBackground/>
				<RightBackground/>
				<StyledContainer>
					<Typography fontSize="14px" color="#FAF603">
						همین الان شروع کنید
					</Typography>
					<Typography fontSize="46px" color="#FFFFFF">
						با یک کلیک به سادگی فرم خود را بسازی
					</Typography>
					<Typography mt={1} mb={3} textAlign="center" maxWidth="515px" fontSize="16px" color="#FFFFFF">
						برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا وارد پنل کاربری خود شوید و بعد
						میتوانید به راحتی فرم خود را بسازید
					</Typography>
					<StyledButton variant="contained">
						همین حالا شروع کنید
					</StyledButton>
				</StyledContainer>
				<Box width="90%" position="relative" zIndex={3} mt={20}>
					<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
						<Box width="100%" height="403px" position="relative">
							<Image
								src="/assets/images/Safari.png"
								alt="Example Image"
								layout="fill"
								quality={100}
							/>
						</Box>
					</Box>
				</Box>
			</StyledBox>
			<Box
				position="absolute"
				left="calc(50% - 204px)"
				zIndex={4}
				bottom="-20px"
			>
				<StyledTextField
					placeholder="نام پروژه خود را وارد کنید..."
					InputProps={{
						startAdornment: (
							<InputAdornment position="start">
								<EditNoteIcon/>
							</InputAdornment>
						),
						endAdornment: (
							<InputAdornment position="end">
								<Button sx={{borderRadius: "15px", p: "18px 30px", backgroundColor: "#354150"}}
								        variant="contained">
									ساخت پروژه
								</Button>
							</InputAdornment>
						),
					}}
				/>
			</Box>
		</Box>
	)
}

const StyledTextField = styled(TextField)(({theme}) => ({
	'& .MuiInputBase-root': {
		padding: "24px 14px",
		borderRadius: 15,
		backgroundColor: '#FFFFFF',
		paddingRight: '10px',
		'& fieldset': {
			border: 'none',
		},
		'&:hover fieldset': {
			border: 'none',
		},
		'&.Mui-focused fieldset': {
			border: 'none',
		},
		'&:hover': {
			border: "0px solid #ECECEC",
			backgroundColor: '#ECECEC',
		},
		'&.Mui-focused': {
			backgroundColor: '#E0E0E0',
		},
	},
	'& .MuiInputBase-input': {
		padding: '10px 12px',
	},
	'& .MuiInputAdornment-root': {
		'& .MuiSvgIcon-root': {
			color: '#354150',
		},
	},
}));

const StyledButton = styled(Button)({
	backgroundColor: '#FFFFFF',
	padding: "8px 10px",
	borderRadius: "15px",
	fontSize: "15px",
	color: "#354150",
	'&:hover': {
		backgroundColor: '#FDFCF4',
	},
})

const StyledContainer = styled(Box)({
	paddingTop: "100px",
	position: 'relative',
	zIndex: 2,
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column",
})

const StyledBox = styled(Box)({
	backgroundColor: "#354150",
	margin: "100px 0",
	position: 'relative',
	borderRadius: "15px",
	display: "flex",
	flexDirection: "column",
	alignItems: "center",
	overflow: "hidden"
})

const Background = styled(Box)({
	position: 'absolute',
	bottom: 0,
	left: 0,
	width: '100%',
	height: '100vh',
	borderRadius: "15px",
	backgroundImage: 'url(/assets/images/BG.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	zIndex: 4,
})

const LeftBackground = styled(Box)({
	position: 'absolute',
	top: 0,
	left: 0,
	width: '50%',
	height: '100vh',
	backgroundImage: 'url(/assets/images/lastbg2.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	zIndex: 1,
});

const RightBackground = styled(Box)({
	position: 'absolute',
	top: 0,
	right: 0,
	width: '50%',
	height: '100vh',
	backgroundImage: 'url(/assets/images/lastbg1.png)',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	zIndex: 1,
});