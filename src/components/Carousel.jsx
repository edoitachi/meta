import "./Carousel.css"
import { AnimatePresence, motion } from "framer-motion"
import { useState, useEffect } from "react"
import image1 from "../assets/images/hero/slide-1.png"
import image2 from "../assets/images/hero/slide-2.png"
import image3 from "../assets/images/hero/slide-3.png"

export default function Carousel() {
	const [[activeIndex, direction], setActiveIndex] = useState([0, 0])
	const items = [
		{
			key: 1,
			img: image1,
		},
		{
			key: 2,

			img: image2,
		},
		{
			key: 3,
			img: image3,
		},
	]

	// we want the scope to be always to be in the scope of the array so that the carousel is endless
	const indexInArrayScope =
		((activeIndex % items.length) + items.length) % items.length

	// so that the carousel is endless, we need to repeat the items twice
	// then, we slice the the array so that we only have 3 items visible at the same time
	const visibleItems = [...items, ...items].slice(
		indexInArrayScope,
		indexInArrayScope + 3
	)
	const handleClick = newDirection => {
		setActiveIndex(prevIndex => [prevIndex[0] + newDirection, newDirection])
	}

	useEffect(() => {
		// Automatic sliding interval
		const interval = setInterval(() => {
			handleClick(1)
		}, 3000) // Set the slide duration (in milliseconds)

		return () => {
			clearInterval(interval)
		}
	}, [activeIndex])

	return (
		<div className="main-wrapper relative mb-10">
			<div className="wrapper w-[15rem] md:w-[17rem] lg:w-[22rem]">
				{/*AnimatePresence is necessary to show the items after they are deleted because only max. 3 are shown*/}
				<AnimatePresence mode="popLayout" initial={false}>
					{visibleItems.map(item => {
						// The layout prop makes the elements change its position as soon as a new one is added
						// The key tells framer-motion that the elements changed its position
						return (
							<motion.div
								className="card"
								key={item.key}
								layout
								custom={{
									direction,
									position: () => {
										if (item === visibleItems[0]) {
											return "left"
										} else if (item === visibleItems[1]) {
											return "center"
										} else {
											return "right"
										}
									},
								}}
								variants={variants}
								initial="enter"
								animate="center"
								exit="exit"
								transition={{ duration: 1 }}
							>
								<img
									src={item.img}
									alt=""
									className="w-full h-full object-fit"
								/>
							</motion.div>
						)
					})}
				</AnimatePresence>
			</div>
			<div className="buttons bg-transparent w-full flex justify-between align-center absolute z-10 bottom-0 top-0 left-0 right-0 grid grid-cols-2">
				<motion.button onClick={() => handleClick(-1)}></motion.button>
				<motion.button onClick={() => handleClick(1)}></motion.button>
			</div>
		</div>
	)
}

const variants = {
	enter: ({ direction }) => {
		return { scale: 0.2, x: direction < 1 ? 50 : -50, opacity: 0 }
	},
	center: ({ position, direction }) => {
		return {
			scale: position() === "center" ? 1 : 0.9,
			x: 0,
			zIndex: getZIndex({ position, direction }),
			opacity: position() === "center" ? 1 : 0.5,
		}
	},
	exit: ({ direction }) => {
		return { scale: 0.2, x: direction < 1 ? -50 : 50, opacity: 0 }
	},
}

function getZIndex({ position, direction }) {
	const indexes = {
		left: direction > 0 ? 2 : 1,
		center: 3,
		right: direction > 0 ? 1 : 2,
	}
	return indexes[position()]
}
