// Importing necessary modules and assets
import Image, { StaticImageData } from "next/image";
import React from "react";
import EthereumLogo from "../../assets/ethLogo.svg";

// Defining Props type interface
type Props = {
	nftImage: StaticImageData; // Static image data for the NFT image
	cardShadowGradient: string; // CSS gradient string for card shadow effect
	nftTitle: string; // Title of the NFT
	nftSubtitleColor: string; // CSS color string for subtitle text color
	marketStatus: string; // Market status text for NFT
	creatorHashtag: string; // Hashtag of the creator
	ethVal: number; // Ethereum value of the NFT
	postedDate: string; // Date when the NFT was posted
	XP: number; // XP points earned
	shadowColor: string; // CSS color string for card shadow effect
};

// Defining HighlightCard component with destructured Props as parameter
const HighlightCard = ({
	nftImage,
	cardShadowGradient,
	nftTitle,
	nftSubtitleColor,
	marketStatus,
	creatorHashtag,
	ethVal,
	postedDate,
	XP,
	shadowColor,
}: Props) => {
	return (
		// Card container with custom styling
		<div
			className={`group w-[201px] h-[148px] bg-[#111111] p-[10px] rounded-[16px] flex flex-col gap-6 overflow-hidden
		hover:shadow-2xl ${shadowColor} transition-all cursor-pointer duration-500`}>
			<div className="flex gap-3 relative">
				{/* Shadow effect for NFT image */}
				<div
					className={`absolute -top-[69px] -left-[58px] w-[174px] h-[174px] ${cardShadowGradient} blur-xl rounded-full`}
				/>
				{/* Displaying NFT image using Next.js Image component */}
				<Image
					src={nftImage}
					alt={nftTitle}
					width={999}
					height={999}
					className={`w-[52px] h-[52px] rounded-[8px] bg-[#2C2C2C] z-10`}
				/>
				{/* NFT title and market status */}
				<div className="flex flex-col gap-2 truncate">
					<p className="font-medium text-sm text-[#FAFAFA] leading-5 truncate">
						{nftTitle}
					</p>
					<p
						className={`font-normal text-xs ${nftSubtitleColor} px-2 py-1 leading-5`}>
						{marketStatus}
					</p>
				</div>
			</div>
			<div className="flex flex-col gap-2">
				{/* Creator hashtag and Ethereum value */}
				<div className="flex justify-between items-center">
					<span className="text-[#A2A2A2] font-medium text-xs tracking-wide leading-5">
						{creatorHashtag}
					</span>
					<span className="text-[#FAFAFA] font-medium text-xs flex gap-1 items-center leading-5">
						{ethVal}
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
				{/* Posted date and XP points */}
				<div className="flex justify-between">
					<span className="text-[#A2A2A2] font-normal text-xs leading-5">
						{postedDate}
					</span>
					<span
						className={`${
							XP > 0 ? "text-[#19ED7B]" : "text-[#FF4D4D]"
						} font-normal text-xs leading-5`}>
						{XP > 0 ? "+" : ""}
						{XP}XP
					</span>
				</div>
			</div>
		</div>
	);
};

export default HighlightCard;
