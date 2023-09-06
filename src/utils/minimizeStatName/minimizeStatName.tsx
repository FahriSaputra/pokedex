const minimizeStatName = (name: string) => {
  if (name === "hp") return "HP";
  if (name === "attack") return "ATK";
  if (name === "defense") return "DEF";
  if (name === "special-attack") return "SATK";
  if (name === "special-defense") return "SDEF";
  if (name === "speed") return "SPD";

  return name;
};

export default minimizeStatName;
