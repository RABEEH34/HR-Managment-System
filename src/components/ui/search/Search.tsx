
import { Search as SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/input";

export const Search = () => {
  return (
    <div className="relative">
      <SearchIcon
        size={20}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
      />
      <Input
        type="search"
        placeholder="Search..."
        className="pl-10 w-full max-w-xs bg-gray-50 border-gray-200 focus:bg-white transition-colors"
      />
    </div>
  );
};
