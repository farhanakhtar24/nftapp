// Import React and the HighlightCard component
import React from "react";
import HighlightCard from "./HighlightCard";

// Import the images used for the highlight cards
import ENSPhoto from "../../../public/highlightImages/ENS photo svg.svg";
import BestFlip from "../../../public/assets/highlightImages/Best Flip.svg";
import FirstNFTBought from "../../../public/assets/highlightImages/First NFT Bought.svg";
import PaperHanded from "../../../public/assets/highlightImages/Paper Handed.svg";
import ShouldHaveSold from "../../../public/assets/highlightImages/Should Have Sold.svg";

// Define the type for the props
type Props = {};

// Object containing all the data for the highlight cards
const cardDetails = [
	{
		nftImage: ENSPhoto,
		cardShadowGradient: "bg-[#25B5D5]/10",
		nftTitle: "ENS Linked",
		nftSubtitleColor: "text-[#4BDFFF]",
		marketStatus: "ENS Linked",
		creatorHashtag: "dingaling.eth",
		ethVal: 1.82,
		postedDate: "2 months ago",
		XP: 200,
		shadowColor: "hover:shadow-[#25B5D5]",
	},
	{
		nftImage: BestFlip,
		cardShadowGradient: "bg-[#F8A910]/10",
		nftTitle: "Best Flip",
		nftSubtitleColor: "text-[#FFC148]",
		marketStatus: "Sold",
		creatorHashtag: "CryptoPunk #2131",
		ethVal: 98.5,
		postedDate: "10 days ago",
		XP: 150,
		shadowColor: "hover:shadow-[#F8A910]",
	},
	{
		nftImage: ShouldHaveSold,
		cardShadowGradient: "bg-[#0BF1AD]/10",
		nftTitle: "Should Have Sold fmfdsk",
		nftSubtitleColor: "text-[#44FFC8]",
		marketStatus: "Mint",
		creatorHashtag: "Rare Apepe #6974",
		ethVal: 98.5,
		postedDate: "10 days ago",
		XP: 200,
		shadowColor: "hover:shadow-[#0BF1AD]",
	},
	{
		nftImage: FirstNFTBought,
		cardShadowGradient: "bg-[#25B5D5]/10",
		nftTitle: "First NFT Bought",
		nftSubtitleColor: "text-[#4BDFFF]",
		marketStatus: "Bought",
		creatorHashtag: "BAYC #7925",
		ethVal: 98.5,
		postedDate: "10 days ago",
		XP: 10,
		shadowColor: "hover:shadow-[#25B5D5]",
	},
	{
		nftImage: PaperHanded,
		cardShadowGradient: "bg-[#0BF1AD]/10",
		nftTitle: "Paper Handed",
		nftSubtitleColor: "text-[#44FFC8]",
		marketStatus: "Sold",
		creatorHashtag: "Moonbird #7866",
		ethVal: 98.5,
		postedDate: "10 days ago",
		XP: 200,
		shadowColor: "hover:shadow-[#0BF1AD]",
	},
];

// Define the Highlights component
const Highlights = (props: Props) => {
	return (
		<div className="flex gap-4">
			{/* Map through the cardDetails object and create a HighlightCard component for each card */}
			{cardDetails.map((cardDetail, index) => (
				<HighlightCard
					// add a key to each cardDetail to improve performance and prevent warning messages
					key={index}
					nftImage={cardDetail.nftImage}
					cardShadowGradient={cardDetail.cardShadowGradient}
					nftTitle={cardDetail.nftTitle}
					nftSubtitleColor={cardDetail.nftSubtitleColor}
					marketStatus={cardDetail.marketStatus}
					creatorHashtag={cardDetail.creatorHashtag}
					ethVal={cardDetail.ethVal}
					postedDate={cardDetail.postedDate}
					XP={cardDetail.XP}
					shadowColor={cardDetail.shadowColor}
				/>
			))}
		</div>
	);
};

export default Highlights;
