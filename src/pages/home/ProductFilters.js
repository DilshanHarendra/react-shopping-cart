import React from "react";

function ProductFilters(props){

    const sizes=['xs','s','m','ml','l','xl','xxl']


    return(<div className="w-1/5 md:px-0 px-4">
        <h2 className="font-semibold text-lg">Sizes :</h2>

        <div className="flex flex-wrap gap-4 mt-2">
            {sizes.map(size=>(
                <button key={size} className="bg-gray-200 hover:bg-gray-400 hover:text-white uppercase text-xs font-semibold flex justify-center items-center  w-10 h-10 rounded-full">
                    {size}
                </button>
            ))}

        </div>
    </div>)
}export default ProductFilters
