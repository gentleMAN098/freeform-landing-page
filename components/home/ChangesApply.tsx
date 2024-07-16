import {Box, Button, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
import React from "react";
import StyleIcon from '@mui/icons-material/Style';
import Image from "next/image";

export const ChangesApply = () => {
	return (
		<StyledBox>
			<Box display="flex" width="100%">
				<Box width="60%">
					<Typography fontSize="14px" lineHeight="24px">
						ثبت هر تغییر در ورژن فرم
					</Typography>
					<Typography textAlign="start" fontSize="40px" lineHeight="72px">
						هر تغییری که در فرم خود ایجاد کنید یک ورژن <StyleIcon
						sx={{
							width: "40px",
							height: "40px",
							p: 1,
							mx: 2,
							borderRadius: "15px",
							backgroundColor: "#3541501A "
						}}
						fontSize="large"/>
						به فرم اضافه خواهد شد
					</Typography>
				</Box>
				<Box width="40%" display="flex" alignItems="end" justifyContent="end">
					<Typography textAlign="start" fontSize="16px" lineHeight="36px">
						با هر تغییری که در فرم ایجاد کنید یک ورژن به فرم شما اضافه خواهد شد و شما میتوانید تمام ورژن های
						قبلی و تغییرات آن را ببینید.
					</Typography>
				</Box>
			</Box>
			<Box my={4} width="100%" height="586px" position="relative">
				<Image
					src="/assets/images/changes.png"
					alt="apply changes fast"
					layout="fill"
					quality={100}
				/>
			</Box>
		</StyledBox>)
}

const StyledBox = styled(Box)(({theme}) => ({
	display: "flex",
	flexDirection: "column",
	alignItems: "start",
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