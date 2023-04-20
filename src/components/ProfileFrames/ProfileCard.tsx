import Image, { StaticImageData } from "next/image";
import React from "react";
import EthereumLogo from "../../assets/ethLogo.svg";

type Props = {
	profileImage: StaticImageData; //Type definition for the profile image.
	userName: string; // Type definition for the user's name.
	purchaseDate: string; // Type definition for the date of purchase.
	purchaseEthValue: number; // Type definition for the value of Ethereum purchased.
	floorEthValue: number; // Type definition for the floor Ethereum value.
	floorJump: number; // Type definition for the percentage jump from the floor Ethereum value.
};

// Define the ProfileCard component with destructured Props as parameter
const ProfileCard = ({
	profileImage,
	userName,
	purchaseDate,
	purchaseEthValue,
	floorEthValue,
	floorJump,
}: Props) => {
	return (
		// Card container with custom styling
		<div className="w-[201px] h-[305px] rounded-lg px-1 pt-1 pb-2 bg-[#111111] flex flex-col gap-4">
			{/* User profile image with purchase date */}
			<div className="w-[193px] h-[193px] rounded-[4px] relative">
				{/* Displaying profile image using Next.js Image component */}
				<Image
					src={profileImage}
					alt="profileImage"
					width={999}
					height={999}
					className="z-0"
				/>
				{/* Displaying purchased date */}
				<div
					className="w-[69px] h-[22px] absolute bottom-[4px] right-[4px] rounded-[31px] py-[1px] px-[6px] bg-[#000000]/50 z-10
				flex items-center justify-center backdrop-blur">
					<p className="font-medium text-xs leading-5 text-[#FFF]">
						{purchaseDate}
					</p>
				</div>
			</div>
			<div className="p-1 flex flex-col gap-2">
				{/* Displaying user name */}
				<p className="font-medium text-sm leading-5 text-[#FAFAFA]">
					{userName}
				</p>
				{/* Displaying purchased Ethereum value */}
				<div className="flex justify-between items-center font-medium text-xs leading-5">
					<span className="text-[#A2A2A2] ">Bought</span>
					<span className="text-[#FAFAFA] flex gap-1 items-center">
						{purchaseEthValue}
						{/* Displaying Ethereum logo */}
						<Image
							src={EthereumLogo}
							alt="Ethereum Logo"
							width={999}
							height={999}
							className="w-[12px] h-[12px]"
						/>
					</span>
				</div>
				{/* Displaying floor Ethereum value */}
				<div className="flex justify-between items-center font-medium text-xs leading-5">
					<span className="text-[#A2A2A2]">Floor</span>
					<div>
						<span className="text-[#FAFAFA] flex gap-1 items-center">
							{floorEthValue}
							{/* Displaying Ethereum logo */}
							<Image
								src={EthereumLogo}
								alt="Ethereum Logo"
								width={999}
								height={999}
								className="w-[12px] h-[12px]"
							/>
							{/* Displaying floor jump percentage with conditional styling */}
							<span
								className={`font-normal text-xs leading-5 ${
									floorJump > 0
										? "text-[#19ED7B]"
										: "text-[ #FF4D4D]"
								}`}>
								{floorJump > 0 ? "+" : ""}
								{floorJump}%
							</span>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileCard;
