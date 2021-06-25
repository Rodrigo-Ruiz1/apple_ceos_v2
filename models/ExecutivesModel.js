const db = require('./conn');

class ExecutivesModel {
    constructor(id, name, first_year_active) {
        this.id = id;
        this.ceos.name = name;
        this.ceos.year = first_year_active;
    }

    static async getAllExecutiveData() {
        try {
            const response = await db.any(
                `SELECT name, first_year_active FROM ceos;`
            )
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
}

module.exports = ExecutivesModel;