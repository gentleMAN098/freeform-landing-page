import {Box, Button, ButtonGroup} from "@mui/material";
import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {styled} from "@mui/material/styles";
//icons import
import FolderIcon from '@mui/icons-material/Folder';
import PaletteIcon from '@mui/icons-material/Palette';
import DeleteIcon from '@mui/icons-material/Delete';
import DomainIcon from '@mui/icons-material/Domain';
import Image from "next/image";

export const FeaturesRarelyHeard = () => {
	const [activeButton, setActiveButton] = useState(0);

	const handleButtonClick = (index) => {
		setActiveButton(index);
	};

	const icons = [
		<FolderIcon fontSize="small"/>,
		<PaletteIcon fontSize="small"/>,
		<DeleteIcon fontSize="small"/>,
		<DomainIcon fontSize="small"/>,
	];

	return (
		<Box>
			<Box mb={4}>
				<Box my={4} width="50%" display="flex" flexDirection="column" flexWrap="wrap" alignItems="start"
				     justifyContent="start">
					<Typography fontSize="14px" lineHeight="50px">
						ویژگی های فری فرم
					</Typography>
					<Typography fontSize="46px" variant="h5">
						ویژگی هایی که کمتر در مورد آنها شنیده‌اید
					</Typography>
				</Box>
				<Typography fontSize="16px" lineHeight="36px">
					بعد از اتمام پروسه ساخت فرم یا پروژه خود، به راحتی می‌توانید کدهای آن را در وبسایت خود پیاده سازی و
					یا اضافه
					کنید، بدین شکل که اگر شما ویرایشی در فرم خود اعمال کردید سایت شما نیز به صورت داینامیک آپدیت می‌شود.
				</Typography>
			</Box>
			<StyledBox>
				<CustomButtonGroup sx={{boxShadow: 0}} variant="contained">
					{['مدیریت فایل', 'دیزاین مجزا', 'حذف شده ها', 'دامنه اختصاصی'].map((label, index) => (
						<CustomButton
							key={label}
							className={index === activeButton ? 'active' : ''}
							onClick={() => handleButtonClick(index)}
						>
							{icons[index]}
							<Box component="span" mx={1}>
								{label}
							</Box>
						</CustomButton>
					))}
				</CustomButtonGroup>
			</StyledBox>
			<Box width="100%" height="600px" position="relative">
				<Image
					src="/assets/images/FrameManage.png"
					alt="frame manage"
					layout="fill"
					quality={100}
				/>
			</Box>
		</Box>
	)
}


const CustomButtonGroup = styled(ButtonGroup)({
	direction: "ltr",
	backgroundColor: "#E9E9E9",
	boxShadow: 0,
	borderRadius: "15px",
	'& .MuiButton-root': {
		boxShadow: "none",
		fontSize: "13px",
		color: '#35415080',
		border: "2px solid #E9E9E9",
		backgroundColor: '#E9E9E9',
		borderRadius: "15px",
		'&:hover': {
			backgroundColor: '#354140',
			color: "#FAF603",
		},
	},
	'& .MuiButton-root.active': {
		backgroundColor: '#354150',
		color: "#FAF603",
		'&:hover': {
			backgroundColor: '#354160',
		},
	},
});

const CustomButton = styled(Button)({
	fontSize: '1rem',
	margin: "10px",
	padding: '8px, 30px',
	border: "2px solid red"
})

const StyledBox = styled(Box)({
	display: "flex",
	justifyContent: "center",
	padding: "40px"
})
