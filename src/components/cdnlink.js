import React from 'react';

/* Holds cdn link which will be copied */

/*Task : Copy button yet to be added*/

function Link_CDN() {
    return(
    <div>
        <input
          type="text"
          placeholder="<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/eos-icons@latest/dist/css/eos-icons.css' />"
          class="input input-bordered w-full max-w-xl"
          disabled
        />
      </div>
      );
}

export default Link_CDN;