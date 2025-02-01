export const serverError = (res, message) => {
    console.error(message);
    res.status(500).json({message: 'Internal Server Error'});
};
