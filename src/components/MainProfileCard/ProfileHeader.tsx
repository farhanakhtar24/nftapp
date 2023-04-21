import Image from "next/image";
import React from "react";

import ProfileImage from "../../assets/Rectangle 18.svg";

// Define the props for the ProfileHeader component
type Props = {};

// Define the ProfileHeader component
const ProfileHeader = (props: Props) => {
	// Return the JSX for the ProfileHeader component
	return (
		<div className="flex items-center gap-3">
			{/* Render the profile image and progress */}
			<div className="flex flex-col gap-1 items-center">
				{/* Render the radial progress component */}
				<div
					className="radial-progress rotate-180"
					style={{
						"--thickness": "4px",
						"--value": "75",
						"--size": "84px",
						color: "#FFC148",
					}}>
					{/* Render the profile image using the Next.js Image component */}
					<div className="p-2">
						<Image
							src={ProfileImage}
							alt="Profile Image"
							width={999}
							height={999}
							className="rounded-full rotate-180"
						/>
					</div>
				</div>
				{/* Render the level badge */}
				<div className="w-[47px] h-[28px] bg-[#F8A910]/10 rounded-[44px] p-2 flex gap-2 text-[#FFC148] items-center">
					<p className="font-semibold text-xs leading-3">LVL</p>
					<p className="font-semibold text-xs leading-3">2</p>
				</div>
			</div>
			{/* Render the username and address */}
			<div className="flex flex-col items-start gap-0.5 justify-center">
				<span className="font-medium text-[19xp] leading-8 text-white">
					dingaling.eth
				</span>
				<span className="font-normal text-xs leading-5 text-[#A2A2A2]">
					0xadgf....jkld
				</span>
			</div>
		</div>
	);
};

// Export the ProfileHeader component
export default ProfileHeader;
