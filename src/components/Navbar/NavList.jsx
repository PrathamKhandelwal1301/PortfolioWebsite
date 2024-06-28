import NavItem from './NavItem';
import BlogButton from './BlogButton';

export default function NavItems() {
	return (
		<>
			<div className="flex justify-end w-[100%] items-center space-x-12">
				<NavItem to={'about'}>About</NavItem>
				<NavItem to={'projects'}>Projects</NavItem>
				<BlogButton to={'/blogs'}>Blogs</BlogButton>
			</div>
		</>
	);
}
