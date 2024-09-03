import {Button} from "@/components/ui/button.tsx";

export const Toolbox = () => {
    return(
      <div>
          <div className="grid space-x-1">
              <h1>Drag to add</h1>
              <div>
                  <Button>Button</Button>
              </div>
              <div>
                  <Button>Text</Button>
              </div>
              <div>
                  <Button>Container</Button>
              </div>
              <div>
                  <Button>Card</Button>
              </div>
          </div>
      </div>
    );
}