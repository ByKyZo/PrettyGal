import React, { useEffect, useState } from 'react';

import './customInput.scss';
import styles from './FilterByPrice.module.scss';
import FilterTemplate from '../FilterTemplate/FilterTemplate';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { faSlidersH } from '@fortawesome/free-solid-svg-icons';


const FilterByPrice = (props) => {

    const [minRangeValue , setMinRangeValue] = useState(props.minMaxPrice[0]);
    const [maxRangeValue , setMaxRangeValue] = useState(props.minMaxPrice[1]); 

    useEffect(() => {
        props.setPriceFilter(minRangeValue,maxRangeValue);
    },[maxRangeValue,minRangeValue])

    useEffect(() => {
        setMinRangeValue(props.minMaxPrice[0])
        setMaxRangeValue(props.minMaxPrice[1])
    },[props.minMaxPrice])

    const handleSetPriceRange = ({min , max}) => {
        setMinRangeValue(min);
        setMaxRangeValue(max);
    }

     return (
         <li>

             <FilterTemplate name='Price'>

                    <div className={styles.rangeWrapper}>
                        <InputRange 
                            // classNames='inputRange'
                            formatLabel={value =>  ''}
                            ariaLabelledby={'test'}
                            ariaControls='test'
                            step={0.01}
                            minValue={props.minMaxPrice[0]}
                            maxValue={props.minMaxPrice[1]}
                            value={{min : minRangeValue , max: maxRangeValue}}
                        
                            onChange={(value) => handleSetPriceRange(value)}
                        />
                    </div>
                        <div className={styles.inputValue}>
                            <span>${Math.round(minRangeValue * 100)/100}</span>
                            <span>${Math.round(maxRangeValue * 100)/100}</span>
                        </div>
             </FilterTemplate>

         </li>
     )

}

export default FilterByPrice;