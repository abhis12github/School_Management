const SchoolRepository = require("../repository/school-repository");
const { calculateDistance } = require("../utils/coordinates-distance");

class SchoolService {
    constructor() {
        this.schoolRepository = new SchoolRepository();
    }

    async createSchool(data) {
        try {
            const school = await this.schoolRepository.createSchool(data);
            return school;
        } catch (error) {
            console.log("Something went wrong in the school service layer");
            throw { error };
        }
    }

    async getAllSchools(coordinates) {
        try {
            const schools = await this.schoolRepository.getAllSchools();

            const sortedSchools = schools.sort((schoolA, schoolB) => {
                const distanceA = calculateDistance(coordinates.latitude, coordinates.longitude, schoolA.latitude, schoolA.longitude);
                const distanceB = calculateDistance(coordinates.latitude, coordinates.longitude, schoolB.latitude, schoolB.longitude);
                return distanceA - distanceB;
            });

            return sortedSchools;

        } catch (error) {
            console.log("Something went wrong in the school service layer");
            throw { error };
        }
    }

    async getOneSchool(name, address){
        try {
            const school = await this.schoolRepository.getOneSchool(name, address);
            return school;
        } catch (error) {
            throw error;
        }
    };

}

module.exports = SchoolService;