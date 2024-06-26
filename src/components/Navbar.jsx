import Logo from './Navbar/Logo';
import NavList from './Navbar/NavList';

export default function Navbar() {
	return (
		<>
			<nav className="flex justify-center items-end h-[15%] w-[80%] mx-auto">
				<Logo />
				<NavList />
			</nav>
		</>
	);
}
