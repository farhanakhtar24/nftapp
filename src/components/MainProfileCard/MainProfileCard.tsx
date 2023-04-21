// Importing necessary modules
import React from "react";
import ProfileHeader from "./ProfileHeader"; // Importing a custom component from a local file
import TwitterIcon from "../../assets/Twitter icon.svg"; // Importing an SVG icon from a local file
import WebIcon from "../../assets/Social Icons.svg"; // Importing an SVG icon from a local file
import Image from "next/image"; // Importing the Image component from Next.js
import CommImage1 from "../../assets/communityImages/Rectangle 1599.svg"; // Importing an SVG image from a local file
import CommImage2 from "../../assets/communityImages/Rectangle 1600.svg"; // Importing an SVG image from a local file
import CommImage3 from "../../assets/communityImages/Rectangle 1601.svg"; // Importing an SVG image from a local file
import CommImage4 from "../../assets/communityImages/Rectangle 1602.svg"; // Importing an SVG image from a local file
import Tags from "./Tags"; // Importing a custom component from a local file
import Arrows from "../../assets/Chevron.svg"; // Importing an SVG icon from a local file

// Declaring the Props type
type Props = {};

// Defining the MainProfileCard component
const MainProfileCard = (props: Props) => {
	return (
		<div
			// Defining the classes for the container div
			className="w-[292px] h-[640px] bg-[#111111] rounded-[16px] px-4 pt-4 pb-6
        flex flex-col gap-8 hover:shadow-2xl transition-all duration-300">
			{/* Adding the ProfileHeader component */}
			<ProfileHeader />
			{/* Adding social icons and links */}
			<div className="flex items-center gap-4">
				<div
					className="w-[126px] h-[32px] rounded-[24px] py-1 px-2 flex gap-2 items-center bg-[#1A1A1A]
				border border-transparent hover:border-[#606060] transition-all duration-300 cursor-pointer">
					{/* Adding the Twitter icon */}
					<Image
						src={TwitterIcon}
						alt="Twitter Icon"
						width={999}
						height={999}
						className="w-[24px] h-[24px]"
					/>
					{/* Adding the Twitter username */}
					<span className="font-normal text-xs leading-5">
						@dingalingts
					</span>
				</div>
				{/* Adding the Web icon */}
				<Image
					src={WebIcon}
					alt="Web Icon"
					width={999}
					height={999}
					className="w-[32px] h-[32px] bg-[#1A1A1A] rounded-[24px] p-1 border border-transparent hover:border-[#606060] transition-all duration-300 cursor-pointer"
				/>
			</div>
			{/* Adding the profile bio */}
			<div className="w-[258px] font-normal text-sm leading-[23.8px] text-[#A2A2A2]">
				An Investor / Collector of #NFTs and OG enthusiast. Co-Founder
				and owner of 📦 @nftboxes
			</div>
			{/* Adding community images */}
			<div className=" flex flex-col gap-2">
				<div className="font-normal text-xs leading-5 text-[#A2A2A2]">
					Common communties (3)
				</div>
				<div className="flex gap-2">
					{/* Adding community images */}
					<div className="w-[48px] h-[48px] rounded-[8px] cursor-pointer overflow-hidden">
						<Image
							src={CommImage1}
							alt="Community Image"
							width={999}
							height={999}
							className="hover:scale-110  transition-all duration-150"
						/>
					</div>
					<div className="w-[48px] h-[48px] rounded-[8px] cursor-pointer overflow-hidden">
						<Image
							src={CommImage2}
							alt="Community Image"
							width={999}
							height={999}
							className="hover:scale-110  transition-all duration-150"
						/>
					</div>
					<div className="w-[48px] h-[48px] rounded-[8px] cursor-pointer overflow-hidden">
						<Image
							src={CommImage3}
							alt="Community Image"
							width={999}
							height={999}
							className="hover:scale-110  transition-all duration-150"
						/>
					</div>
					<div className="w-[48px] h-[48px] rounded-[8px] cursor-pointer overflow-hidden">
						<Image
							src={CommImage4}
							alt="Community Image"
							width={999}
							height={999}
							className="hover:scale-110 transition-all duration-150"
						/>
					</div>
				</div>
			</div>
			{/* Adding the Tags component */}
			<Tags />
			<button
				className="w-[260px] rounded-[24px] gap-2 px-[37px] py-3 border border-[#A2A2A2] font-normal
            text-sm leading-5 flex justify-center items-center active:scale-[99%] hover:text-white hover:border-white
             transition-all">
				<span className="text-[#FAFAFA]">Subscribe</span>
				<Image
					src={Arrows}
					alt="Arrows"
					width={999}
					height={999}
					className="w-[16px] h-[16px]"
				/>
			</button>
		</div>
	);
};

export default MainProfileCard;
