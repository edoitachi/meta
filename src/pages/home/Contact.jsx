import mainImage from "../../assets/images/person-with-vr.png"
import Input from "../../components/form/Input"
import Textarea from "../../components/form/Textarea"

export default function Contact() {
	return (
		<section
			className="grid flex-row-reverse lg:grid-cols-2 mt-[12rem] lg:mx-20 items-end"
			id="contact-form"
		>
			<div className="flex gap-6 md:gap-12 items-center text-right order-1">
				<div className="flex gap-2 flex-col lg:gap-4 w-full">
					<div className="flex flex-col gap-2 lg:gap-4 w-full lg:flex-row">
						<Input placeholder="Full Name" sx="w-full" />
						<Input placeholder="Email" sx="w-full" />
					</div>
					<Textarea placeholder="Message" rows={5} />
					<button className="ff-against bg-primary rounded-xl p-3 md:p-4 mt-5 md:mt-10">
						Send
					</button>
				</div>
			</div>
			<div className="md:order-1">
				<img
					src={mainImage}
					className="h-[30rem] object-contain scale-x-[-1] ms-auto me-10"
					alt=""
				/>
			</div>
		</section>
	)
}
