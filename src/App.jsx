import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';

const Homepage = lazy(() => import('./pages/Homepage'));
const About = lazy(() => import('./pages/About'));
const Blogs = lazy(() => import('./pages/Blogs'));
const Projects = lazy(() => import('./pages/Projects'));

export default function App() {
	return (
		<div className="bg-offWhite h-full">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/about" element={<About />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/blogs" element={<Blogs />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}
