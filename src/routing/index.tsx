import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Calculator } from '../pages/calculator'

export const Routing = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Calculator />} />
			</Routes>
		</BrowserRouter>
	)
}
