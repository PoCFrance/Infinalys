import React from 'react';
import Stock from '../../types/Stock';

interface Props {
    stock: Stock
}

/**
 * Displays a small overview of a given stock (name and small graph)
 * @param props
 * @returns a div with className stock-overview, a label for the stock name and
 * a small Plot of the stock with the given values
 */
const StockOverview = (props: Props): JSX.Element => (
    <div className="stock-overview">
        <label>{props.stock.name}</label>
        <i className={props.stock.trend === "down" ? "fa fa-caret-down" : "fa fa-caret-up"}/>
        <label>{props.stock.trendPercentage}</label>
    </div>
);

export default StockOverview;