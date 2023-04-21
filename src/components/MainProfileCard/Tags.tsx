import React from "react";
import Tag from "./Tag";

type Props = {};

// The list of tag details that will be displayed
const TagsDetails = [
	{
		name: "Art",
		value: 12,
		selected: true,
	},
	{
		name: "Utility",
		value: 12,
		selected: true,
	},
	{
		name: "PFP",
		value: 12,
		selected: false,
	},
	{
		name: "Metaverse",
		value: 12,
		selected: false,
	},
	{
		name: "Gaming",
		value: 12,
		selected: false,
	},
	{
		name: "PFP",
		value: 12,
		selected: false,
	},
	{
		name: "ens",
		value: 12,
		selected: false,
	},
];

const Tags = (props: Props) => {
	return (
		// The container for the tags
		<div className="w-[260px] gap-2 flex flex-wrap">
			{/* Map over the tag details and create a <Tag /> component for each */}
			{TagsDetails.map((tag, index) => (
				<Tag
					key={index}
					name={tag.name}
					value={tag.value}
					selected={tag.selected}
				/>
			))}
		</div>
	);
};

export default Tags;
