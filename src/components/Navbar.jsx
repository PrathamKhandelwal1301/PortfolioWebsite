import Logo from './Homepage/Logo';
import NavList from './Homepage/NavList';

export default function Navbar() {
	return (
		<nav className="flex justify-center items-end h-36 w-[85%] mx-auto">
			<Logo />
			<NavList />
		</nav>
	);
}
