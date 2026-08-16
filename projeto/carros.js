// Array contendo catálogo de veículos
const carros = [
    // --- FIAT ---
    { id: 0, modelo: "Fiat Argo 1.0", etanol: 9.2, gasolina: 13.1, bateria: 0 },
    { id: 1, modelo: "Fiat Argo 1.3", etanol: 8.7, gasolina: 12.4, bateria: 0 },
    { id: 2, modelo: "Fiat Cronos 1.0", etanol: 9.5, gasolina: 13.8, bateria: 0 },
    { id: 3, modelo: "Fiat Cronos 1.3", etanol: 8.9, gasolina: 12.7, bateria: 0 },
    { id: 4, modelo: "Fiat Mobi 1.0", etanol: 10.5, gasolina: 15.2, bateria: 0 },
    { id: 5, modelo: "Fiat Pulse 1.0 Turbo", etanol: 8.8, gasolina: 12.9, bateria: 0 },
    
    // --- VW ---
    { id: 10, modelo: "VW Polo 1.0", etanol: 9.8, gasolina: 14.0, bateria: 0 },
    { id: 11, modelo: "VW Polo 1.6", etanol: 8.7, gasolina: 12.4, bateria: 0 },
    { id: 15, modelo: "VW T-Cross 1.0", etanol: 8.8, gasolina: 12.8, bateria: 0 },

    // --- CHEVROLET ---
    { id: 21, modelo: "Chevrolet Onix 1.0", etanol: 9.8, gasolina: 14.0, bateria: 0 },
    { id: 23, modelo: "Chevrolet Onix Plus 1.0", etanol: 9.5, gasolina: 13.8, bateria: 0 },
    { id: 27, modelo: "Chevrolet Tracker 1.2", etanol: 8.5, gasolina: 12.5, bateria: 0 },

    // --- HYUNDAI ---
    { id: 31, modelo: "Hyundai HB20 1.0", etanol: 9.5, gasolina: 13.7, bateria: 0 },
    { id: 35, modelo: "Hyundai Creta 1.6", etanol: 7.8, gasolina: 11.5, bateria: 0 },

    // --- TOYOTA ---
    { id: 38, modelo: "Toyota Corolla 2.0", etanol: 7.9, gasolina: 11.8, bateria: 0 },
    { id: 40, modelo: "Toyota Yaris 1.5", etanol: 8.8, gasolina: 12.8, bateria: 0 },

    // --- BYD (Elétricos) ---
    { id: 102, modelo: "BYD Dolphin (EV)", etanol: 0, gasolina: 0, bateria: 14.5 },
    { id: 103, modelo: "BYD Seal (EV)", etanol: 0, gasolina: 0, bateria: 13.8 }
];

if (typeof module !== 'undefined' && module.exports) {
    module.exports = carros;
}