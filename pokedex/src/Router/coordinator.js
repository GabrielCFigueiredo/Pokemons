export const homeList = (history) => {
    history.goBack("/");
  };
  
export const listPokedex = (history) => {
    history.push("/pokedex")
}

export const detailPokedex = (history, name) => {
   history.push(`/pokemon/${name}`)
};

