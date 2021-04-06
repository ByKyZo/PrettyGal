import React from 'react';
import FilterTemplate from '../FilterTemplate/FilterTemplate';
import SizeItem from './SizeItem/SizeItem';

const FilterBySize = (props) => {

     return (
         <li>

             <FilterTemplate name='Size'>
                <ul>
                    <SizeItem onChange={props.setSizeFilter} value='Large'/>
                    <SizeItem onChange={props.setSizeFilter} value='Medium'/>
                    <SizeItem onChange={props.setSizeFilter} value='Small'/>
                </ul>
             </FilterTemplate>

         </li>
     )

}

export default FilterBySize;