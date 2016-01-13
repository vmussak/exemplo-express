exports.isAuthenticated = (req, res, next) => {
	if(!req.headers['authorization']){
		res.status(401).json({message: 'Você não tem permissão!'});
        return;
    }

    next();
} 