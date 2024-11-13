import { FunctionComponent } from "react";
import Icon from "./Icon";
interface TheSearchBarProps {
	formActionLink?: string | "#";
	elementID: string | "search";
	placeHolder: string | "Search...";
	searchClass: string;
}

const TheSearchBar: FunctionComponent<TheSearchBarProps> = ({
	searchClass,
	elementID,
	formActionLink,
	placeHolder,
}) => {
	return (
		<>
			<form action={formActionLink} method="GET" className="md:hidden mb-2">
				<label htmlFor="sidebar-search" className="sr-only">
					Search
				</label>
				<div className="relative">
					<Icon
						wrapClassName="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
						svgProps={{
							className: "w-5 h-5 text-gray-500 dark:text-gray-400",
							fill: "currentColor",
							viewBox: "0 0 20 20",
						}}
						pathProps={[
							{
								direction:
									"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z",
							},
						]}
						onClick={() => {
							console.log("search");
						}}
					/>

					<input type="text" name="search" id={elementID} className={searchClass} placeholder={placeHolder} />
				</div>
			</form>
		</>
	);
};

export default TheSearchBar;
