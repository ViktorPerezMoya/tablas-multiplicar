
module.exports.generarTabla = (base,limite) => {
    return new Promise((resolve,reject)=>{
        if(!(typeof base === 'number')) reject(`La base ${base} no es un número.`); 
        if(!(typeof limite === 'number')) reject(`El limite ${limite} no es un número.`);

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${(base*i)} \n`;            
        }
        resolve(data);
    });
}