import React from 'react';
import {Box, Typography} from "@mui/material";
import AdsClickIcon from '@mui/icons-material/AdsClick';
import ArticleIcon from '@mui/icons-material/Article';
import {styled} from "@mui/material/styles";
import MyInput from "@/components/shared/MyInput";
import Image from "next/image";

export const EasyCreateForm = () => {
	return (
		<Box my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
			<Typography my={2} textAlign="center" fontSize="14px" lineHeight="24px">
				به سادگی فرم بسازی
			</Typography>
			<StyledBox>
				<Typography textAlign="center" fontSize="52px" lineHeight="72px">
					با یک کلیک
					<AdsClickIcon
						sx={{
							width: "40px",
							height: "40px",
							p: 1,
							mx: 2,
							borderRadius: "15px",
							backgroundColor: "#3541501A "
						}}
						fontSize="large"/>
					و به صورت رایگان فرم
					<ArticleIcon
						sx={{
							width: "40px",
							height: "40px",
							p: 1,
							mx: 2,
							borderRadius: "15px",
							backgroundColor: "#3541501A "
						}}
						fontSize="large"/>
					خود را بسازید
				</Typography>
			</StyledBox>
			<Typography m={2} textAlign="center" maxWidth="742px" fontSize="16px" lineHeight="36px">
				برای شروع نام پروژه خود را وارد کنید و دکمه شروع کردن را بزنید تا وارد پنل کاربری خود شوید و بعد
				میتوانید به راحتی فرم خود را بسازید
			</Typography>
			<MyInput>
				<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
					<Box width="80%" height="600px" position="relative">
						<Image
							src="/assets/images/Group1.png"
							alt="Example Image"
							layout="fill"
							quality={100}
						/>
					</Box>
				</Box>
			</MyInput>
		</Box>
	);
};

const StyledBox = styled(Box)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	maxWidth: "742px"
});
