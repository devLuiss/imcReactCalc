export type Level = {
    title: string;
    color: string;
    icon: 'down' | 'up';
    imc: [number, number];
    yourImc?: number;
};

export const levels: Level[]  = [
    { title:'Magreza', color:'#96a3ab', icon:'down', imc:[0, 18.5] },
    { title:'Normal', color:'#03ad60', icon:'up', imc:[18.6, 24.9] },
    { title:'Sobrepeso', color:'#e2b036', icon:'down', imc:[25, 30] },
    { title:'Obesidade', color:'#c3423f', icon:'down', imc:[30.1, 100] },

];

export const calculateImc = (weight: number, height: number) => {
    const imc = weight / (height * height);

    for (let i in levels) {
        if (imc >= levels[i].imc[0] &&
            imc <= levels[i].imc[1]) {
            levels[i].yourImc = imc;
            return levels[i];

            }
        }
        return null;
    }
