// Import React and the ProfileCard component
import React from "react";
import ProfileCard from "./ProfileCard";

// Import the images used for the profile images
import Azuki from "../../assets/profileImages/Azuki.svg";
import MAYC from "../../assets/profileImages/MAYC.svg";
import MoonBird from "../../assets/profileImages/MoonBird.svg";
import Otherdeed from "../../assets/profileImages/Otherdeed.svg";
import Cryptoz from "../../assets/profileImages/Cryptoz.svg";

// Define the type for the props
type Props = {};

// An array of objects that contains details about each profile card
const ProfileCardDetails = [
	{
		profileImage: Azuki,
		userName: "Azuki #9839",
		purchaseDate: "3 Months",
		purchaseEthValue: 2.82,
		floorEthValue: 12.74,
		floorJump: 21.6,
	},
	{
		profileImage: MAYC,
		userName: "MAYC #9839",
		purchaseDate: "3 Months",
		purchaseEthValue: 2.82,
		floorEthValue: 12.74,
		floorJump: 21.6,
	},
	{
		profileImage: MoonBird,
		userName: "MoonBird #9839",
		purchaseDate: "3 Months",
		purchaseEthValue: 2.82,
		floorEthValue: 12.74,
		floorJump: 21.6,
	},
	{
		profileImage: Otherdeed,
		userName: "Otherdeed #9839",
		purchaseDate: "3 Months",
		purchaseEthValue: 2.82,
		floorEthValue: 12.74,
		floorJump: 21.6,
	},
	{
		profileImage: Cryptoz,
		userName: "Cryptoz #9839",
		purchaseDate: "3 Months",
		purchaseEthValue: 2.82,
		floorEthValue: 12.74,
		floorJump: 21.6,
	},
];

// A functional component that renders a row of profile cards
const ProfileFrames = (props: Props) => {
	return (
		<div className="flex gap-4">
			{/* Map over the ProfileCardDetails array to create a ProfileCard component for each object */}
			{ProfileCardDetails.map((cardDetails, index) => (
				<ProfileCard
					// add a key to each cardDetail to improve performance and prevent warning messages
					key={index}
					profileImage={cardDetails.profileImage}
					userName={cardDetails.userName}
					purchaseDate={cardDetails.purchaseDate}
					purchaseEthValue={cardDetails.purchaseEthValue}
					floorEthValue={cardDetails.floorEthValue}
					floorJump={cardDetails.floorJump}
				/>
			))}
		</div>
	);
};

export default ProfileFrames;
