const {Router} = require('express');
const faker = require('faker');
const User = require('../models/User')
const router = Router();

router.get('/api/users',async (req, res)=>{
    const users = await User.find();
    res.json({users: users}); //aqui todos los usuarios que devuelve se guardará en una propiedad de un objeto. La propiedad se llama users. Este objeto será consultado por Flutter luego
});

router.get('/api/users/create', async (req, res)=>{
    for(let i = 0; i<=4; i++){
        await User.create({
            nombre: faker.name.findName(),
            apellido: faker.name.lastName(),
            avatar: faker.image.avatar()
        })
    }
    res.json('five users created')
});

module.exports = router;