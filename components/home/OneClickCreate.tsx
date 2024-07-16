import {Box} from "@mui/material";
import Image from "next/image";
import MyInput from "@/components/shared/MyInput";
import React from "react";

export const OneClickCreate = () => {
	return (<Box my={20}>
		<MyInput position="bot">
			<Box display="flex" flexDirection="column" alignItems="center" justifyContent="center">
				<Box width="100%" height="403px" position="relative">
					<Image
						src="/assets/images/Easy.png"
						alt="Example Image"
						layout="fill"
						quality={100}
					/>
				</Box>
			</Box>
		</MyInput>

	</Box>)
}