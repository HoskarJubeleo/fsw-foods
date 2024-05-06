import Image from "next/image";
import { Button } from "./ui/button";
import { MenuIcon } from "lucide-react";

const header = () => {
  return (
    <div className="flex justify-between">
      <Image src="/logo.png" alt="FSW Foods" width={130} height={30} />
      <Button
        size="icon"
        variant="outline"
        className="border-none bg-transparent"
      >
        <MenuIcon />
      </Button>
    </div>
  );
};

export default header;
