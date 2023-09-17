import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to cardio",
                "Unlimited access during regular hours",
                "Locker room and shower facilities"
            ]
        },
        {
            "id": 2,
            "name": "Premium Membership",
            "price": 50,
            "features": [
                "All Basic Membership features",
                "Access to group fitness classes",
                "Personalized fitness assessment"
            ]
        },
        {
            "id": 3,
            "name": "Family Membership",
            "price": 80,
            "features": [
                "Access to all gym amenities",
                "Childcare services during workout",
                "Discounts on family fitness programs"
            ]
        }
    ]




    return (
        <div className="text-center">
            <h2 className="text-3xl md:text-6xl font-bold text-rose-500 text-center mb-8">Best prices in the town</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container mx-auto">
            {
                priceOptions.map(option => <PriceOption
                    key={option.id}
                    option={option}
                ></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;