exports.notFound = (req, res) => {
	res.status(404).json({"erro":"Recurso não encontrado :("});
};