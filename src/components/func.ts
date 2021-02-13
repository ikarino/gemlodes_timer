export const new_waves = [
  { index: 0, title: "Lv1 wave1", dmin: 0 },
  { index: 1, title: "Lv1 wave2", dmin: 4 },
  { index: 2, title: "Lv2 wave1", dmin: 8 },
  { index: 3, title: "Lv2 wave2", dmin: 16 },
  { index: 4, title: "Lv3 wave1", dmin: 24 },
  { index: 5, title: "Lv3 wave2", dmin: 36 },
  { index: 6, title: "Lv4 wave1", dmin: 48 },
  { index: 7, title: "Lv4 wave2", dmin: 48+29 },
  { index: 8, title: "Lv5 wave1", dmin: 48+29*2 },
  { index: 9, title: "Lv5 wave2", dmin: 48+29*2+69 },
]

export const old_waves = [
  { index: 0, title: "Lv1 wave1", dmin: 0 },
  { index: 1, title: "Lv1 wave2", dmin: 4 },
  { index: 2, title: "Lv2 wave1", dmin: 8 },
  { index: 3, title: "Lv2 wave2", dmin: 16 },
  { index: 4, title: "Lv2 wave3", dmin: 24 },
  { index: 5, title: "Lv3 wave1", dmin: 32 },
  { index: 6, title: "Lv3 wave2", dmin: 44 },
  { index: 7, title: "Lv4 wave1", dmin: 56 },
  { index: 8, title: "Lv4 wave2", dmin: 85 },
  { index: 9, title: "Lv4 wave3", dmin: 114 },
  { index: 10, title: "Lv5 wave1", dmin: 143 },
  { index: 11, title: "Lv5 wave2", dmin: 212 },
]


export function min2str(minutes: number): string {
  const hour = Math.floor(minutes / 60);
  const minute = minutes % 60;
  return `${('00' + hour).slice(-2)}:${('00' + minute).slice(-2)}`
}