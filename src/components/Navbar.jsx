import React, { useEffect, useState } from "react"

export default function Navbar() {
	const [isOpen, setIsOpen] = useState(false)
	const toggleOpen = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		if (isOpen) {
			document.documentElement.classList.add("menu-open")
		} else {
			document.documentElement.classList.remove("menu-open")
		}
	}, [isOpen])

	return (
		<header className="sticky top-0 bg-black/[.4] backdrop-blur-[20px] z-[100] px-4">
			<nav className="md:mx-20">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 relative">
					<a href="#">
						<img src="/images/logo.png" className="w-[50px]" alt="Meta Logo" />
					</a>
					<button
						type="button"
						className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg z-[1000]"
						aria-controls="navbar-default"
						onClick={toggleOpen}
					>
						<span className="text-xl ff-against text-white">
							{isOpen ? "Close" : "Menu"}
						</span>
					</button>

					<div
						className={`${
							isOpen ? "translate-y-0" : "-translate-y-[200%]"
						}  h-screen bg-black/[.9] backdrop-blur-[20px] fixed transition-transform duration-300 ease-in-out z-[999] right-[-38px] left-0 inset-y-0`}
						id="navbar-default"
					>
						<div className="grid content-center h-full w-full">
							<ul className="font-medium flex flex-col items-center mb-40">
								<li>
									<a
										href="#"
										className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-white text-xl ff-against"
									>
										Home
									</a>
								</li>
								<li>
									<a
										href="#bids"
										className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-white text-xl ff-against"
									>
										Auctions
									</a>
								</li>
								<li>
									<a
										href="#how-it-works"
										className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-white text-xl ff-against"
									>
										How it Works
									</a>
								</li>
								<li>
									<a
										href="#faq"
										className="block py-2 pl-3 pr-4 rounded hover:bg-gray-700 hover:text-white text-xl ff-against"
									>
										FAQ
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
			</nav>
		</header>
	)
}
