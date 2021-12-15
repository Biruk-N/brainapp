import React from 'react';

const Navigation = ({onRoutechange}) =>{
	return (
		<nav style = {{display: 'flex', justifyContent: 'flex-end'}} onClick={onRouteChange}>
			<p className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		)
}

export default Navigation;