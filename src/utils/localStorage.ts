export const saveState = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('testState', serializedState);
  } catch (err) {
    console.error("Could not save state", err);
  }
};

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('testState');
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error("Could not load state", err);
    return undefined;
  }
};
