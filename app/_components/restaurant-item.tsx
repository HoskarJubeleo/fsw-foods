import { Restaurant } from "@prisma/client";
import { BikeIcon, HeaterIcon, StarIcon, TimerIcon } from "lucide-react";
import Image from "next/image";
import { formatCurrency } from "../_helpers/price";
import { Button } from "./ui/button";

interface RestaurantItemProps {
    restaurant: Restaurant;
}

const RestaurantItem = ({restaurant}: RestaurantItemProps) => {
    return (  
        <div className="win-w-[266px].max-w-[266px] space-y-3">

            <div className="relative w-full h-[136px]">
                <Image src={restaurant.imageUrl} fill className="raunded-lg object-cover" alt={restaurant.name} />
                
                <div className="absolute top-2 left-2 flex items-center gap-[2px] rounded-full bg-primary px-2 py-[2px] bg-white">
                    <StarIcon size={12} className="fill-yellow-500 text-yellow-400"/>
                    <span className="font-semibold text-xs">5.0</span>
                </div>

                <Button size="icon" className="absolute top-2 right-2 h-7 w-7 rounded-full bg-muted-gray-700" >
                    <HeaterIcon size={16} className="fill-white"/>
                </Button>

                <div>
                    <h3 className="text-sm font-semibold">{restaurant.name}</h3>
                    <div className="flex items-center gap-1">
                        <BikeIcon className="text-primaty" size={14} />
                        <span className="text-sm text-muted-foreground">
                            {Number(restaurant.deliveryFee) === 0
                                ? "Entrega grátis"
                                : formatCurrency(Number(restaurant.deliveryFee))}
                        </span>
                    </div>
                    <div className="flex items-center gap-1">
                        <TimerIcon className="text-primaty" size={14} />
                        <span className="text-sm text-muted-foreground">
                            {restaurant.deliveryTimeMinutes} min
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default RestaurantItem;