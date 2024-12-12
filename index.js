import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi("fca_live_0uj8LFpSRPTEfscc7BiGEfX5ouASdVtjsYOyQjKP");

export async function convertCurrency(fromCurrency, toCurrency, units){
    const res= await freecurrencyapi.latest({
        base_currency: fromCurrency,
        currencies: toCurrency
    });
    const answer= res.data[toCurrency];
    console.log((answer*units).toFixed(3))
}
