const jwt = require('jsonwebtoken');

const SECRET_KEY = 'cod';


const extractUser = (req, res, next) => {
    const userToken = req.headers.usuariocodemasters;
    if (!userToken) {
        return res.status(401).send('Acceso denegado. No se proporcionó token.');
    }

    console.log("Token recibido:", userToken);  // Imprimimos el token recibido

    // Verificamos el JWT
    try {
        const decoded = jwt.verify(userToken, SECRET_KEY);
        console.log("JWT verificado:", decoded);
        req.logged = true;  // Indicamos que el usuario está logueado
        next();
    } catch (error) {
        res.status(400).send('Token inválido');
    }
};

module.exports = extractUser;


