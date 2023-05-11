// Imports
const express = require("express");
const app = express();
const { faker } = require('@faker-js/faker');

// configure express

// routes & controllers
const createUser = () => {
    const newUser = {
        _id: faker.datatype.number({ max: 100 }),
        name: faker.name.fullName({
            firstName: string,
            lastName: string
        } = {}),
        password: faker.internet.password(15, true),
        email: faker.internet.email(),
        phoneNumber: faker.phone.number()
    };
    return newUser;
};
const createCompany = () => {
    const newCompany = {
        _id: faker.datatype.number({ max: 100 }),
        name: faker.company.bsBuzz() + " " + faker.company.bsNoun(),
        address: [
            faker.address.streetAddress(true),
            faker.address.cityName(),
            faker.address.stateAbbr(),
            faker.address.zipCodeByState(),
            faker.address.country()
        ]
    };
    return newCompany;
};


app.get("/api/users/new", (req, res) => {
    res.json(createUser())
})
app.get("/api/companies/new", (req, res) => {
    res.json(createCompany())
})
app.get("/api/user/company", (req, res) => {
    res.json({company: createCompany(), user: createUser()})
})



// Listen to the port
app.listen(8000, () => console.log('Listening to the port: 8000'));