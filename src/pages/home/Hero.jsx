import mainImage from "../../assets/images/hero/main.png"
import Carousel from "../../components/Carousel"

export default function Hero() {
	return (
		<section className="grid flex-row-reverse lg:grid-cols-2 max-sm:mt-0 mt-10 md:mt-[6rem]">
			<div className="flex md:ms-20 gap-6 md:gap-12 items-center order-1">
				<div className="h-[16rem] w-[2rem] bg-primary"></div>
				<div>
					<h1 className="ff-against text-[2rem] lg:text-[3rem] font-normal">
						Turning thought into{" "}
						<span className="text-primary">virutal reality.</span>
					</h1>
					<p className="font-light text-lg md:max-w-[20rem]">
						We transform your website into fully immersive and interactive web 3
						experiences
					</p>
				</div>
			</div>
			<div className="lg:order-2 max-md:mb-[-4rem] max-sm:my-10">
				<Carousel />
			</div>
		</section>
	)
}
