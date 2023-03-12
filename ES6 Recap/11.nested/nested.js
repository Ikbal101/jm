const objects = {
    id:'Brad Peet',
    Year:2021,
    device:{
        name:'laptop',
        value:55000,
        tech:{
            brand:'Apple',
            number:[12,16,1,18]
        }
    },
}

const result = objects?.device?.tech?.logo;
console.log(result);