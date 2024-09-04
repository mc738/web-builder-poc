import {Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue} from "../ui/select";

export const TopBar = () => {
    return(
        <header className="flex h-14 items-center justify-between gap-4 border-b bg-background px-4 md:px-6">
            <div>
                <h1>Web builder</h1>
            </div>
            <div>
                <Select>
                    <SelectTrigger>
                        <SelectValue placeholder="Select a screen size" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Computer</SelectLabel>
                            <SelectItem value="desktop">Desktop</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>
        </header>
    );
}