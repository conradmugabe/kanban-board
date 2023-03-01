import { PropsWithChildren } from "react";
import {
  Drawer as ModalDrawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseButton,
} from "@chakra-ui/react";

type Props = {
  onClose: () => void;
  isOpen: boolean;
  placement: "top" | "right" | "bottom" | "left";
  size: "xs" | "sm" | "md" | "lg" | "xl" | "full";
};

function Drawer(props: PropsWithChildren<Props>) {
  return (
    <ModalDrawer
      placement={props.placement}
      onClose={props.onClose}
      isOpen={props.isOpen}
      size={props.size}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
        <DrawerCloseButton borderRadius="full" />
        <DrawerBody>{props.children}</DrawerBody>
      </DrawerContent>
    </ModalDrawer>
  );
}

export default Drawer;
