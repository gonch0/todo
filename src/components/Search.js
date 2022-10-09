import React from "react";

const filterButtons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
];

export const Search = () => {

    return (
        <div>
            <input type="search"/>
            <div className="tabs">
                <button>
                    All
                </button>
            </div>
        </div>
    )
}