const saludar = (nombres: string[]): void => {
  nombres.forEach((nombre) => {
    console.log(`Hola ${nombre}`);
  });
};

export { saludar };
