const bcrypt = require("bcryptjs");

const hashPassword = async (password) => {
    const saltRounds = 12;

    const hash = await bcrypt.hash(password, saltRounds);

    return hash;
};

const verifyPassword = async (password, storedHash) => {
    const isValid = await bcrypt.compare(password, storedHash);

    return isValid;
};

module.exports = {
    hashPassword,
    verifyPassword
};