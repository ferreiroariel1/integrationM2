
const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexPassword = /^.*(?=.{6,11})(?=.*[a-zA-Z])(?=.*\d)(?=.*[!#$%&?./-_@$* "]).*$/i;

const validate = (userData) => {
	let errors = {};
	if (!regexEmail.test(userData.username)) {
		errors.username = 'Correo electronico invalido'
	}

	if (!regexPassword.test(userData.password)) {
		errors.password = 'Contraseña invalida'
	}
	return errors;
};

export default validate;