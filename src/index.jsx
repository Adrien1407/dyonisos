//# *************************************************************************** #
//                                                                              #
//                                                         :::      ::::::::    #
//    index.jsx                                          :+:      :+:    :+:    #
//                                                     +:+ +:+         +:+      #
//    By: wszurkow <wszurkow@student.42.fr>          +#+  +:+       +#+         #
//                                                 +#+#+#+#+#+   +#+            #
//    Created: 2022/09/07 22:53:05 by wszurkow          #+#    #+#              #
//    Updated: 2022/09/07 22:53:24 by wszurkow         ###   ########.fr        #
//                                                                              #
//# *************************************************************************** #

// =============================================================================
// ---------------------------------- IMPORTS ----------------------------------
// =============================================================================

import React           from 'react';
import ReactDOM        from 'react-dom/client';

import Marquee       from "react-fast-marquee";
import {useMediaQuery} from 'react-responsive';
//import {Collapsible}   from 'react-collapsible';

import "./global.css"

// =============================================================================
// ----------------------------------- MEDIA -----------------------------------
// =============================================================================

import placeholder from './img/placeholder.jpg'
import placeholder_logo from './img/placeholder_logo.png'





// =============================================================================
// -------------------------- DEFINITION OF VARIABLES --------------------------
// =============================================================================

const BREAKPOINT = 800; // Value of responsive breakpoint (width) in px




// =============================================================================
// ---------------------------------- MOBILE -----------------------------------
// =============================================================================

const Mobile = () => {
	return (
		<div className="flex col">


			{/* ================================================================ */}
			{/* ---------------------------- PAGE 1 ---------------------------- */}
			{/* ================================================================ */}

				<div className="flex w100 h10 bgBlack fixed absolute " style={{backgroundColor: "rgba(0, 0, 0, 0.48)", zIndex: 1, top: 0, flexDirection:"row-reverse"}}>
					<div className="textPink h100 center" style={{paddingRight: "3%"}}>
						BURGER MENU
					</div>
				</div>



			<div className="flex col fillv">
				<img src={placeholder} alt="Vine field" className="minh100 minw100 fixed" style={{objectFit:"cover", zIndex: -99}}/>
				<div className="flex col center textWhite h90">

					<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
					<p>	DYONISOS</p>
					<p>	L'AGENCE</p>
					<p>	VINS CHAMPAGNES</p>
					<p>	SPIRITUEUX</p>
				</div>
			</div>



			{/* ============================================================ */}
			{/* -------------------------- PAGE 2 -------------------------- */}
			{/* ============================================================ */}
			<div className="flex col " style={{opacity: 1, backgroundColor:"white", zIndex:99}}>
				<div className="flex fill h10 bgBeige textPink" style={{zIndex: 0, top: 0, flexDirection:"row-reverse"}}>
					<Marquee>RUINART VINS JEFF CARREL CHAMPAGNE VINS RUINART VINS CHAMPAGNES</Marquee>
				</div>
				<div className="flex fill col tac ">
					<p>LES MAISONS</p>
					<p>Cliquer pour plus d'informations</p>




					<div className="flex jcsa">
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
					</div>
					<div className="flex jcsa">
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
					</div>
					<div className="flex jcsa">
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
					</div>
					<div className="flex jcsa">
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
						<img src={placeholder_logo} alt="Dyonisos logo" className="w33" style={{paddingBottom:"10%"}}/>
					</div>





				</div>
			</div>
		</div>
	);
};

// =============================================================================
// ---------------------------------- DESKTOP ----------------------------------
// =============================================================================

const Desktop = () => {
	return (
		<div className="flex fill bggrass">
			ok
		</div>
	);
};

// =============================================================================
// ----------------------------------- MAIN ------------------------------------
// =============================================================================

function Main() {
	const isMobile  = useMediaQuery({query: '(max-width:'+ BREAKPOINT     + 'px)'})
	const isDesktop = useMediaQuery({query: '(min-width:'+ (BREAKPOINT + 1) + 'px)'})
	console.log('(max-width:'+ (BREAKPOINT+1) + 'px)')
	return (
		<div className="flex fill">
			{ isMobile  && <Mobile/>  }
			{ isDesktop && <Desktop/> }
		</div>
	)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Main/>
	</React.StrictMode>
);
