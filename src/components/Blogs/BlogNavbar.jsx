import BlogButton from '../Navbar/BlogButton';
import Logo from '../Navbar/Logo';

export default function BlogNavbar() {
	return (
		<>
			<nav className="flex justify-between items-end h-[15%] w-[80%] mx-auto">
				<Logo />
				<BlogButton to="/">Home</BlogButton>
			</nav>
		</>
	);
}
