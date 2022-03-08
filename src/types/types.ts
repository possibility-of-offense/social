import { Store } from "../store/index";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store;
  }
}

export interface MenuItem {
  name: string;
  link: string;
  icon: string;
}

export interface InputGeneral {
  id: string;
  class: string;
  label: string;
  showLabel?: boolean;
  placeholder: string;
}

export interface ModalStyles {
  borderRadius: string;
  backgroundColor: string | "#fff";
  boxShadow: string;
  padding: string;
  width: string;
}

export interface MoodsIcons {
  name: string;
  icon: string;
}

export interface Post {
  name: string;
  mood: {
    name: string;
    icon: string;
  };
}

export interface PersonRequestGrid {
  name: string;
  image: string;
}
