const SchoolService = require("../services/school-service");

const schoolService = new SchoolService();

const create = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;

        //validations for the data sent by the user.

        if (!name || !address || latitude === undefined || longitude === undefined) {
            throw { error: "Data Missing ! Please provide name, address, latitude and longitude of the school" };
        }

        if (typeof name !== 'string' || typeof address !== 'string') {
            throw { error: "Invalid data type! Name and address must be strings." };
        }

        const lat = parseFloat(latitude);
        const long = parseFloat(longitude);

        if (isNaN(lat) || isNaN(long)) {
            throw { error: "Invalid data type! Latitude and longitude must be numbers." };
        }


        if (lat < -90 || lat > 90) {
            throw { error: "Latitude can only be in the range -90 to +90" };
        }

        if (long < -180 || long > 180) {
            throw { error: "Longitude can only be in the range -180 to +180" };
        }

        //Gather the school data.
        const schoolData = {
            name: name,
            address: address,
            latitude: lat,
            longitude: long
        }

        //create new schoool.
        const school = await schoolService.createSchool(schoolData);

        return res.status(201).json({
            data: school,
            message: "Successfully created a new school.",
            success: true,
            error: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            message: "Failed to create a new school.",
            success: false,
            error: error || error.message
        });

    }

}

const getAll = async (req, res) => {

    try {
        const { latitude, longitude } = req.query;

        //validations for data sent by the user.
        if (latitude === undefined || longitude === undefined) {
            throw { error: "Data Missing ! Please provide latitude and longitude of your location." };
        }

        const lat = parseFloat(latitude);
        const long = parseFloat(longitude);

        if (isNaN(lat) || isNaN(long)) {
            throw { error: "Invalid data type! Latitude and longitude must be numbers." };
        }

        if (lat < -90 || lat > 90) {
            throw { error: "Latitude can only be in the range -90 to +90" };
        }

        if (long < -180 || long > 180) {
            throw { error: "Longitude can only be in the range -180 to +180" };
        }

        //Gather the user data.
        const coordinates = {
            latitude: lat,
            longitude: long
        };

        //Fetch the schools.
        const sortedSchools = await schoolService.getAllSchools(coordinates);

        return res.status(200).json({
            data: sortedSchools,
            message: "Successfully fetched the schools in sorted order of distance.",
            success: true,
            error: {}
        });

    } catch (error) {

        return res.status(500).json({
            data: {},
            message: "Failed to fetch the schools in sorted order of distance",
            success: false,
            error: error || error.message
        });

    }

}

module.exports = {
    create,
    getAll
}
