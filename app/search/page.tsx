import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowLeftIcon, ScanSearchIcon, SearchIcon } from 'lucide-react';

const Search = () => {
  return (
    <div className="container py-4">
      <div className="fixed flex items-center top-0 p-2 left-0 w-full bg-primary gap-1">
        <Button
          variant="ghost"
          className="flex-none hover:bg-white/10 text-primary-foreground hover:text-primary-foreground -ml-1"
          size="icon"
        >
          <ArrowLeftIcon className="h-5 w-5" />
        </Button>
        <div className="relative flex-1">
          <Input
            className="bg-white w-full pl-8"
            placeholder="Хайлтын утгаа оруулана уу"
          />
          <SearchIcon className="absolute top-1/2 left-2 -translate-y-1/2 h-5 w-5 text-neutral-600" />
        </div>
      </div>

      <div className="py-32 text-sm text-neutral-600 flex flex-col items-center gap-2">
        <ScanSearchIcon
          className="h-12 w-12 text-neutral-500"
          strokeWidth={1.2}
        />
        <span className="pb-32">Хайлтын утгаа оруулана уу</span>
      </div>
    </div>
  );
};

export default Search;
