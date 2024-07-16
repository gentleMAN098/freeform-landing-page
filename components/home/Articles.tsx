import {Box, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {SimpleCard} from "@/components/shared/SimpleCard";

export const Articles = () => {
	const items = [
		{
			title: "چگونه یک فرم بسازیم؟",
			time: "1401/01/01",
			description: "آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",
			imageUrl: "/assets/images/imagesimplecard1.png"
		},
		{
			title: "چگونه یک فرم بسازیم؟",
			time: "1401/01/01",
			description: "آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",
			imageUrl: "/assets/images/imagesimplecard2.png"
		},
		{
			title: "چگونه یک فرم بسازیم؟",
			time: "1401/01/01",
			description: "آپلود فایل ها با استفاده از رمزگذاری آپلود فایل ها با استفاده از رمزگذاری Base64 یک روش معمول است، استفاده از تکنیک...",
			imageUrl: "/assets/images/imagesimplecard3.png"
		}
	]
	return (
		<Box>
			<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
				<Typography fontSize="14px">
					مقالات
				</Typography>
				<Typography fontSize="46px">
					مقالات متنوع فری فرم
				</Typography>
			</Box>
			<Grid py={6} container spacing={2}>
				{items.map((item, i) => (
					<Grid key={i} item xs={12} md={4}>
						<SimpleCard
							title={item.title}
							time={item.time}
							description={item.description}
							imageUrl={item.imageUrl}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	)
}