import "./EllipseCard.css"
import ellipse from "../assets/images/ellipse.svg"

export default function EllipseCard({
	children,
	bottomTitle,
	topTitle,
	longContent,
	onClick,
}) {
	return (
		<div className="text-center" onClick={onClick}>
			<div
				className="w-[12.5rem] h-[12.5rem] rounded-full relative mx-auto"
				// style={{ boxShadow: "0px 4px 11px 0px rgba(222, 83, 100, 0.25)" }}
			>
				<h4
					className={`ff-against text-sm absolute inset-x-0 top-inherit bottom-[-40px] xl:top-[-40px] ${
						longContent ? "bottom-[-80px] xl:top-[-80px]" : ""
					}`}
				>
					{topTitle}
				</h4>
				<img src={ellipse} alt="" className="circle-svg" />
				<div className="absolute inset-0 grid place-content-center">
					{children}
				</div>
				<h4 className="ff-against mt-6 text-sm absolute inset-x-0">
					{bottomTitle}
				</h4>
			</div>
		</div>
	)
}
