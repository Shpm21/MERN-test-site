const notFound = (req, res, next) => {
    const error = new Error(`No hemos encontrado ${req.originalUrl}`)
    res.status(404)
    next(error)
}

const errorHandler = (err, req, res, next) => {
    // envia el mensaje antes del error
    // Si el error es 200, cambiar a 500, si no, mantener codigo de error
    const statusCode = res.statusCode === 200 ? 500 : res.statusCode
    res.status(statusCode)
    // creamos el objeto con el mensaje
    res.json({
        message: `No existe. ${err.message}`,

        // si estamos en produccion, no va  a mostrar el stack del error
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    })
}

export { notFound, errorHandler }