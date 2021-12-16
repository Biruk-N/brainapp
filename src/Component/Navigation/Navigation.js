import React from 'react';
// onRoutechange
const Navigation = ({}) =>{
	return (
		<nav style = {{display: 'flex', justifyContent: 'flex-end'}} >
			<p className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		)
}
// onClick={onRouteChange}
export default Navigation;