import { NavLink } from 'react-router-dom';
import NavItem from './NavItem';
import BlogButton from './BlogButton';

export default function NavItems() {
	return (
		<>
			<div className="flex justify-end w-[80%] items-center space-x-12">
				<NavItem route="/">Home</NavItem>
				<NavItem route="/about">About</NavItem>
				<NavItem route="/projects">Projects</NavItem>
				<BlogButton />
			</div>
		</>
	);
}
