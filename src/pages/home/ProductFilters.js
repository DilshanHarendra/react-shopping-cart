import React, {useState} from "react";

function ProductFilters(props){

    const sizes=[{label:'xs',value:'xsmall'},{label:'s',value:'small'},{label:'m',value:'medium'},{label:'ml',value:'ml'},{label:'l',value:'large'},{label:'xl',value:'extraLarge'},{label:'xxl',value:'extraExtraLarge'}]
    const [currentSize,setCurrentSize]=useState(undefined)

    function filterSize(value){
        if (currentSize==value){
            setCurrentSize(undefined)
            props.sizeFilter(undefined)
        }else{
            setCurrentSize(value)
            props.sizeFilter(value)
        }

    }
    function clearFilter(){
        setCurrentSize(undefined)
        props.sizeFilter(undefined)


    }

    return(<div className="w-1/5 md:px-0 px-4">
        <h2 className="font-semibold text-lg">Sizes :</h2>

        <div className="flex flex-wrap gap-4 mt-2">
            {sizes.map(size=>(
                <button key={size.value} onClick={()=>filterSize(size.value)} className={`${currentSize==size.value?'bg-gray-500 text-white':'bg-gray-200'} hover:bg-gray-400 hover:text-white uppercase text-xs font-semibold flex justify-center items-center  w-10 h-10 rounded-full cursor-pointer`}>
                    {size.label}
                </button>
            ))}

        </div>

        {   currentSize&&
            <button onClick={clearFilter} className="font-semibold text-sm mt-3 hover:text-gray-500">
                Clear filters
            </button>
        }
    </div>)
}export default ProductFilters
