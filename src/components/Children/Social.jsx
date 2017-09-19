/**
|--------------------------------------------------
| Stateless Contact component.
| Displays ContactUs and Map sub components.
|--------------------------------------------------
*/

import React from 'react';
import Reviews from './Social/Reviews.jsx';
import Media from './Social/Media.jsx';

const Social = () => {
  return (
    <section className="section-social row" id="section-social">
    {/*Write code here */}
		<Reviews />
		<Media />
    </section>
  );
}

export default Social;