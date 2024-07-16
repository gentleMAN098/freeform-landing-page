import React from 'react';
import {Box, Typography} from "@mui/material";
import {styled} from "@mui/material/styles";
import MyInput from "@/components/shared/MyInput";
import Image from "next/image";

export const NoTroubleCreateForm = () => {

	return (
		<Box my={4} display="flex" flexDirection="column" alignItems="center" justifyContent="center">
			<Typography my={2} textAlign="center" fontSize="14px" lineHeight="24px">
				فرم را در سایت خود استفاده کنید
			</Typography>
			<StyledBox>
				<Typography textAlign="center" fontSize="52px" lineHeight="72px">
					راه اندازی فرم در وبسایت خود بدون دردسر
				</Typography>
			</StyledBox>
			<Typography m={2} textAlign="center" maxWidth="742px" fontSize="16px" lineHeight="36px">
				بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای آن را در وبسایت خود پیاده سازی و یا
				اضافه کنید، بدین شکل که اگر شما ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت
				می‌شود.
			</Typography>
			<Box width="80%" height="490px" position="relative">
				<Image
					src="/assets/images/Group2bg.png"
					alt="Example Image"
					layout="fill"
					quality={100}
				/>
				<Box width="616px" height="364px" position="absolute" top="calc(50% - 200px)" left="calc(50% - 300px)"
				     zIndex="1">
					<Image
						src="/assets/images/Group2.png"
						alt="Example Image"
						layout="fill"
						quality={100}
					/>
				</Box>
			</Box>
		</Box>
	);
};


const StyledBox = styled(Box)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	maxWidth: "742px"
});
