export const getPriceFromDistance = (distance, costPerMile) => {
    const distanceInSwedishMiles = distance / 10000;
    const cost = distanceInSwedishMiles * costPerMile;
    return cost;
};
