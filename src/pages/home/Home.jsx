import React, { useState, useEffect } from "react"
import Footer from "../../components/Footer"
import Contact from "./Contact"
import EllipseCards from "./EllipseCards"
import Features from "./Features"
import Hero from "./Hero"
import SmartContract from "./SmartContract"

import circleSvg from "../../assets/images/circle-text.svg"
import { Player } from "@lottiefiles/react-lottie-player"
import arrowDown from "../../assets/images/arrow.json"

export default function Home() {
	const [circleRotation, setCircleRotation] = useState(0)

	const handleScroll = () => {
		const scrollY = window.scrollY
		const rotation = scrollY / 5
		setCircleRotation(rotation)
	}

	useEffect(() => {
		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className="container mx-auto px-4 relative">
			<Hero />

			{/* Make this div move around small circles too */}
			<div className={`relative`}>
				<img
					src={circleSvg}
					alt=""
					style={{
						transform: `rotate(${circleRotation}deg)`,
						transition: "transform 0.4s ease-in-out",
					}}
					className={`absolute right-[1rem] lg:right-[3rem] mt-10 md:mt-20 w-[9rem] h-[9rem]`}
				/>
				<Player
					autoplay
					loop
					src={arrowDown}
					style={{ height: "80px", width: "80px" }}
					className="absolute right-[3rem] lg:right-[5rem] top-[4.5rem] md:top-[6.5rem]"
				></Player>
			</div>

			<Features />
			<SmartContract />
			<EllipseCards />
			<Contact />
		</div>
	)
}
