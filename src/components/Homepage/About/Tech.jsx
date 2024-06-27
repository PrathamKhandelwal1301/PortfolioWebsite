import Figma from './ApplicationSvg/Figma';
import Github from './ApplicationSvg/Github';
import MSoffice from './ApplicationSvg/MSoffice';
import Postman from './ApplicationSvg/Postman';
import VScode from './ApplicationSvg/VScode';
import Express from './BackendSvg/Express';
import GraphQL from './BackendSvg/GraphQL';
import MonogoDB from './BackendSvg/MonogoDB';
import Node from './BackendSvg/Node';
import Passport from './BackendSvg/Passport';
import PostreSQL from './BackendSvg/PostreSQL';
import Supabase from './BackendSvg/Supabase';
import Css from './FrontendSvg/Css';
import Html from './FrontendSvg/Html';
import Js from './FrontendSvg/Js';
import Next from './FrontendSvg/Next';
import React from './FrontendSvg/React';
import Redux from './FrontendSvg/Redux';
import Tailwind from './FrontendSvg/Tailwind';
import Arduino from './Misc/Arduino';
import Cpp from './Misc/Cpp';
import Python from './Misc/Python';
import Vercel from './Misc/Vercel';
import Git from './Misc/Git';

export default function Tech() {
	return (
		<div className="grid grid-cols-12 grid-rows-12 h-[50vh] w-full gap-5">
			<div className="col-span-8 row-span-6 border-2 border-dashed border-black rounded-lg hover:border-solid hover:bg-green-400 hover:text-white duration-300 font-teko text-3xl hover:shadow-hoverShadow flex-col">
				<h1 className=" w-[95%] mx-auto flex items-end h-[22%]">Frontend</h1>
				<div className="grid grid-cols-12 grid-rows-2 h-[70%] w-[80%] mx-auto items-center">
					<React />
					<Html />
					<Css />
					<Js />
					<Redux />
					<Tailwind />
					<Next />
				</div>
			</div>
			<div className="col-span-4 row-span-12 border-2 border-dashed border-black rounded-lg hover:border-solid hover:bg-green-400 hover:text-white duration-300 font-teko text-3xl hover:shadow-hoverShadow flex-col">
				<h1 className=" w-[90%] mx-auto flex items-end h-[10%]">Backend</h1>
				<div className="grid grid-cols-2 grid-rows-4 h-[85%] items-center">
					<Node />
					<Express />
					<PostreSQL />
					<MonogoDB />
					<Supabase />
					<Passport />
					<GraphQL />
				</div>
			</div>
			<div className="col-span-4 row-span-6 border-2 border-dashed border-black rounded-lg hover:border-solid hover:bg-green-400 hover:text-white duration-300 font-teko text-3xl hover:shadow-hoverShadow flex-col">
				<h1 className=" w-[90%] mx-auto flex items-center h-[30%]">
					Applications
				</h1>
				<div className="grid grid-cols-6 grid-rows-2 h-[60%] items-center">
					<VScode />
					<Postman />
					<Github />
					<Figma />
					<MSoffice />
				</div>
			</div>
			<div className="col-span-4 row-span-6 border-2 border-dashed border-black rounded-lg hover:border-solid hover:bg-green-400 hover:text-white duration-300 font-teko text-3xl hover:shadow-hoverShadow flex-col">
				<h1 className=" w-[90%] mx-auto flex items-center h-[30%]">Misc.</h1>
				<div className="grid grid-cols-6 grid-rows-2 h-[60%] items-center">
					<Cpp />
					<Arduino />
					<Python />
					<Vercel />
					<Git />
				</div>
			</div>
		</div>
	);
}
