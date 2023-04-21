// Importing necessary components
import Highlights from "@/components/Highlights/Highlights";
import MainProfileCard from "@/components/MainProfileCard/MainProfileCard";
import ProfileFrames from "@/components/ProfileFrames/ProfileFrames";
import React from "react";

type Props = {};

const index = (props: Props) => {
	// Render the main layout of the page, consisting of MainProfileCard, Highlights and ProfileFrames components
	return (
		<main className="w-screen h-screen bg-bgColor flex justify-center items-center gap-10">
			<div className="flex gap-10">
				<MainProfileCard />{" "}
				{/* Display the MainProfileCard component */}
				<div className="flex flex-col gap-10 justify-center">
					<Highlights /> {/* Display the Highlights component */}
					<ProfileFrames />{" "}
					{/* Display the ProfileFrames component */}
				</div>
			</div>
		</main>
	);
};

export default index;
