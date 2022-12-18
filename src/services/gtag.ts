const SendEvent = (name: string, data: any) => {
  const w: any = window;
  if (typeof w !== "undefined" && typeof w.gtag !== "undefined") {
    w.gtag("event", name, { ...data });
  }
};

export const Swipe = (category: string) => {
  SendEvent("swipe", { event_category: category });
};
