const { School } = require("../models/index");

class SchoolRepository {
    async createSchool({name,address,latitude,longitude}){
        try {
            const school=await School.create({name,address,latitude,longitude});
            return school;
        } catch (error) {
            console.log("Something went wrong in the school repository layer");
            throw {error};
        }
    }

    async getAllSchools(){
        try {
            const schools=await School.findAll();
            return schools;
        } catch (error) {
            console.log("Something went wrong in the school repository layer");
            throw {error};
        }
    }


}

module.exports=SchoolRepository;