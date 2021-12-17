import React from 'react';
// 
const Navigation = ({onRouteChange}) =>{
	return (
		if (isSignedIn) {
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}} >
		 <p onClick={()=> onRouteChange('Signin')} className = 'f3 link dim black underline pa3 pointer'>Sign Out</p>
		</nav>
		}else{
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}} >
			<p onClick={()=> onRouteChange('Signin')} className = 'f3 link dim black underline pa3 pointer'>Sign in</p>
			</nav>
			<nav style = {{display: 'flex', justifyContent: 'flex-end'}} >
			<p onClick={()=> onRouteChange('Signin')} className = 'f3 link dim black underline pa3 pointer'>Register</p>
			</nav>
					
		}
		)
}

export default Navigation;