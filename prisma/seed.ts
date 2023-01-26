import prisma from "../src/database/database.js";

async function main() {
    await prisma.genres.createMany({
        data:[
            {name:"Ação"},
            {name:"Drama"},
            {name:"Romance"},
            {name:"Terror"},
            {name:"Mistery"}
        ]
    });

    await prisma.platforms.createMany({
        data:[
            {name:"Netflix"},
            {name:"Amazon Prime"},
            {name:"Disney +"},
            {name:"Globo Play"},
        ]
    });

    await prisma.movies.createMany({
        data:[
            {name:"A Entidade", platform_id: 1, genre_id: 4, viewed: false, note: ''},
            {name:"Deadpoll", platform_id: 3, genre_id: 1, viewed: false, note: ''},
            {name:"Glass Onion", platform_id: 1, genre_id: 5, viewed: false, note: ''},
        ]
    });
}

main()
.then(() => {console.log("Registro feito com sucesso!")})
.catch((err) => {
    console.error(err); 
    process.exit(1);
})
.finally(async () => {
    await prisma.$disconnect;
})