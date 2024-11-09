const crypto = require("crypto");

export default class User {
    #hashedPassword;

    setPassword(password){
        this.#hashedPassword = this.#encryptPassword(password)
    }

    validatePassword(password){
        const hashedInput = this.#encryptPassword(password)
        return this.#hashedPassword === hashedInput
    }

    #encryptPassword(password) {
        const hash = crypto.createHash('sha256')
        hash.update(password)
        return hash.digest('hex')
    }
}