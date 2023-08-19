declare module '@tawk.to/tawk-messenger-react' {
	import React from 'react';
  
	interface TawkMessengerProps {
		propertyId: string;
		widgetId: string;
	}
  
	const TawkMessengerReact: React.FC<TawkMessengerProps>;
  
	export default TawkMessengerReact;
  }