function encontrarSumaObjetivo(numeros, objetivo) {
    const complementos = new Set();

    for (const numero of numeros) {
        const complemento = objetivo - numero;

        if (complementos.has(complemento)) {
            return `${numero} y ${complemento} suman ${objetivo}`;
        }
        complementos.add(numero);
    }

    return `No hay dos números que sumen ${objetivo}`;
}

// Ejemplo de uso
const numeros = [4, 4, 6, 2];
const objetivo = 8;
console.log(encontrarSumaObjetivo(numeros, objetivo));