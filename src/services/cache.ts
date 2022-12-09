import { OLivroDosEspiritosType } from "../share/types";

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

export const GetOLivroDosEspiritos = (): OLivroDosEspiritosType | null => {
  const data = localStorage.getItem("espiritismo.js.olivrodosespiritos");
  if (data) {
    return JSON.parse(data);
  }
  return null;
};

export const LoadOLivroDosEspiritos = (): Promise<
  OLivroDosEspiritosType | any
> => {
  return Load("espiritismo.js.olivrodosespiritos").then((data: string) => {
    return Promise.resolve(data);
  });
};
