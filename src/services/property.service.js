
const pool = require("../config/db");


const createProperty = async ({
    property_name,
    address,
    landlord_id
}) => {

    const query = `
        INSERT INTO properties (
            property_name,
            address,
            landlord_id
        )
        VALUES ($1, $2, $3)
        RETURNING *;
    `;

    const values = [
        property_name,
        address,
        landlord_id
    ];

    const results = await pool.query(query, values);

    return results.rows[0];
};

const getProperties = async (landlordId) => {

    const query = `
        SELECT *
        FROM properties
        WHERE landlord_id = $1;
    `;

    const values = [landlordId];

    const results = await pool.query(query, values);

    return results.rows;
};



const getPropertyById = async (id, landlordId) => {

    const query = `
        SELECT *
        FROM properties
        WHERE id = $1
        AND landlord_id = $2;
    `;

    const values = [id, landlordId];

    const results = await pool.query(query, values);

    return results.rows[0];
};


const updateProperty = async ({
    id,
    landlordId,
    property_name,
    address
}) => {

    const query = `
        UPDATE properties
        SET
            property_name = COALESCE($1, property_name),
            address = COALESCE($2, address),
            updated_at = NOW()
        WHERE id = $3
        AND landlord_id = $4
        RETURNING *;
    `;

    const values = [
        property_name ?? null,
        address ?? null,
        id,
        landlordId
    ];

    const results = await pool.query(query, values);

    return results.rows[0];
};



const deleteProperty = async (id, landlordId) => {

    const query = `
        DELETE FROM properties
        WHERE id = $1
        AND landlord_id = $2
        RETURNING *;
    `;

    const values = [id, landlordId];

    const results = await pool.query(query, values);

    return results.rows[0];
};



module.exports = {
    createProperty,
    getProperties,
    getPropertyById,
    updateProperty,
    deleteProperty
};
