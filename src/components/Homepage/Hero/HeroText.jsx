export default function HeroText() {
	return (
		<div className="flex flex-col justify-center">
			<h1 className="font-teko text-8xl font-bold w-[40%] tracking-wide drop-shadow-xl">
				I'm <br />
			</h1>
			<h1
				animate={{ y: 0 }}
				className="text-green-400 font-teko text-9xl font-bold w-[40%] tracking-wide drop-shadow-lg">
				Pratham Khandelwal.
			</h1>
			<hr className="border-dashed border-black w-[91%]" />
			<p className="font-nunito text-xl pt-4">
				A Full-stack Web Developer, Freelancer and a 3rd Year Undergraduate
				student
			</p>
		</div>
	);
}
