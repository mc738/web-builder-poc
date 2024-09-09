import {Element} from "@craftjs/core";
import {ContainerComponent} from "@/components/web-builder-components/ContainerComponent.tsx";
import {TextComponent} from "@/components/web-builder-components/TextComponent.tsx";
import {ButtonComponent} from "@/components/web-builder-components/ButtonComponent.tsx";
import {CardComponent} from "@/components/web-builder-components/CardComponent.tsx";

export const PageView = () => {
    return (<div className="w-[calc(100%_-_3.5rem-20%)] h-full bg-gray-200 flex flex-col items-center ">
        <div className="mt-4 w-4/5">
            <Element id="root_container" is={ContainerComponent} canvas background={"white"} padding={""} margin={""}>
                <TextComponent text={"This is some text"} fontSize={"1"} fontSizeUnits={"rem"}></TextComponent>
                <ButtonComponent size="sm" variant="outline" color="primary">Press me!</ButtonComponent>
                <CardComponent background={"white"} padding={""}></CardComponent>
            </Element>
        </div>
    </div>)
}