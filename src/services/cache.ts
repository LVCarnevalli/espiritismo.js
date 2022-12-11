const windowGlobal = typeof window !== "undefined" && window;

import {
  OLivroDosEspiritos,
  DynamicQuestion,
  CommonQuestion,
} from "../share/cache-types";

type ConfigType = {
  [key: string]: {
    url: string;
  };
};

const Configs: ConfigType = {
  "espiritismo.js.olivrodosespiritos": {
    url: "https://raw.githubusercontent.com/LVCarnevalli/espiritismo.static/main/olivrodosespiritos.json",
  },
};

const Load = (key: string): Promise<any> => {
  if (!windowGlobal) {
    return Promise.reject();
  }

  return fetch(Configs[key].url)
    .then((response) => response.json())
    .then((data) => {
      const value = JSON.stringify(data);
      windowGlobal.localStorage.setItem(key, value);
      return Promise.resolve(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Get = (key: string): any | null => {
  if (!windowGlobal) {
    return null;
  }

  const data = windowGlobal.localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const Store = (key: string, value: any) => {
  if (!windowGlobal) {
    return;
  }

  windowGlobal.localStorage.setItem(key, JSON.stringify(value));
};

export const GetOLivroDosEspiritos = (): OLivroDosEspiritos | null =>
  Get("espiritismo.js.olivrodosespiritos");

export const LoadOLivroDosEspiritos = (): Promise<OLivroDosEspiritos | any> => {
  return Load("espiritismo.js.olivrodosespiritos").then((data: string) => {
    return Promise.resolve(data);
  });
};

export const StoreOLivroDosEspiritosDynamic = (data: DynamicQuestion) =>
  Store("espiritismo.js.olivrodosespiritos.dynamic", data);

export const GetOLivroDosEspiritosDynamic = (): DynamicQuestion | null =>
  Get("espiritismo.js.olivrodosespiritos.dynamic");

export const StoreOLivroDosEspiritosCommon = (data: CommonQuestion) =>
  Store("espiritismo.js.olivrodosespiritos.common", data);

export const GetOLivroDosEspiritosCommon = (): CommonQuestion | null =>
  Get("espiritismo.js.olivrodosespiritos.common");
