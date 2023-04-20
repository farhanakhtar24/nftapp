import React from "react";
import ProfileHeader from "./ProfileHeader";

type Props = {};

const MainProfileCard = (props: Props) => {
	return (
		<div
			className="w-[292px] h-[640px] bg-[#111111] rounded-[16px] px-4 pt-4 pb-6
        flex flex-col gap-4">
			<ProfileHeader />
		</div>
	);
};

export default MainProfileCard;
