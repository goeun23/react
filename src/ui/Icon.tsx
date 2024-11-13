import { FunctionComponent } from "react";

interface svgProps {
	className: string;
	fill: string;
	viewBox: string;
}
interface PathProps {
	fillRule?: "evenodd" | "nonzero" | "inherit" | undefined;
	clipRule?: "evenodd" | "nonzero" | "inherit" | undefined;
	direction: string;
}
interface IconProps {
	areaHidden?: boolean | false;
	wrapClassName?: string;
	svgProps: svgProps;
	pathProps: PathProps[];
	onClick: () => void; //  onClick 속성을 추가하고, 반환값이 없는 함수 타입으로 지정
}

const Icon: FunctionComponent<IconProps> = ({ areaHidden, onClick, wrapClassName, svgProps, pathProps }) => {
	return (
		<div  className={wrapClassName}>
			<svg
				aria-hidden={areaHidden}
				className={svgProps.className}
				fill={svgProps.fill}
				viewBox={svgProps.viewBox}
				xmlns="http://www.w3.org/2000/svg"
			>
				{pathProps.map((path, index) => (
                    <path key={index}
                        onClick={onClick}
                        fillRule={path.fillRule ?? "evenodd"}
                        clipRule={path.clipRule ?? "evenodd"}
                        d={path.direction} />
				))}
			</svg>
		</div>
	);
};

export default Icon;
