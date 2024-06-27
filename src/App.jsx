import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Loader from './components/Loader';

const Homepage = lazy(() => import('./pages/Homepage'));
const Blogs = lazy(() => import('./pages/Blogs'));

export default function App() {
	return (
		<div className="bg-offWhite h-full">
			<BrowserRouter>
				<Suspense fallback={<Loader />}>
					<Routes>
						<Route path="/" element={<Homepage />} />
						<Route path="/blogs" element={<Blogs />} />
					</Routes>
				</Suspense>
			</BrowserRouter>
		</div>
	);
}
