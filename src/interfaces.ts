import { LoyaltyUser } from './enums'
import { Price, Country } from './types'


// Interface that specifes types for properties.
// Exported to './index.ts'.
export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser;   // Uses the 'LoyaltyUser' enum to give access to the properties ( ex. 'LoyaltyUser.GOLD_USER' )
    date: string;   
}

// Interface that specifies types for properties.
// Exported to './index.ts'.
export interface Property {
    image: string;
    title: string;
    price: Price;               // Uses the 'Country' type to only allow specific number values.
    location: {
        firstLine: string;
        city: string;
        code: number | string;
        country: Country        // Uses the 'Country' type to only allow specific string values.
    }
    contact: [ number, string];
    isAvailable: boolean;
}
