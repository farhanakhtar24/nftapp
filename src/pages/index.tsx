import Highlights from "@/components/Highlights/Highlights";
import MainProfileCard from "@/components/MainProfileCard/MainProfileCard";
import ProfileFrames from "@/components/ProfileFrames/ProfileFrames";
import React from "react";

type Props = {};

const index = (props: Props) => {
	return (
		<main className="w-screen h-screen bg-bgColor flex justify-center items-center gap-10">
			<div className="flex gap-10">
				<MainProfileCard />
				<div className="flex flex-col gap-10 justify-center">
					<Highlights />
					<ProfileFrames />
				</div>
			</div>
		</main>
	);
};

export default index;
