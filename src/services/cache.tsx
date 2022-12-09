type ConfigType = {
  key: string;
  url: string;
};

const Configs: ConfigType[] = [
  {
    key: "espiritismo.js.olivrodosespiritos",
    url: "https://raw.githubusercontent.com/LVCarnevalli/espiritismo.static/olivrodosespiritos.json",
  },
];

export const Load = (): Promise<any[]> => {
  return Promise.all(
    Configs.map((c: ConfigType) => {
      if (localStorage.getItem(c.key)) {
        return Promise.resolve();
      }

      return fetch(c.url)
        .then((response) => response.json())
        .then((data) => {
          localStorage.setItem(c.key, JSON.stringify(data));
        })
        .catch((error) => {
          console.log(error);
        });
    })
  );
};
