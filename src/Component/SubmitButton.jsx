import React from 'react';

function Submit({ pending, button }) {
    return (<>

        <button type="submit" className="submit-btn" disabled={pending}>
            {pending ? "Loading..." : button}
        </button>


    </>

    )
}

export default Submit;