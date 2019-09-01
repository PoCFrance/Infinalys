import React, { useState, useEffect } from 'react';
import StockOverview from './stockOverview';
import Stock from '../../types/Stock';
import './stockOverview.css';

const URL = '/api/stocks/overview';

/**
 * Displays a bar with stock overviews
 * The stocks values are fetched from the defined URL variable
 */
const MainStocksOverview = (): JSX.Element => {
    const [loading, setLoading] = useState<boolean>(true);
    const [stocks, setStocks] = useState<Array<Stock>>([]);

    useEffect(() => {
        setStocks([
            {name: "AAPL",    trend: "down", trendPercentage: 0.5},
            {name: "DAX",     trend: "up", trendPercentage: 0.5},
            {name: "KER",     trend: "down", trendPercentage: 0.5},
            {name: "EUR-USD", trend: "up", trendPercentage: 0.5},
            {name: "GOLD",    trend: "down", trendPercentage: 0.5},
        ]);
        setLoading(false);
    }, []);

    return (
        <div className="stocks-overview">
            {
                loading || !stocks.length ?
                    null
                :
                    stocks.map((stock: Stock) => (
                        <StockOverview stock={stock}/>
                    ))
            }
        </div>
    );
}

export default MainStocksOverview;