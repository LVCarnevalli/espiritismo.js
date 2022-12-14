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
  return fetch(Configs[key].url)
    .then((response) => response.json())
    .then((data) => {
      const value = JSON.stringify(data);
      localStorage.setItem(key, value);
      return Promise.resolve(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

const Get = (key: string): any | null => {
  if (typeof window === "undefined") {
    return null;
  }

  const data = localStorage.getItem(key);
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

const Store = (key: string, value: any) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const LoadOLivroDosEspiritos = (): Promise<OLivroDosEspiritos | any> => {
  const data = Get("espiritismo.js.olivrodosespiritos");
  if (data) {
    return new Promise((resolve) => resolve(data));
  }

  return Load("espiritismo.js.olivrodosespiritos").then((data: string) => {
    return Promise.resolve(data);
  });
};

export const GetOLivroDosEspiritos = (): OLivroDosEspiritos | null => {
  const data = Get("espiritismo.js.olivrodosespiritos");
  if (data) {
    return data;
  }

  return null;
};

export const StoreOLivroDosEspiritosDynamic = (data: DynamicQuestion) =>
  Store("espiritismo.js.olivrodosespiritos.dynamic", data);

export const GetOLivroDosEspiritosDynamic = (): DynamicQuestion | null =>
  Get("espiritismo.js.olivrodosespiritos.dynamic");

export const StoreOLivroDosEspiritosCommon = (data: CommonQuestion) =>
  Store("espiritismo.js.olivrodosespiritos.common", data);

export const GetOLivroDosEspiritosCommon = (): CommonQuestion | null =>
  Get("espiritismo.js.olivrodosespiritos.common");
