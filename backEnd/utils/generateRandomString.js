const generateRandomString = (length) => 
{
    let d = ""
    for (i = 0; i < length; i++)
    {
        let b = Math.floor(Math.random() * 25)
        let a = String.fromCharCode(65 + b)
        d = d + a
    }
    return d
}

module.exports = generateRandomString