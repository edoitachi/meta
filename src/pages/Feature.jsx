import Breadcrumb from "../components/Breadcrumb"

export default function Feature() {
	return (
		<div className="container mx-auto lg:px-20">
			<div className="flex gap-8 mt-10 mb-8">
				<div>
					<h3 className="ff-against text-[1.4rem] lg:text-[2rem] font-normal">
						Metaverse Web <span className="text-primary">Builders</span>
					</h3>
					<Breadcrumb />
				</div>
			</div>
			<hr className="border-slate-600 mb-10" />
			<div className="body">
				<div className="grid grid-cols-2 gap-5">
					<div className="">
						<h3 className="ff-against text-[1.4rem] font-normal mb-2">
							Why <span className="text-primary">Us?</span>
						</h3>
						<p className="text-slate-400 mb-4">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Exercitationem quidem quo, totam dolorum nam saepe atque iste
							harum sed porro non eveniet, dolorem possimus officia suscipit
							optio esse quaerat asperiores omnis sunt. Ad ratione provident
							quae accusantium, voluptates dolore quis eos qui suscipit maiores,
							quos placeat omnis ab quisquam nesciunt?
						</p>
						<p className="text-slate-400">
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
							Exercitationem quidem quo, totam dolorum nam saepe atque iste
							harum sed porro non eveniet, dolorem possimus officia suscipit
							optio esse quaerat asperiores omnis sunt. Ad ratione provident
							quae accusantium, voluptates dolore quis eos qui suscipit maiores,
							quos placeat omnis ab quisquam nesciunt?
						</p>
					</div>

					<article
						style={{
							border: "30px solid transparent",
							borderImageSource: 'url("/images/gradient-border.png")',
							borderImageSlice: "30 fill",
							borderImageRepeat: "round",
							zIndex: 2,
						}}
						className="my-10"
					>
						<div className="rounded-lg bg-primary/[.05] backdrop-blur-[15px] p-[30px] m-[-28px]">
							<div className="overview mb-6 gap-5 md:gap-8">
								<div>
									<h4 className="text-xl mb-4">Total Projects</h4>
									<div className="grid grid-cols-4 text-center text-sm">
										<h5>
											20 <br />
											<span className="text-slate-400">Frontend</span>
										</h5>
										<h5>
											2 <br />
											<span className="text-slate-400">Full Stack</span>
										</h5>
										<h5>
											5 <br />
											<span className="text-slate-400">MERN Stack</span>
										</h5>
										<h5>
											15 <br />
											<span className="text-slate-400">Backend</span>
										</h5>
									</div>
								</div>
							</div>
							<hr className="border-gray-600" />
							<h4 className="my-4 text-md">Recent Works</h4>
							<hr className="border-gray-600" />
							<table className="w-full font-light mt-5  border-spacing-[20px] table-auto max-md:text-sm">
								<tbody>
									{/* Heading */}
									<tr className="align-top text-slate-300 h-8 border-b-[1px] border-gray-600">
										<td>Stack</td>
										<td>Rating</td>
										<td>Time</td>
										<td>Client</td>
									</tr>
									{/* Data */}
									<tr className="align-center text-slate-400 border-b-[1px] border-gray-600 h-10">
										<td className="text-white">Blockchain</td>
										<td>4.8</td>
										<td>2 Days Ago</td>
										<td className="text-primary-300">@niftking</td>
									</tr>
									<tr className="align-center text-slate-400 border-b-[1px] border-gray-600 h-10">
										<td className="text-white">Frontend</td>
										<td>4.4</td>
										<td>1 Week Ago</td>
										<td className="text-primary-300">@mikasa</td>
									</tr>
									<tr className="align-center text-slate-400 border-b-[1px] border-gray-600 h-10">
										<td className="text-white">Full Stack</td>
										<td>5</td>
										<td>2 Weeks Ago</td>
										<td className="text-primary-300">@adam</td>
									</tr>
								</tbody>
							</table>
						</div>
					</article>
				</div>
			</div>
		</div>
	)
}
