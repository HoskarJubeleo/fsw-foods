import { Category } from "@prisma/client";
import Image from "next/image";

interface CategoryItemProps {
    category: Category
}

const CategoryItem = ({category}: CategoryItemProps) => {
    return ( 
        <div className="flex item-center gap-3 bg-white py-3 px-4 shadow-md">  
            <Image src={category.imageUrl} alt={category.name} width={30} height={30}/>

            <span className="font-semibold text-sm">{category.name}</span>
        </div>
    );
}
 
export default CategoryItem;