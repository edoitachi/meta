import mainImage from "../../assets/images/person-with-vr.png"

export default function SmartContract() {
	return (
		<section className="grid flex-row-reverse lg:grid-cols-2 mt-[6rem] ">
			<div className="md:ms-20">
				<img src={mainImage} className="h-[30rem] object-contain" alt="" />
			</div>
			<div className="flex gap-6 md:gap-12 items-center order-1 text-right md:me-20 ">
				<div>
					<h1 className="ff-against text-[2rem] lg:text-[3rem] font-normal mb-2">
						Smart Contract <span className="text-primary">Development</span>
					</h1>
					<p className="font-light text-lg md:max-w-[20rem] ms-auto">
						Token Creation: A “token” or “altcoins” usually describes
						cryptocurrency. But they also describe other crypto assets that run
						on top of other cryptocurrency blockchain.
					</p>
				</div>
				<div className="h-[20rem]  md:h-[16rem] w-[1rem] md:w-[2rem] bg-primary shrink-0"></div>
			</div>
		</section>
	)
}
