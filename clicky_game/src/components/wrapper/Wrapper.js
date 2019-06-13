import React from 'react';
import './wrapper.css';

const Wrapper = props =>
 <div className="row">{props.children}
     <div class="music">       
        <iframe width="100%" height="45px" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/226004102&color=%230b0a0a&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
     </div>
</div>

export default Wrapper;