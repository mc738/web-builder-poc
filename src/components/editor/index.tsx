import {TopBar} from "@/components/editor/top-bar.tsx";
import {LeftBar} from "@/components/editor/left-bar.tsx";
import {PageView} from "@/components/editor/page-view.tsx";
import {RightPanel} from "@/components/editor/right-panel.tsx";
import {Editor, Frame, Resolver} from "@craftjs/core";
import {TextComponent} from "@/components/web-builder-components/TextComponent.tsx";
import {ContainerComponent} from "@/components/web-builder-components/ContainerComponent.tsx";
import {ButtonComponent} from "@/components/web-builder-components/ButtonComponent.tsx";

const blocks: Resolver = {
    PageView,
    TextComponent,
    ButtonComponent,
    ContainerComponent
}

export const WebBuilderEditor = () => {
    return (
        <div className="h-dvh w-dvw">
            <Editor resolver={blocks}>
                <TopBar></TopBar>
                <div className="h-[calc(100vh_-_3.5rem)] w-full flex flex-row">
                    <LeftBar></LeftBar>
                    <Frame>
                        <PageView></PageView>
                    </Frame>
                    <RightPanel></RightPanel>
                </div>
            </Editor>
        </div>
    );
}