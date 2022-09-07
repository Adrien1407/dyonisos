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

import {Marquee}       from "react-fast-marquee";
import {useMediaQuery} from 'react-responsive';
//import {Collapsible}   from 'react-collapsible';

import "./global.css"

// =============================================================================
// ----------------------------------- MEDIA -----------------------------------
// =============================================================================

//import IMAGE_VAR_NAME from './img/..'





// =============================================================================
// -------------------------- DEFINITION OF VARIABLES --------------------------
// =============================================================================

const BREAKPOINT = 800; // Value of responsive breakpoint (width) in px




// =============================================================================
// ---------------------------------- MOBILE -----------------------------------
// =============================================================================

const Mobile = () => {
	return (
		<div className="flex col bgdusk">
		<div className="flex fillv bggrass">
			ok
		</div>
		<div className="flex fillv bggrass">
			ok
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
