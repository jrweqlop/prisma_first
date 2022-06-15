import {Sequelize} from 'sequelize';


export const sequelize : Sequelize = new Sequelize(
    "system_library",
    "postgres",
    "12345678",
    {
        host: "localhost",
        port: 5432,
        dialect: 'postgres',
        // operatorsAliases: false,
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

export const connection = async () => {
    await sequelize.sync({force:false});
    const data = await sequelize.define("",{/* bla */},{
        timestamps:false,
        createdAt:false,
        updatedAt:false
    })
    // await sequelize.sync();
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (err) {
        console.error('Unable to connect to the database:', err);
    }
}

