export default function AboutMe() {
	return (
		<div className="h-fit grid-cols-12 grid pt-8">
			<div className="col-span-5 font-teko font-bold text-8xl flex justify-center items-end drop-shadow-lg text-left">
				<h1 className="w-[80%]">
					Know <br />
					<span className="text-green-400 text-9xl">About Me.</span>
				</h1>
			</div>
			<div className="col-span-7 flex text-ellipsis items-center w-[70%] text-center font-nunito font-semibold text-xl italic">
				"Hey there! I'm Pratham Khandelwal, a full stack developer who loves
				creating seamless web experiences from start to finish. I've been coding
				for 2 years now and enjoy the challenge of building both the front-end
				and back-end of applications. I'm passionate about making user-friendly
				interfaces and ensuring the behind-the-scenes stuff runs smoothly too.
				When I'm not coding, you can find me gaming or reading books , always
				eager to learn and grow in both my professional and personal life. Let's
				build something awesome together!"
			</div>
		</div>
	);
}
