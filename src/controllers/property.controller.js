
const propertyService = require("../services/property.service");



const createProperty = async (req, res, next) => {
    try {
        const { property_name, address } = req.body;

        if (!property_name || !address) {
            return res.status(400).json({
                success: false,
                message: "Property name and address are required"
            });
        }

        const property = await propertyService.createProperty({
            property_name,
            address,
            landlord_id: req.user.id
        });

        return res.status(201).json({
            success: true,
            message: "Property created successfully",
            data: property
        });

    } catch (error) {
        next(error);
    }
};



const getProperties = async (req, res, next) => {
    try {
        const landlordId = req.user.id;

        const properties = await propertyService.getProperties(landlordId);

        return res.status(200).json({
            success: true,
            message: "Properties retrieved successfully",
            data: properties
        });

    } catch (error) {
        next(error);
    }
};



const getPropertyById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const landlordId = req.user.id;

        const property = await propertyService.getPropertyById(
            id,
            landlordId
        );

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Property retrieved successfully",
            data: property
        });

    } catch (error) {
        next(error);
    }
};



const updateProperty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { property_name, address } = req.body;
        const landlordId = req.user.id;

        if (
            property_name === undefined &&
            address === undefined
        ) {
            return res.status(400).json({
                success: false,
                message: "Provide at least one field to update"
            });
        }

        const property = await propertyService.updateProperty({
            id,
            landlordId,
            property_name,
            address
        });

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Property updated successfully",
            data: property
        });

    } catch (error) {
        next(error);
    }
};



const deleteProperty = async (req, res, next) => {
    try {
        const { id } = req.params;
        const landlordId = req.user.id;

        const property = await propertyService.deleteProperty(
            id,
            landlordId
        );

        if (!property) {
            return res.status(404).json({
                success: false,
                message: "Property not found"
            });
        }

        return res.status(200).json({
            success: true,
            message: "Property deleted successfully",
            data: property
        });

    } catch (error) {
        next(error);
    }
};

module.exports = {
    createProperty,
    getProperties,
    getPropertyById,
    updateProperty,
    deleteProperty,
    
};
