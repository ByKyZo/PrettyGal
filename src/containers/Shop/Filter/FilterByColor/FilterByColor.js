import React from 'react';
import styles from './FilterByColor.module.scss';
import FilterTemplate from '../FilterTemplate/FilterTemplate';
import ColorItem from './ColorItem/ColorItem';

const FilterByColor = (props) => {

     return (
         <li>

             <FilterTemplate name='Color'>

                <ul className={styles.colorList}>
                    <ColorItem  onClick={() => props.setColorFilter('Black')}  color='#000'/>
                    <ColorItem  onClick={() => props.setColorFilter('Brown')} color='#6f4b25'/>
                    <ColorItem  onClick={() => props.setColorFilter('Green')} color='#24934c'/>
                    <ColorItem  onClick={() => props.setColorFilter('OffWhiite')} color='#e0ded0'/>
                    <ColorItem  onClick={() => props.setColorFilter('Purple')} color='#4c1130'/>
                    <ColorItem  onClick={() => props.setColorFilter('Red')} color='#ff2929'/>
                    <ColorItem  onClick={() => props.setColorFilter('White')} color='#fff'/>
                    {/* {
                        props.items.map(item => {
                            if (item.color === '') return;
                            return <ColorItem  color={item.color[1]}/>
                        })
                    } */}
                </ul>

             </FilterTemplate>

         </li>
     )

}

export default FilterByColor;