import React from "react";

// Props interface for the Tag component
interface TagProps {
	name: string;
	value: number;
	selected: boolean;
}

// Tag component that displays a tag with a name, value and selected state
const Tag = ({ name, value, selected }: TagProps) => {
	// Render the tag component
	return (
		<div
			className={`h-[28xp] rounded-[40px] py-[6px] px-[10px] flex gap-2 border font-medium text-xs leading-4 ${
				// Dynamically apply styles based on whether the tag is selected or not
				selected
					? "text-[#FFC148] border-[#FFC148] hover:bg-[#FFC148]/10"
					: "text-[#A2A2A2] border-[#272727] hover:bg-[#1A1A1A]/80"
			} transition-all duration-300 cursor-pointer`}>
			<span>{name}</span>
			<span>{value}%</span>
		</div>
	);
};

export default Tag;
