import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import { Routing } from './routing'
import { Toaster } from 'react-hot-toast'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
	<React.StrictMode>
		<Toaster
			position={'top-right'}
			toastOptions={{
				style: {
					margin: '15px',
					background: '#828282',
					color: '#fff',
					width: '340px'
				},
				className: 'text-base',
				duration: 3000
			}}
		/>
		<Routing />
	</React.StrictMode>
)
